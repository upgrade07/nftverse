import React from 'react'
import LeftHeader from './LeftHeader'
import ProfileComp from './ProfileComp'

const LeftView = () => {
  return (
    <div className='leftview'>
        <LeftHeader/>
        <ProfileComp/>
        <ProfileComp/>
        <ProfileComp/>
        <ProfileComp/>
        <ProfileComp/>
    </div>
  )
}

export default LeftView