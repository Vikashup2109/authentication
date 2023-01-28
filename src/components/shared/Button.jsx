import React from 'react'

const Button = ({ text, icon, nextStep }) => {
     const Icon = icon
     return (
          <>
               <div className='flex justify-center'>
                    <button onClick={nextStep} className='button flex items-center gap-5 bg-Primary text-Background py-2 px-8 rounded-xl my-10 text-lg font-bold hover:bg-PrimaryLite'>
                         {text}
                         <Icon className="" />
                    </button>
               </div>
          </>
     )
}

export default Button