import React from 'react'
import Community from '../communities/Community'
import Balances from './Balances'
import Goals from './Goals'

function Home() {
  return (
    <div>
     <Balances/>
     {/* <Community rank="1" name="TacoScience" totalPoints="400"/>
     <Community rank="1" name="TacoScience" totalPoints="400"/>
     <Community rank="1" name="TacoScience" totalPoints="400"/> */}
     <Goals/>
    </div>
  )
}

export default Home
