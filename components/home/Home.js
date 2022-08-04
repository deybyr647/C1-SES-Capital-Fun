import React from 'react'

function Home() {
  return (
    <div>
     <Balances/>
     <Goals/>
    </div>
  )
}


function Balances() {
  return (
    <div>
      Balances
    </div>
  )
}

function Goals() {
  // no data for this, just fake it
  return (
    <div>
      Goals
    </div>
  )
}

export default Home
