import React from 'react'
import MenuIcon from './MenuIcon'

const LeftHeader = () => {
  return (
    <>
    <div className='leftheader'>
    <div className='logo'><img src='https://png.pngtree.com/element_origin_min_pic/16/09/20/1457e0dd321de52.jpg' alt='not loaded'></img></div>
    <div><h2><strong className='logotext'>SmartUp</strong></h2></div>
    <div className='leftheader-right'><button><MenuIcon/></button></div>
    </div>
    </>
  )
}

export default LeftHeader