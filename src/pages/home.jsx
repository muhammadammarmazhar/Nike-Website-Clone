import { RxHamburgerMenu } from 'react-icons/rx'
import nike from '../assets/nike.png'
import { FiUser } from 'react-icons/fi'
import shoe from '../assets/shoe.avif'
import discover from '../assets/discover.avif'
import p1 from '../assets/p1.avif'
import p2 from '../assets/p2.avif'
import { RiGlobalLine } from 'react-icons/ri'
import { FaAngleDown } from 'react-icons/fa'


const Home = () => {
    return (
        <div>
            <section className="sec-1">
                <div className="main">
                    <div className="header">
                        <div><a href="/find-a-store" className='header-link'>Find aa Store</a></div>
                        <div>|</div>
                        <div className='help-container'>
                            <a href="/" className='header-link'>Help</a>
                            {/* pop up for help */}
                            <div className='help-popup'>
                                <div><a href="/" className='help-link'>Help</a></div>
                                <div className='help-options'>
                                    <div><a href="/" className='help-links'>Return</a></div>
                                    <div><a href="/terms" className='help-links'>Term of Use</a></div>
                                    <div><a href="/contact-us" className='help-links'>Contact Us</a></div>
                                </div>
                            </div>
                        </div>
                        <div>|</div>
                        <div><a href="/join-us" className='header-link'>Join Us</a></div>
                        <div>|</div>
                        <div><a href="/sign-in" className='header-link'>Sign In</a></div>
                    </div>
                </div>
            </section>
            <section className="sec-2">
                <div className="main">
                    <div className='logo-section'>
                        <div>
                            <a href="/"><img src={nike} alt="Nike Logo" className='nike-logo' /></a>
                        </div>
                        <div className='logo-content'>
                            <div><a href="/find-a-store" className='logo-link'>Find a Store</a></div>
                            <div><a href="/about-us" className='logo-link'>About Us</a></div>
                        </div>
                        <div className='logo-icons'>
                            <div><FiUser /></div>
                            <div><RxHamburgerMenu /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-3">
                <div className="main">
                    <div className="blank"></div>
                </div>
            </section>
            <section className="sec-4">
                <div className="main">
                    <div className="">
                        <img src={shoe} alt='shoe' className='shoe' />
                    </div>
                </div>
            </section>
            <section className='sec-5'>
                <div className="main">
                    <div className='sec-5-content'>
                        <div className='sec-5-title'>Find your perfect running shoe</div>
                        <button type='button' className='btn sec-5-btn'><a href='/find-a-store' className='btn-td c' >Find a Store</a></button>
                    </div>
                </div>
            </section>
            <section className='sec-6'>
                <div className="main">
                    <div className='sec-6-content'>
                        <img src={discover} alt='discover' className='discover-img' />
                        <div className='sec-6-text'>
                            <div className='sec-6-title'>Discover the evolution of air </div>
                            <button className='btn sec-6-btn discover-btn'> <a href='/find-a-store' className='btn-td'>Find a Store</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-7'>
                <div className="main">
                    <div className='sec-7-img'>
                        <div>
                            <img src={p1} alt='p1' className='p1' />
                            <div className='sec-7-t'>
                                <div className='sec-7-t1'>Flexible Training Plans Tailored to You</div>
                                <div className='sec-7-t2'>With NTC, you get access to over 190 free workouts across strength, endurance, yoga and mobility.</div>
                            </div>
                            <div className='p-btns'>
                                <div>
                                    <button type='button' className='btn sec-5-btn'>Download iOS</button>
                                </div>
                                <div>
                                    <button type='button' className='btn sec-6-btn'>Download Android</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={p2} alt='p2' className='p2' />
                            <div className='sec-7-t'>
                                <div className='sec-7-t1'>For Every Run</div>
                                <div className='sec-7-t2'>The Nike Run Club gives you the guidance, inspiration and innovation you need to become a better athlete. Join us to reach your goals and have fun along the way.</div>
                            </div>
                            <div className='p-btns'>
                                <div>
                                    <button type='button' className='btn sec-5-btn'>Download iOS</button>
                                </div>
                                <div>
                                    <button type='button' className='btn sec-6-btn'>Download Android</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sec-8'>
                <div className='main'>
                    <div className='footer'>
                        <div><hr /></div>
                        <div className='footer-grid'>
                            <div className='footer-grid-item'>
                                <div className='item-list a'>
                                    <div className='accordion-header'>
                                        <div>Resources</div>
                                        <div><FaAngleDown className='down-arrow' /></div>
                                    </div>
                                    <div className='accordion-content'>
                                        <div className='list'><a href='/find-a-store' className='btn-td light-grey'>Find a Store</a></div>
                                    </div>
                                </div>
                                <div className="item-list a">
                                    <div className='accordion-header'>
                                        <div>Help</div>
                                        <div><FaAngleDown className='down-arrow' /></div>
                                    </div>
                                    <div className='accordion-content'>
                                        <div className='list'>
                                            <div><a href='/get-help' className='btn-td light-grey'>Get Help</a></div>
                                            <div><a href='/returns' className='btn-td light-grey'>Returns</a></div>
                                            <div><a href='/contact-us' className='btn-td light-grey'>Contact Us</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-list a">
                                    <div className='accordion-header'>
                                        <div>Company</div>
                                        <div><FaAngleDown className='down-arrow' /></div>
                                    </div>
                                    <div className='accordion-content'>
                                        <div className="list">
                                            <div><a href='/about-nike' className='btn-td light-grey'>About Nike</a></div>
                                            <div><a href='/news' className='btn-td light-grey'>News</a></div>
                                            <div><a href='/careers' className='btn-td light-grey'>Careers</a></div>
                                            <div><a href='/investors' className='btn-td light-grey'>Investors</a></div>
                                            <div><a href='/' className='btn-td light-grey'>Sustainability</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='footer-grid-r a'><a href='/world' className='btn-td light-grey'>
                                    <div><RiGlobalLine /></div>
                                    <div>Egypt</div>
                                </a></div>
                            </div>
                        </div>
                        <div className='footer-bottom'>
                            <div>© 2026 Nike, Inc. All rights reserved</div>
                            <div><a href='/terms-of-use' className='btn-td light-grey'>Terms of Use</a></div>
                            <div><a href='/privacy' className='btn-td light-grey'>Privacy & Cookie Policy</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home