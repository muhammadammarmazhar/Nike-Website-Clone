import shoe from '@/assets/shoe.avif'
import discover from '@/assets/discover.avif'
import p1 from '@/assets/p1.avif'
import p2 from '@/assets/p2.avif'
import { RiGlobalLine } from 'react-icons/ri'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { IoIosHelpCircleOutline, IoMdClose } from 'react-icons/io'
import { MdOutlineStore } from 'react-icons/md'
import EgHeader from '@/components/egHeader'
import Egfooter from '@/components/egfooter'


const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const Egfooter = () => {
    const [arrowChange, setArrowChange] = useState({
            arrowChange1: false,
            arrowChange2: false,
            arrowChange3: false
        })
        const [screenWidth, setScreenWidth] = useState(window.innerWidth)
        
            // i want to get screen width on resize 
            useEffect(() => {
                const handleResize = () => {
                    setScreenWidth(window.innerWidth)
        
                    if (window.innerWidth > 1024) {
                        setArrowChange({
                            arrowChange1: true,
                            arrowChange2: true,
                            arrowChange3: true
                        })
                    }
                };
                // Run once on mount (optional but useful)
                handleResize();
        
                window.addEventListener("resize", handleResize);
                
                
                //Cleanup (VERY IMPORTANT)
                return () => {
                    window.removeEventListener("resize", handleResize);
                };
            }, []);
        
            const toggleArrowChange = (key) => {
        
                //if screen width is less than 1024px, don't toggle
                if (screenWidth > 1024) {
        
                    return;
                }
        
                setArrowChange({
                    ...arrowChange,
                    [key]: !arrowChange[key]
                })
            }
        }
    // console.log({ ...toggleAccordion, [accordion]: !toggleAccordion[accordion] })

    return (
        <div>
            <EgHeader />
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
                        <button type='button' className='btn sec-5-btn'><a href='/eg/find-a-store' className='btn-td c' >Find a Store</a></button>
                    </div>
                </div>
            </section>
            <section className='sec-6'>
                <div className="main">
                    <div className='sec-6-content'>
                        <img src={discover} alt='discover' className='discover-img' />
                        <div className='sec-6-text'>
                            <div className='sec-6-title'>Discover the evolution of air </div>
                            <button className='btn sec-6-btn discover-btn'>
                                <a href='/eg/find-a-store' className='btn-td '>Find a Store</a></button>
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
            <Egfooter />
            <section className={`righttoleft ${isMenuOpen ? 'open' : ''}`}>
                <div className="rl-popup">
                    <div className="cross">
                        <IoMdClose className='cross-sign' onClick={() => setIsMenuOpen(false)} />
                    </div>
                    <div className='rl-headings'>
                        <div>
                            Find a Store
                        </div>
                        <div>
                            About Us
                        </div>
                    </div>
                    <div className='rl-content'>
                        <div className='rl-p'>
                            Become a Nike Member for the best products, inspiration and stories in sport. <a>Learn More</a>
                        </div>
                        <div className='rl-buttons'>
                            <button type="button" className='btn sec-5-btn'>Join Us</button>
                            <button type="button" className='btn sec-6-btn'>Sign In</button>
                        </div>
                    </div>
                    <div className='rl-icons'>
                        <div className='rl-name'>
                            <div><IoIosHelpCircleOutline /></div>
                            <div>Help</div>
                        </div>
                        <div className='rl-name'>
                            <div><MdOutlineStore /></div>
                            <div>Find a Store</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home