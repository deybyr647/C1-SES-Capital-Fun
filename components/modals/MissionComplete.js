import React from 'react'
import ModalBase from './ModalBase'


const missionReference = {
  description: 'Save 150 dollars',
  points: 300,
  tier: 'Platinum'
}

const url = "https://www.google.com/search?q=mission+complete&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiTtay8hK_5AhUwhIkEHfVkB58Q_AUoAXoECAEQAw&biw=1440&bih=736&dpr=2#imgrc=pvfHGXbolsGAxM"
function MissionComplete() {
  return (
    <ModalBase title={"Mission Complete"} shareLink={"http://www.facebook.com/share.php?u=" + url}>
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
