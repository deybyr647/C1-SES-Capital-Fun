import React from 'react'
import {RiGroup2Fill} from "react-icons/ri"
import {IoMdAddCircle} from "react-icons/io"
// import {HiOutlineDotsVertical} from "react-icons/hi"

const communities = [
  {
    name: "community 1",
    users: ['user']
  },
  {
    name: "Family",
    users: ['user']
  },
  {
    name: "The BROOOSS",
    users: ['user']
  }
]

function Communities() {
  return (
    <div className = "communities-container">
      {communities.map((community, i) => 
        <div className="community">
          <RiGroup2Fill className='icon'/>
          {" "+community.name}
          {/* <HiOutlineDotsVertical className = "menu"/> */}
        </div>
      )}
      <div className = "community">
        <IoMdAddCircle className='icon'/>
        {" "}Create Community
      </div>
    </div>
  )
}

export default Communities
