import React, { useState } from 'react'
import StepPhoneEmail from './StepsPages/StepPhoneEmail/StepPhoneEmail'
import StepOTP from './StepsPages/StepOTP'

const steps = {
     1: StepPhoneEmail,
     2: StepOTP
}


const Authenticate = () => {
     const [stepNo, setStepNo] = useState(1)
     const StepToRender = steps[stepNo];

     return (
          <>
               <StepToRender nextStep={() => setStepNo(stepNo + 1)} backToPhoneEmail={() => setStepNo(stepNo - 1)} />
          </>
     )
}

export default Authenticate