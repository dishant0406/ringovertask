import React from 'react'
import CenterBar from './components/centerBar/CenterBar'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar'
import './styles.scss'

const Dashboard = () => {
  const [tabs, setTabs] = React.useState([])
  const [activetext, setActivetext] = React.useState('')
  return (
    <div className='dashboard'>
      <LeftBar tabs={tabs} setTabs={setTabs} activetext={activetext} setActivetext={setActivetext}/>
      <CenterBar tabs={tabs} setTabs={setTabs} activetext={activetext} setActivetext={setActivetext}/>
      <RightBar/>
    </div>
  )
}

export default Dashboard