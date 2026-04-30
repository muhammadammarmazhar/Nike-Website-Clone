import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { RiGlobalLine } from 'react-icons/ri'


function Egfooter() {
    return (

        <>
            <section className='sec-8'>
                <div className='main'>
                    <div className='footer'>
                        <div><hr /></div>
                        <div className='footer-grid'>
                            <div className='footer-grid-item'>
                                <div className='item-list a'>
                                    <div className='accordion-header' onClick={() => { toggleArrowChange('arrowChange1') }}>
                                        <div>Resources</div>
                                        <div>
                                            {arrowChange.arrowChange1 ? (
                                                <FaAngleUp className='down-arrow' />
                                            ) : (
                                                <FaAngleDown className='down-arrow' />
                                            )}
                                        </div>
                                    </div>
                                    {arrowChange.arrowChange1 && (
                                        <div className='accordion-content'>
                                            <div className='list'><a href='/eg/find-a-store' className='btn-td light-grey'>Find a Store</a></div>
                                        </div>
                                    )}
                                </div>
                                <div className="item-list a">
                                    <div className='accordion-header' onClick={() => toggleArrowChange('arrowChange2')}>
                                        <div>Help</div>
                                        <div>
                                            {arrowChange.arrowChange2 ? (
                                                <FaAngleUp className='down-arrow' />
                                            ) : (
                                                <FaAngleDown className='down-arrow' />
                                            )}
                                        </div>
                                    </div>
                                    {arrowChange.arrowChange2 && (
                                        <div className='accordion-content'>
                                            <div className='list'>
                                                <div><a href='/eg/get-help' className='btn-td light-grey'>Get Help</a></div>
                                                <div><a href='/eg/returns' className='btn-td light-grey'>Returns</a></div>
                                                <div><a href='/eg/contact-us' className='btn-td light-grey'>Contact Us</a></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="item-list a">
                                    <div className='accordion-header' onClick={() => toggleArrowChange('arrowChange3')}>
                                        <div>Company</div>
                                        {arrowChange.arrowChange3 ? (
                                            <FaAngleUp className='down-arrow' />
                                        ) : (
                                            <FaAngleDown className='down-arrow' />
                                        )}
                                    </div>
                                    {arrowChange.arrowChange3 && (
                                        <div className='accordion-content'>
                                            <div className="list">
                                                <div><a href='/eg/about-nike' className='btn-td light-grey'>About Nike</a></div>
                                                <div><a href='/eg/news' className='btn-td light-grey'>News</a></div>
                                                <div><a href='/eg/careers' className='btn-td light-grey'>Careers</a></div>
                                                <div><a href='/eg/investors' className='btn-td light-grey'>Investors</a></div>
                                                <div><a href='/eg/sustainability' className='btn-td light-grey'>Sustainability</a></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className='footer-grid-r a'><a href='/eg/world' className='btn-td light-grey'>
                                    <div><RiGlobalLine /></div>
                                    <div>Egypt</div>
                                </a></div>
                            </div>
                        </div>
                        <div className='footer-bottom'>
                            <div>© 2026 Nike, Inc. All rights reserved</div>
                            <div><a href='/eg/terms-of-use' className='btn-td light-grey'>Terms of Use</a></div>
                            <div><a href='/eg/privacy' className='btn-td light-grey'>Privacy & Cookie Policy</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Egfooter