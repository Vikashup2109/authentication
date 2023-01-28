import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { logout } from '../../http'
import useHashStore from '../../store/store'

const Navigation = () => {
     const { saveisActivated, saveisAuth } = useHashStore(store => ({ saveUserName: store.saveUserName, saveUserAvatar: store.saveUserAvatar, saveisActivated: store.saveisActivated, saveisAuth: store.saveisAuth }))
     const isAuth = useHashStore(store => store.isAuth)
     const logoutUser = async () => {
          try {
               const res = await logout();
               res && saveisActivated(false)
               res && saveisAuth(false)

          } catch (error) {
               console.log("Logout Error", error)
          }
     }
     return (
          <nav className='w-9/12 mx-auto py-6 items-center'>
               <div className='flex justify-between'>
                    <Link to='/'>
                         <div className='flex gap-3'>
                              <img src={Logo} alt="Logo" className='w-5' />
                              <span>Open Voice</span>
                         </div>
                    </Link>
                    {!isAuth && <Link to='/authenticate'>
                         <div className='button border-2 border-Primary px-8 py-1 rounded-xl bg-Primary hover:bg-Background text-[#121212] hover:text-Primary font-bold'>
                              <button className=''>Login</button>
                         </div>
                    </Link>}
                    {isAuth &&
                         <div className='button border-2 border-Primary px-8 py-1 rounded-xl bg-Primary hover:bg-Background text-[#121212] hover:text-Primary font-bold'>
                              <button onClick={logoutUser} className=''>Logout</button>
                         </div>}
               </div>
          </nav>
     )
}

export default Navigation