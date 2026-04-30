import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import nike from '@/assets/nike.png'

const EgHeader = () => {
  return (
    <>
    <section className="sec-1">
                    <div className="main">
                        <div className="header">
                            <div><a href="/eg/find-a-store" className='header-link'>Find a Store</a></div>
                            <div>|</div>
                            <div className='help-container'>
                                <a href="/eg/help" className='header-link'>Help</a>
                                {/* pop up for help */}
                                <div className='help-popup'>
                                    <div><a href="/eg/help" className='help-link'>Help</a></div>
                                    <div className='help-options'>
                                        <div><a href="/eg" className='help-links'>Return</a></div>
                                        <div><a href="/eg/terms" className='help-links'>Term of Use</a></div>
                                        <div><a href="/eg/contact-us" className='help-links'>Contact Us</a></div>
                                    </div>
                                </div>
                            </div>
                            <div>|</div>
                            <div><a href="/eg/join-us" className='header-link'>Join Us</a></div>
                            <div>|</div>
                            <div><a href="/eg/sign-in" className='header-link'>Sign In</a></div>
                        </div>
                    </div>
                </section>
                <section className="sec-2">
                    <div className="main">
                        <div className='logo-section'>
                            <div>
                                <a href="/eg"><img src={nike} alt="Nike Logo" className='nike-logo' /></a>
                            </div>
                            <div className='logo-content'>
                                <div><a href="/eg/find-a-store" className='logo-link'>Find a Store</a></div>
                                <div><a href="/eg/about-us" className='logo-link'>About Us</a></div>
                            </div>
                            <div className='logo-icons'>
                                <div><a href="/eg/sign-in" className='btn-td'><FiUser /></a></div>
                                <div><button className='btn-td'><RxHamburgerMenu onClick={() => setIsMenuOpen(true)} /></button></div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default EgHeader