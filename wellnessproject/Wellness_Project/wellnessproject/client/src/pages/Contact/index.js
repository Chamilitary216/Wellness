import React from "react";
import "./ContactStyle.scss"
import { BsFillEnvelopeFill, BsMap, BsPhone , } from "react-icons/bs"
import {FiTwitter, FiFacebook, FiInstagram, FiYoutube} from "react-icons/fi"



const Contact = () => {
    return (
        
        <div className = "background">
            <h1 className = "title">Contact Us</h1>
            <p className = "sub-title"> Lorem ipsum</p>

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
                        <span>admin@WRF.com</span>
                    </div>


                    <div className = "icon-text">

                    <BsMap className = "fa"/>
                        <span>123 Somewhere, Ohio 44120</span>
                    </div>


                    <div className = "social-media">
                        <a href = "#" className = "circle">
                            <i className = "icon"></i>
                            <FiTwitter className = "icon-circle"/>
                        </a>

                        <a href = "#" className = "circle">
                            <i className = "icon"></i>
                            <FiFacebook className = "icon-circle"/>
                        </a>

                        <a href = "#" className = "circle">
                            <i className = "icon"></i>
                            <FiInstagram className = "icon-circle"/>
                        </a>

                        <a href = "#" className = "circle">
                            <i className = "icon"></i>
                            <FiYoutube className = "icon-circle" />
                        </a>
                    </div>
                    </div>


                <form>

                    <div className = "col">
                        <div className = "form-group">
                            <label> First Name </label>
                            <input type = "text" />
                        </div>

                        <div className = "form-group">
                            <label> Last Name </label>
                            <input type = "text" />
                        </div>
                    </div>

                    <div className = "col">
                        <div className = "form-group">
                            <label>E-Mail</label>
                            <input type = "email" />
                        </div>

                        <div className = "form-group">
                            <label>Phone Number</label>
                            <input type = "tel" />
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
                            <textarea></textarea>
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