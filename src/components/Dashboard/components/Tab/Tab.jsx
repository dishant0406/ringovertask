import React from 'react'
import cross from '../../../../Assets/Vectorcrosss.svg'
const Tab = ({tabw, bg, text, close, click}) => {
  const [rendertext, setRenderText] = React.useState('');
  React.useEffect(() => {
    if(text.length> 14){
      setRenderText(`${text.slice(0,15)}...`)
    }else{
      setRenderText(text)
    }
  
    
  }, [])
  
  return (
    <div  className="tab" style={{width: tabw, backgroundColor:bg}}>
      <p onClick={click}>{rendertext}</p>
      <button onClick={close}><img src={cross} className="cross"/></button>
    </div>
  )
}

export default Tab