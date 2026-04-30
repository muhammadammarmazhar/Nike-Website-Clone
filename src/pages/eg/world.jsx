import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'

function world() {
  return (
    <>
      <div className='main'>
        <div className='world-location'>
          <div className='world-location-title'>Select your Location</div>
          <div><IoMdClose className='cross-sign' /></div>
        </div>
        <div className='world-location-list'>
          <div className='countries'>
            <div className='countries-title'>Africa</div>
            <div className='box-container'>
              <a href='/eg' className='box-link'><div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Egypt</h4>
                  <div className='c-language'>English</div>
                </div>
              </div></a>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Morocco</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Maroc</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>South Africa</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
            </div>
          </div>
          <div className='countries'>
            <div className='countries-title'>Americas</div>
            <div className='box-container'>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Argentina</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Brazil</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Canada</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Canada</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
            </div>
            <div className='box-container'>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Argentina</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Brazil</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Canada</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Canada</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
            </div>
            <div className='box-container'>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Argentina</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <a href="/" className='box-link'><div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>United States</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              </a>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Canada</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Canada</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>
            </div>
            <div className='box-container'>
              <div className='box'>
                <div><IoLocationOutline className='location' /></div>
                <div className='box-inner'>
                  <h4 className='country'>Argentina</h4>
                  <div className='c-language'>English</div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default world