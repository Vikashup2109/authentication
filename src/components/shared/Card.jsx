import React from 'react'

const Card = ({ heading, icon, children }) => {
     const Icon = icon
     return (
          <>
               <section className='py-32 flex items-center justify-center py-auto'>
                    <div className='bg-Secondary  m-auto rounded-2xl'>
                         <div className='flex justify-center items-center text-Primary gap-4 text-xl font-bold mt-8'>
                              <Icon className='text-3xl' />
                              <h1>{heading}</h1>
                         </div>
                         {children}
                    </div>
               </section>
          </>
     )
}

export default Card