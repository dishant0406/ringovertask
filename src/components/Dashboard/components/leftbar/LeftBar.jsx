import React from 'react'
import './styles.scss'
import pen from '../../../../Assets/pen.svg'
import tick from '../../../../Assets/tick.svg'
import peoplenumber from '../../../../Assets/peoplenumber.svg'
import leftbarline from '../../../../Assets/leftbarline.svg'
import linkedin from '../../../../Assets/linkedin.svg'
import cloud from '../../../../Assets/cloud.svg'
import mail from '../../../../Assets/mail.svg'
import phone from '../../../../Assets/phone.svg'
import Vectorlanguage from '../../../../Assets/Vectorlanguage.svg'
import Vectormail from '../../../../Assets/Vectormail.svg'
import Vectorcalender from '../../../../Assets/Vectorcalender.svg'
import Vectormessage from '../../../../Assets/Vectormessage.svg'
import Vectorcamera from '../../../../Assets/Vectorcamera.svg'
import Vectorlink from '../../../../Assets/Vectorlink.svg'
import Subtractglobe from '../../../../Assets/Subtractglobe.svg'
import call from '../../../../Assets/Vectorphonewhite.svg'

let guid = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const LeftBar = ({tabs, setTabs, setActivetext}) => {
  const handleClick = (text)=>{
    const tabsRe = tabs.map(el=>{
      return {...el, active:false}
    })
    if(tabs.length < 4){
      const id = guid()
      
      setActivetext(text)
      setTabs([...tabsRe, {id, text, active:true}])
    }
  }
  return (
    <div className='leftbar'>
      <div className='firstsec'>
        <div className='sechead'>
        <p>Jean-Samuel Najnudel</p>
        <div className='secheadicon'>
          <img src={pen}/>
          <img src={tick}/>
        </div>
        </div>
        <div className='sechead2'>
          <p>President</p>
        </div>
        <div className='sechead3'>
          <p>Ringover</p>
          <img src={leftbarline}/>
          <img src={peoplenumber}/>
        </div>
        <div className='sechead4'>
          <p>https://www.ringover.com</p>
        </div>
      </div>
      <div className='secondsec'>
        <hr className='secondsechr'/>
        <div className='secondsecicons'>
          <img src={linkedin}/>
          <img src={cloud}/>
        </div>
        <hr className='secondsechr'/>
      </div>
      <div className='thirdsec'>
        <p>Topics</p>
        <div className='thirdsectags'>
          <button className='thirdsecbtn'>Some topic</button>
          <button className='thirdsecbtn'>Some topic name</button>
        </div>
      </div>
      <div className='fourthsec'>
        <p>Contact</p>
        <div className='fourthcontact'>
          <div className='contactline'>
            <img src={mail}/>
            <p>j.najnudel@ringover.com</p>
          </div>
          <div className='contactline'>
            <img src={phone}/>
            <p>+33 07 55 35 23 21</p>
          </div>
          <div className='contactline'>
            <img src={phone}/>
            <p>+33 99 53 05 19 21</p>
          </div>
        </div>
      </div>
      <div className='fourthsec'>
        <p>Additional</p>
        <div className='fourthcontact'>
          <div className='contactline'>
            <img src={mail}/>
            <p>president@ringover.com</p>
          </div>
          <div className='contactline'>
            <img src={Vectorlanguage}/>
            <p>Français</p>
          </div>
          <div className='contactline'>
            <img src={Vectorlink}/>
            <p>www.youtube.com/ringover</p>
          </div>
          <div className='contactline'>
            <img src={Subtractglobe}/>
            <p>Indian Standard (+5:30)</p>
          </div>
        </div>
      </div>
      <div className='fifthsec'>
        <button className='callbtn'>
          <img src={call}/>
        </button>
        <div className='fifthsecbtns'>
          <img onClick={()=>handleClick('camera')} src={Vectorcamera}/>
          <img onClick={()=>handleClick('calender')} src={Vectorcalender}/>
          <img onClick={()=>handleClick('mail')} src={Vectormail}/>
          <img onClick={()=>handleClick('message')} src={Vectormessage}/>
        </div>
      </div>
    </div>
  )
}

export default LeftBar