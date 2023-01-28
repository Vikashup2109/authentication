import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import HeroImageMic from '../../assets/HeroImageMic.png'
import ArrowForward from '../../assets/ArrowForward.png'
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';

const customStyles = {
     content: {
          margin: "auto",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          // marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(25, 25, 25, 1)",
          width: 550,
          borderRadius: " 10px",
          border: "none",
     },
     overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)'
     }
};

const Home = () => {
     const navigate = useNavigate();
     const [modalOpen, setModalOpen] = useState(false);
     return (
          <>
               <section className='w-9/12 mx-auto pt-20 items-center'>
                    <div className='flex gap-16'>
                         <div>
                              <img src={HeroImageMic} alt="HeroImageMic" className='' />
                         </div>
                         <div className='w-4/12 flex flex-col py-8 pl-16 my-auto'>
                              <span className='text-3xl py-2 font-bold'>Open Your Voice</span>
                              <span className='text-3xl py-3 font-bold'> But On <span className='text-Primary'>Open Voice</span> </span>
                              <span className='text-md py-4 text-justify'>Join a room and you are ready to raise your voice</span>
                              <button onClick={() => setModalOpen(true)} className='button text-center bg-Primary hover:bg-PrimaryLite text-Background py-2 rounded-xl my-10 text-lg font-bold'> Join Open Voice</button>
                         </div>
                    </div>
               </section>
               <Modal
                    isOpen={modalOpen}
                    onRequestClose={() => {
                         setModalOpen(false)
                         // callback(false)
                    }}
                    style={customStyles}
               >
                    <div>
                         <div className='flex flex-col gap-8 m-8'>
                              <div className='flex text-lg text-Primary font-bold mx-auto'>
                                   <span className='pr-3'>Welcome to the </span>
                                   <img src={Logo} alt='Logo' />
                                   <span className='pl-1'>Open Voice</span>
                              </div>
                              <div className='text-center'>
                                   <p className='leading-7 px-16 text-sm'>Experience crystal clear audio in your chats with our state-of-the-art platform. <br />
                                        Say goodbye to muffled voices and background noise.</p>
                              </div>
                              <div className='space-y-2'>
                                   <div onClick={() => navigate('/authenticate')} className='button bg-Primary hover:bg-PrimaryLite w-9/12 mx-auto rounded-lg py-2 text-md text-Background font-bold'>
                                        <div className='flex justify-center gap-3 '>
                                             <button>Authenticate Yourself</button>
                                             <img src={ArrowForward} alt="ArrowForward" />
                                        </div>
                                   </div>
                                   {/* <div className='mx-auto w-9/12 text-center text-xs'>
                                        <span className='text-Primary/50 pr-4'>Already have an Account?</span>
                                        <Link to="/auth">
                                             <button className='text-Primary underline underline-offset-4'>Login</button>
                                        </Link>
                                   </div> */}
                              </div>
                         </div>
                    </div>

               </Modal>
          </>
     )
}

export default Home