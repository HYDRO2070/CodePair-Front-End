import React from 'react'
import "../Style_Sheet/Feauter_section.css"
import scholar from "../img/googlescholar-svgrepo-com.svg"
import image from "../img/new_img.png"
import com from "../img/community-group-leader-svgrepo-com.svg"
import work from "../img/work-alt-svgrepo-com.svg"
import dev from "../img/developer-centerpublic-api-svgrepo-com.svg"
import bri from "../img/bridge-svgrepo-com.svg"
import amazon from "../img/amazon.svg"
import apple from "../img/apple.svg"
import cisco from "../img/cisco.svg" 
import facebook from "../img/facebook.svg" 
import intel from "../img/intel.svg" 
import uber from "../img/uber.svg" 
import pinterest from "../img/pinterest.svg" 
import stripe from "../img/stripe.svg" 

const Feauter_section = () => {
    return (
        <>
            <div id='explore' className="exploring">
                <div className="ex-left">
                    <div className="ex-left-h">
                        <h2>Start Exploring</h2>
                        <div className="ex-left-img">
                            <img src={scholar} alt="" />
                        </div>
                    </div>
                    <div className="ex-left-down">
                        <p>Explore is a well-organized tool that helps you get the most out of CodePair by providing structure to guide your progress towards the next step in your programming career.</p>
                        <a href="">Get Started {'>'}</a>
                    </div>

                </div>
                <div className="ex-right">
                    <img src={image} alt="" />
                </div>
            </div>
            <div id='product' className="boxes">
                <div className="boxs">
                    <div className="boxs-imgs">
                        <img src={com} alt="" />
                    </div>
                    <h2>Questions, Community & Contests</h2>
                    <p>Over 3500 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.</p>
                    <a href="">View Question {'>'}</a>

                </div>
                <div className="boxs">
                    <div className="boxs-imgs">
                        <img src={work} alt="" />
                    </div>
                    <h2>Companies & Candidates</h2>
                    <p>Not only does CodePair prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.</p>
                    <a href="">Business Opportunities {'>'}</a>

                </div>
            </div>
            <div id='developer' className="bottom">
                <div className="bottom-box">
                    <div className="bottom-box-img">
                        <img src={dev} alt="" />
                    </div>
                    <h2>Developer</h2>
                    <p>We now support 14 popular coding languages. At our core, CodePair is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</p>
                </div>
                <div className="bottom-box">
                    <div className="bottom-box-img">
                        <img src={bri} alt="" />
                    </div>
                    <h2>Made with  in SF</h2>
                    <p>At CodePair, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.</p>
                </div>
            </div>
            <div className="patner">
                <img src={uber} alt="" />
                <img src={amazon} alt="" />
                <img src={facebook} alt="" />
                <img src={cisco} alt="" />
                <img src={apple} alt="" />
                <img src={intel} alt="" />
                <img src={pinterest} alt="" />
                <img src={stripe} alt="" />
            </div>
            <div className="join-team">
                <p>If you are passionate about tackling some of the most interesting problems around, we would love to hear from you.</p>
                <a href="">Join Our Team {'>'}</a>
            </div>
        </>
    )
}

export default Feauter_section