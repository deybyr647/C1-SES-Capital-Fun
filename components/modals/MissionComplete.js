import React from 'react'
import ModalBase from './ModalBase'


const missionReference = {
  description: 'Save 150 dollars',
  points: 300,
  tier: 'Platinum'
}

function MissionComplete() {
  return (
    <ModalBase title={"Mission Complete"} hasShare={true}>
      <div className="mission-complete">
        <div>
          <h2>Mission Details:</h2>
          <ul>
            <li>Tier: {missionReference.tier}</li>
            <li>Description: {missionReference.description}</li>
            <li>Points Earned: {missionReference.points}</li>
          </ul>
        </div>
      </div>
    </ModalBase>
  )
}

export default MissionComplete
