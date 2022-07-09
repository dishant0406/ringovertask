import React from 'react'
import './styles.scss'
import upload from '../../../../Assets/Vectorupload.svg'
import Callbar from '../../../../Assets/Callbar.svg'
const RightBar = () => {
  const [activeText, setActiveText] = React.useState('Activity')
  const [tasks, setTasks] = React.useState([
    {id:1, name:'Activity',active:true},
    {id:2,name:'Tasks',active:false},
    {id:3,name:'Progress',active:false},
  ])

  const handleClick = (id)=>{
      const tasksRe = tasks.map(el=>{
        return {...el, active:false}
      })

      setTasks(tasksRe.map(el=>{
         if(el.id===id){
          setActiveText(el.name)
          return {...el, active:true}
         }
         else{
          return el;
         }
      }))
  }
  return (
    <div className="rightbar">
      <div className="rightbarhead">
        <button className="rightheadbtn">
          <img src={upload}/>
          <p>Salesforce</p>
        </button>
        <img src={Callbar}/>
      </div>
      <div className="firstsec">
        <div className="firstsecbox">
          <div className="firstsecbtns">
          {tasks.map(el=>{
            return <button key={el.id} onClick={()=>handleClick(el.id)} className={el.active?`firstsecbtnactive`:'firstsecbtn'}>{el.name}</button>
          })}
          </div>
        </div>
      </div>
      <div className="secondsec">
        <p>{activeText}</p>
      </div>
    </div>
  )
}

export default RightBar