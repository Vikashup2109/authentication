import React from 'react'
import Card from '../../../components/shared/Card'
import { MdArrowForward, MdEmail } from 'react-icons/md'
import { BiMobile } from "react-icons/bi";
import Button from '../../../components/shared/Button'
// import { sendOTP } from '../../../http/index'
import useHashStore from '../../../store/store';
import { toast } from 'react-toastify'

const Email = ({ nextStep, otpType }) => {
     // const saveHash = useHashStore(store => store.saveHash)
     const saveEmail = useHashStore(store => store.saveEmail)
     const useremail = useHashStore(store => store.email)
     const [email, setEmail] = React.useState(useremail || '')
     const nextStepButton = async () => {
          try {
               saveEmail(email) // save phone in store
               // const res = await sendOTP({ phone: `+91${phoneNumber}` })
               // res && saveHash({ hash: res.data.hash }) // save hash in store
               // console.log(res)
               // res && toast.success('OTP Sent...')
               // res && nextStep()
          } catch (err) {
               toast.error('Please Enter a valid Phone Number')
               console.log("Error", err)
          }
     }
     return (
          <>
               <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col gap-8'>
                         <div onClick={otpType} className='px-1 py-3 bg-Background hover:bg-white/30  flex justify-center items-center rounded-xl cursor-pointer'><BiMobile className='text-4xl text-Primary' /></div>
                         <div className='px-1 py-3 bg-Primary text-Background flex justify-center items-center rounded-xl cursor-pointer '><MdEmail className='text-4xl ' /></div>
                    </div>
                    <Card heading='Enter Your Email Address' icon={MdEmail}>
                         <div className='w-[500px]'>
                              <div className='relative flex justify-center'>
                                   <input className='mt-6 p-4 text-center tracking-[0.22em] w-8/12 bg-[#2F2F2F]/30 rounded-xl'
                                        placeholder='yourxyz@yourname.com' type="email"
                                        onChange={(e) => setEmail(e.target.value)} value={useremail} required />
                              </div>
                              <Button nextStep={nextStepButton} text="Next" icon={MdArrowForward} />
                              <p className='px-28 text-xs text-center opacity-50 pb-6'>By Entering your details, you are agreeing to our privacy policy and our terms of services. Thanks!</p>
                         </div>
                    </Card>
               </div>
          </>
     )
}

export default Email