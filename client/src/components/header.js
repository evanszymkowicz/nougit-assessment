import React from 'react'
import UserAvatar from 'react-user-avatar'

const Header = ({ author }) => {
  return (<div className="text-left ">
    <div className="d-flex align-items-center">
      <UserAvatar src={author.picture} name="picture" size={48}/>
      <div className="ml-3">
        <h7 className="font-size-16">{author.name}</h7>
        <h7 className="text-muted font-size-14">Front-End Developer</h7>
      </div>
    </div>
  </div>
  )
}

export default Header
