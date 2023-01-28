import React, { useState } from 'react'
import Card from '../components/shared/Card'
import Button from '../components/shared/Button'
import { MdArrowForward } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import useHashStore from '../store/store'
import Avatar from '../assets/avatar.png'
import { toast } from 'react-toastify'
import { activate } from '../http'


const Activate = () => {
     const { saveUserName, saveUserAvatar, saveisActivated } = useHashStore(store => ({ saveUserName: store.saveUserName, saveUserAvatar: store.saveUserAvatar, saveisActivated: store.saveisActivated }))
     const userAvatar = useHashStore(store => store.userAvatar)
     const userName = useHashStore(store => store.userName)
     const [name, setName] = useState(userName || '')
     const avatar = userAvatar || Avatar
     // const [avatar, setAvatar] = useState(userAvatar || Avatar)

     const handleavatarUpload = (e) => {
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onloadend = () => {
               // setAvatar(reader.result)
               console.log(userAvatar)
               saveUserAvatar(reader.result)
          }
          reader.readAsDataURL(file)
     }

     const handleUserName = (e) => {
          setName(e.target.value)
          saveUserName(e.target.value)
     }

     const nextStepButton = async () => {
          if (name.length > 0) {
               try {
                    const res = await activate({ name, avatar })
                    if (res.data.auth) {
                         toast.success('Profile Created Successfully')
                         saveUserName(res.data.user.name);
                         saveUserAvatar(res.data.user.avatar);
                         saveisActivated(true)
                    }
               }
               catch (err) { console.log(err) }
          } else { toast.error('Please Enter a Name') }
     }
     return (
          <>
               <div className='flex items-center justify-center gap-4'>
                    <Card heading='Make your Profile' icon={RxAvatar} >
                         <div className='w-[670px]'>
                              <div className='flex justify-center mt-8 w-full gap-10'>
                                   <div className='w-4/12 flex flex-col justify-center text-center '>
                                        <span className='text-base text-Primary'>Your Avatar</span>
                                        <div className='my-4 p-1 bg-Primary rounded-full text-center mx-auto'>
                                             <img src={avatar} alt="" className='w-24 h-24 rounded-full object-cover' />
                                        </div>
                                        {/* <span className='text-xs text-center opacity-50'>Not this? <span className='underline cursor-pointer'> Choose here.</span></span> */}
                                        <span className='text-xs text-center opacity-50 space-x-2'><span>Not this? </span>
                                             <input type="file" id="avatarUpload" className='hidden' onChange={handleavatarUpload} />
                                             <label htmlFor="avatarUpload" className='underline cursor-pointer'>Upload Yours here...</label>
                                        </span>
                                   </div>
                                   <div className='flex flex-col justify-center w-6/12'>
                                        <span className='text-Primary'>What should I call you?</span>
                                        <input type="text" onChange={handleUserName} value={name}
                                             className='text-sm opacity-75 tracking-[0.1em] bg-[#2F2F2F]/30 rounded-xl py-3 px-2 my-4' placeholder='Enter Your Name, Please!' required />
                                        <span className='text-xs text-left opacity-40 pr-12 py-2'>Most people here enter their Nickname. But You are free to enter Original Name either. Thanks!</span>
                                   </div>
                              </div>
                              <Button nextStep={nextStepButton} text="Next" icon={MdArrowForward} />
                         </div>
                    </Card>
               </div>
          </>
     )
}

export default Activate