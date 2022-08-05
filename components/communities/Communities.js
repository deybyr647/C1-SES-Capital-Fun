import React, { useState } from 'react'
import {RiGroup2Fill} from "react-icons/ri"
import {IoMdAddCircle} from "react-icons/io"
import CreateCommunity from '../modals/CreateCommunity'
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

  const [showModal, setShowModal] = useState(false)

  return (
    <div className = "communities-container">
      <CreateCommunity showModal={showModal} setShowModal={setShowModal}/>
      {communities.map((community, i) => 
        <div key={i} className="community" onClick={() => {
          window.location.href = "/community"
        }}>
          <RiGroup2Fill className='icon'/>
          {" "+community.name}
          {/* <HiOutlineDotsVertical className = "menu"/> */}
        </div>
      )}
      <div onClick={() => setShowModal(true)} className = "community">
        <IoMdAddCircle className='icon'/>
        {" "}Create Community
      </div>
    </div>
  )
}

export default Communities
