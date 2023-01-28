import React, { useState } from 'react'
import Phone from './Phone'
import Email from './Email'
// import Card from '../../../components/shared/Card'
// import { MdArrowForward, MdOutlinePermPhoneMsg } from 'react-icons/md'
// import { BiMobile, BiMailSend } from "react-icons/bi";
// import Button from '../../../components/shared/Button'
// import IndianFlag from '../../../assets/IndiaFlag.png'


const OTPType = {
     Phone: Phone,
     Email: Email
}
const StepPhoneEmail = ({ nextStep, backToPhoneEmail }) => {
     const [otpType, setOtpType] = useState('Phone')
     const TypeToRender = OTPType[otpType];
     return (
          <>
               <TypeToRender nextStep={nextStep} backToPhoneEmail={backToPhoneEmail} otpType={() => { otpType === 'Phone' ? setOtpType('Email') : setOtpType('Phone') }} />
          </>
     )
}

export default StepPhoneEmail