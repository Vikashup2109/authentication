import React from 'react'
import Card from '../../../components/shared/Card'
import { toast } from 'react-toastify'
import { MdArrowForward, MdOutlinePermPhoneMsg, MdEmail } from 'react-icons/md'
import { BiMobile } from "react-icons/bi";
import Button from '../../../components/shared/Button'
import IndianFlag from '../../../assets/IndiaFlag.png'
import { sendOTP } from '../../../http/index'
import useHashStore from '../../../store/store';

const Phone = ({ nextStep, otpType }) => {
     const saveHash = useHashStore(store => store.saveHash)
     const savePhone = useHashStore(store => store.savePhone)
     const [phoneNumber, setPhoneNumber] = React.useState('')
     const nextStepButton = async (e) => {
          e.preventDefault()
          if (phoneNumber.length === 10) {
               savePhone(phoneNumber) // save phone in store
               const res = await sendOTP({ phone: `+91${phoneNumber}` })
               res && saveHash({ hash: res.data.hash }) // save hash in store
               res && toast.success('OTP Sent...')
               res && nextStep()
          } else { toast.error('Please Enter a valid Phone Number') }
     }
     return (
          <>
               <div className='flex items-center justify-center gap-4'>
                    <div className='flex flex-col gap-8'>
                         <div className='px-1 py-3 bg-Primary text-Background flex justify-center items-center rounded-xl cursor-pointer'><BiMobile className='text-4xl' /></div>
                         <div onClick={otpType} className='px-1 py-3 hover:bg-white/30 flex justify-center items-center rounded-xl cursor-pointer bg-Background'><MdEmail className='text-4xl text-Primary' /></div>
                    </div>
                    <Card heading='Enter Your Phone Number' icon={MdOutlinePermPhoneMsg} >
                         <div className='w-[500px]'>
                              <form onSubmit={nextStepButton}>
                                   <div className='relative flex justify-center'>
                                        <img src={IndianFlag} alt="IndianFlag" className='absolute top-10 left-24' />
                                        <input type="" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber}
                                             className='mt-6 p-4 pl-20 tracking-[0.5em] w-8/12 bg-[#2F2F2F]/30 rounded-xl' placeholder='8888888888' required />
                                   </div>
                                   <Button nextStep={nextStepButton} text="Next" icon={MdArrowForward} />
                              </form>
                              <p className='px-28 text-xs text-center opacity-50 pb-6'>By Entering your details, you are agreeing to our privacy policy and our terms of services. Thanks!</p>
                         </div>
                    </Card>
               </div>
          </>
     )
}

export default Phone