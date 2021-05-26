import React from "react";
import emailjs from "emailjs-com";
import "./ContactStyle.scss"
import { BsFillEnvelopeFill, BsMap, BsPhone , } from "react-icons/bs"
function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_x2b3d1k', e.target, 'user_qLWL4vnfnfdz7ns2r1zoH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}
const Contact = () => {
    return (
        <div className = "background">
            <h1 className = "title">Contact Us</h1>
            <p className = "sub-title"> Fill out provided form</p>
            <div id = "contact-container">
                <div className = "contact-info">
                    <h4>
                        Contact Information
                    </h4>
                    <p>Complete all fields and click Submit</p>
                    <div className = "icon-text">
                        <BsPhone className = "fa"/>
                        <span>216-224-3019</span>
                    </div>
                    <div className = "icon-text">
                    <BsFillEnvelopeFill className = "fa"/>
                    <a href="mailto:admin@WRF.com">admin@WRF.com<span>admin@WRF.com</span></a>
                    </div>
                    <div className = "icon-text">
                    <BsMap className = "fa"/>
                        <span>10900 Euclid Ave, Cleveland, OH 44106</span>
                    </div>
                    </div>
                <form onSubmit = {sendEmail}>
                    <div className = "col">
                        <div className = "form-group">
                            <label> First Name </label>
                            <input type = "text" name ="name"/>
                        </div>
                        <div className = "form-group">
                            <label> Last Name </label>
                            <input type = "text" />
                        </div>
                    </div>
                    <div className = "col">
                        <div className = "form-group">
                            <label>E-Mail</label>
                            <input type = "email" name = "email"/>
                        </div>
                        <div className = "form-group">
                            <label>Phone Number</label>
                            <input type = "tel"
                            name = "phone"/>
                        </div>
                    </div>
                    <div className = "col">
                        <div className = "form-group solo">
                            <label> What Service Did You Need Assistance With? </label>
                            <div id = "radio-btns">
                            <div className = "radio-btn">
                            <input type = "radio" id="radioonutrition" name="type" value="personal"/><label for = "radioonutrition"> Nutrition </label>
                            </div>
                            <div className = "radio-btn">
                            <input type = "radio" id="radiofitness" name="type" value="fitness"/><label for = "radiofitness"> Fitness </label>
                            </div>
                            <div className = "radio-btn">
                            <input type = "radio" id="radioaccount" name="type" value="account"/><label for = "radioaccount"> Account Help </label>
                            </div>
                            <div className = "radio-btn">
                            <input type = "radio" id="radioother" name="type" value="other"/><label> Other </label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col">
                        <div className = "form-group solo">
                            <label>Message</label>
                            <textarea name = "message"> </textarea>
                        </div>
                     </div>
                     <div className = "col">
                        <div className = "form-group solo right">
                            <button className = "primary">Send Message</button>
                        </div>
                     </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;