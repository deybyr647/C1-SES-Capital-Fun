import React from 'react'

const community = [
  {
    name: "user1",
    totalPoints: 500
  },
  {
    name: "user2",
    totalPoints: 300
  }
]

function Community(props) {
    {/*  
      This changed the left strip into blue
      <section className='communityWrapper blue'>
    */}
  return (
    <section className='communityWrapper'>
      <div>
        <div>
          <h2>
            {props.rank}.
          </h2>
        </div>
        <div>
          <h2>
            {props.name}
          </h2>
        </div>
        <div>
          <h2>
            {props.totalPoints}
          </h2>
          {/* SVG */}
        </div>
      </div>
    </section>
  )
}

export default Community
