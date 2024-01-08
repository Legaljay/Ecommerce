// eslint-disable-next-line no-unused-vars
import React from 'react'

const SellerLogin = () => {
  return (
    <div className='Login_page_wrapper'>
      <section className='login_page_header '>
        <div className='logo'></div>
        <div className='signIn_logo'></div>
      </section>
      <section className='login_form'>
        <h1>Welcome to Vendavault</h1>
        <h4>Sign In</h4>
        <form>
          <label htmlFor="Email">Email</label>
          <div className='input-box'>
            <input type="text" placeholder='tundewilliams@gmail.com' name='email' id='email' />
          </div>
          <label htmlFor="Password">Password</label>
          <div className='input-box'>
            <input type="text" placeholder='.........' name='password' id='password'/>
          </div>
          
        </form>
        <div className='button_section_container'>
          <button></button>
          <div className='button_footer'>
            <div className='button_footer_left'>
              <input type="checkbox" name="t&c" id="t&c" />
              <span>I accept all terms & conditions</span>
            </div>
            <div className='button_footer_right'>
              <p>Already have an account? <span>Sign Up</span> </p>
            </div>
          </div>
        </div>
      </section>

      <section className='social_login'>
        <p>Or connect with:</p>
        <div className='fb_login'>
          <div className='fb_icon'></div>
          <div className='fb_login_button_text'>Continue with Facebook</div>
        </div>
        <div className='google_login'>
          <div className='google_icon'></div>
          <div className='google_login_button_text'>Continue with Google</div>
        </div>
      </section>

      <section className='login_page_footer'>
        <div className='login_page_footer_container'>
          <div>
            <h1>Vendavault</h1>
            <p>A platform that links buyers with sellers</p>
          </div>
          <div>
            <h1>Company</h1>
            <ul>
              <a href="#"><li>About us</li></a>
              <a href="#"><li>Contact us</li></a>
              <a href="#"><li>Department</li></a>
              <a href="#"><li>FAQ</li></a>
              <a href="#"><li>Blogs</li></a>
              <a href="#"><li>Terms & Conditions</li></a>
              <a href="#"><li>Security</li></a>
            </ul>
          </div>
          <div>
            <h1>Links</h1>
            <ul>
              <a href="#"><li>Home</li></a>
              <a href="#"><li>Marketplace</li></a>
              <a href="#"><li>Token</li></a>
            </ul>
          </div>
          <div>
            <h1>Careers</h1>
            <div className='seller/vender'>
              <p>Seller/Vendor</p>
            </div>
          </div>
          <div>
            <h1>Social Handles:</h1>
            <a href="#"><li><span>Fb Icon</span> Facebook</li></a>
            <a href="#"><li><span>tw Icon</span> Twitter</li></a>
            <a href="#"><li><span>LI Icon</span> LinkedIn</li></a>
            <a href="#"><li><span>IG Icon</span> instagram</li></a>
          </div>
        </div>
        <div className='write_review'>
          <span>Icon</span> <p>Write review</p> 
          <span>
            <div>
              <p>Place Icon here</p>
            </div>
          </span>
        </div>
        <div className='all_rights_reserved'>All rights reserved</div>
      </section>
    </div>
  )
}

export default SellerLogin