import React from 'react'
import speak from '../../../../Assets/Vectorspeak.svg'
import doc from '../../../../Assets/Vectordov.svg'
import clipboard from '../../../../Assets/clipboard.svg'
import './styles.scss'
import Tab from '../Tab/Tab';
const CenterBar = ({tabs, setTabs, activetext, setActivetext}) => {
  
  const onClose = (id)=>{
    setTabs(tabs.filter(el=> el.id!==id))
  }

  const handleClick = (id)=>{
    const tabsRe = tabs.map(el=>{
      if(el.id===id){
        setActivetext(el.text)
        return {...el, active: true}
      }else{
        return {...el, active: false}
      }
    })

    setTabs(tabsRe)
  }
  
  return (
    <div className='centerbar'>
      <div className='centerbarnav'>
        <p>Workspace</p>
        <div className='navicons'>
          <img src={speak}/>
          <img src={doc}/>
        </div>
      </div>
      <div className='tabscontainer'> 
        {tabs.map(el=> {
          return  <Tab click={()=>handleClick(el.id)} close={()=>onClose(el.id)} key={el.id} text={el.text} tabw={tabs.length===4?'25%':'33%'} bg={el.active?'#08464b':'#6F8C94'}/>
        })}
      </div>
      <div className="mainarea">
       {tabs.length===0 && <div className="emptyarea">
          <img src={clipboard}/>
          <div className='emptyareatext'>
            <p className='emptyhead1'>Your workspace is empty!</p>
            <p className='emptyhead2'>To add a tab, click on any option on your bottom left</p>
          </div>
        </div>}
        {tabs.length !== 0 && <div className='filledarea'>
          {activetext}
        </div> }
      </div>
    </div>
  )
}

export default CenterBar