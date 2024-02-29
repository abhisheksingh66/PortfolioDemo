import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import PageheaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate';
import './style.scss';
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
const personalDetails = [

  {
    label: "Name",
    value: "Abhishek singh",
  },


  {
    label: "Age",
    value: "23",
  },


  {
    label: "Address",
    value: "Bangalore, India",
  },

  {
    label: "Email",
    value: "abhishek.avin6@gmail.com",
  },

  {
    label: "Contact No.",
    value: "+91 8707018166",
  },
];

const jobsummary = 'As a fresh React Js FrontEnd Developer , i have solid foundation web development technologies and a passion for creating dynamic and interactive user interface. I am proficient in HTML5, CSS3, Javascript, jQuery, React.js , React Redux and Nextjs '


const about = () => {
  return (
    <section id='about' className='about'>
      <PageheaderContent
        headerText='About Me'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWraper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translatex(-900px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
            <h3>FrontEnd Developer</h3>
            <p>{jobsummary}</p>
          </Animate>


          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translatex(500px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >

            <h3 className='PersonalInformationHeaderText'>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}</span>
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content__servicesWraper'>
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translatex(600px)'
            }}
            end={{
              transform: 'translatex(0px)'
            }}
          >
          <div className='about__content__servicesWraper__innerContent'>
            <div>
              <FaDev size={60} color='var( --yellow-theme-main-color)' />
            </div>
            <div>
              <DiAndroid size={60} color='var( --yellow-theme-main-color)' />
            </div>
            <div>
              <FaDatabase size={60} color='var( --yellow-theme-main-color)' />
            </div>
            <div>
              <DiApple size={60} color='var( --yellow-theme-main-color)' />
            </div>
          </div>
          </Animate>
        </div>

      </div>
    </section>
  )
}

export default about
