import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Card from '../../components/shared/Card';
import { toast } from 'react-toastify'
import { sendOTP, verifyOTP } from '../../http/index'
import { MdArrowForward, MdKeyboardBackspace } from 'react-icons/md'
import { TbMessageDots } from 'react-icons/tb'
import Button from '../../components/shared/Button';
import useHashStore from '../../store/store';

const StepOTP = ({ nextStep, backToPhoneEmail }) => {
     const phoneData = useHashStore(state => state.phone);
     const hashData = useHashStore(state => state.hash);
     const saveisAuth = useHashStore(store => store.saveisAuth)
     const saveisActivated = useHashStore(store => store.saveisActivated)
     // const navigate = useNavigate();
     const [otp, setOtp] = useState('');
     const resendOtpButton = async () => {
          const res = await sendOTP({ phone: `+91${phoneData}` })
          res && toast.success('OTP Sent...')
     }
     const nextStepButton = async (e) => {
          e.preventDefault()
          // console.log(otp)
          if (otp.length === 6) {
               try {
                    const res = await verifyOTP({ phone: `+91${phoneData}`, hash: hashData.hash, otp: otp })
                    res && saveisAuth(true)
                    res.data.user.activated && saveisActivated(true)
                    res.data.auth && toast.success('OTP Verified')
               } catch (error) {
                    console.log(error)
                    toast.error('OTP is Invalid')
               }
          } else {
               toast.error('OTP should be of 6 digits')
          }
     }
     return (
          <>
               <div className='pt-10 flex justify-center'>
                    <div className='place-items-start'>
                         <div onClick={backToPhoneEmail} className='px-2 py-2 bg-Primary text-Background flex justify-center items-center rounded-xl cursor-pointer'><MdKeyboardBackspace className='text-4xl' /></div>
                    </div>
                    <Card heading='Enter The OTP We just Sent You ' icon={TbMessageDots}>
                         <form onSubmit={nextStepButton} className='w-[500px]'>
                              <div className='flex justify-center'>
                                   <input value={otp} onChange={(event) => setOtp(event.target.value)}
                                        maxLength="6" className='mt-8 py-4 text-center tracking-[1.5em] w-6/12 bg-[#2F2F2F]/30 rounded-xl' placeholder='000000' required />
                              </div>
                              <div className='pt-5 opacity-50 text-center'>
                                   <span className=''>Didn't Recieve? <span onClick={resendOtpButton} className='underline underline-offset-4 cursor-pointer pl-2'>Resend OTP.</span></span>
                              </div>
                              <Button nextStep={nextStepButton} text="Verify" icon={MdArrowForward} />
                              {/* <Button onClick={() => navigate('/activate')} nextStep={nextStepButton} text="Verify" icon={MdArrowForward} /> */}
                         </form>
                    </Card>
               </div>
          </>
     )
}

export default StepOTP