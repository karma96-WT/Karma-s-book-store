import React from 'react'
import './local.css';
const page = () => {
  return (
    <div className='body'>
        <div className="main">
            <h1>How can I help you?</h1>
            <p><strong>"We rise by lifting others." — Robert Ingersoll</strong></p>
            <p>
                <strong> Need a Helping Hand? </strong>
                Should you have any questions or simply wish to connect, please don’t hesitate to reach out through the contact details provided below.
                We would be truly delighted to welcome you to our office — a space where every book lover finds a place to belong.
                At the heart of our mission lies a simple promise: to nurture your passion for reading by delivering the world of books straight to your doorstep, with care, dedication, and heartfelt enthusiasm.
                Every inquiry, every visit, and every shared moment of curiosity is cherished here. Because at our core, we don’t just sell books — we build a community of dreamers, thinkers, and storytellers.
                Let’s turn pages together.      </p>
            <div className="four-divs">
                <div className="help-four-divs">
                <img
                    src="/image/location.gif"
                    alt="Location icon"
                    width="60px"
                    height="60px"
                />
                <span className="four-span">Our main Branch</span>
                <p>College of Science and Technology, Rinchending Bhutan</p>
                </div>
                <div className="help-four-divs">
                <img
                    src="/image/call.gif"
                    alt="Location icon"
                    width="60px"
                    height="60px"
                />
                <span className="four-span"> Phone Number</span>
                <p>+975 xxxxxxxx</p>
                </div>
                <div className="help-four-divs">
                <img
                    src="/image/fax.gif"
                    alt="Location icon"
                    width="60px"
                    height="60px"
                />
                <span className="four-span">Fax</span>
                <p>1-123-456-7890</p>
                </div>
                <div className="help-four-divs">
                <img
                    src="/image/email.gif"
                    alt="Location icon"
                    width="60px"
                    height="60px"
                />
                <span className="four-span">Email</span>
                <p>bookstore@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page