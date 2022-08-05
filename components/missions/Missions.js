import React, { useEffect, useState } from 'react'

const missions = [
  {
    isComplete: false,
    missionReference: {
      description: 'Save 100 dollars',
      points: 200,
      tier: 'Platinum'
    }
  },
  {
    isComplete: false,
    missionReference: {
      description: 'Save 150 dollars',
      points: 250,
      tier: 'Platinum'
    }
  },
  {
    isComplete: false,
    missionReference: {
      description: 'Save 150 dollars',
      points: 300,
      tier: 'Platinum'
    }
  },
  {
    isComplete: true,
    missionReference: {
      description: 'Save 150 dollars',
      points: 300,
      tier: 'Platinum'
    }
  },
  {
    isComplete: true,
    missionReference: {
      description: 'Save 150 dollars',
      points: 250,
      tier: 'Platinum'
    }
  },
  {
    isComplete: false,
    missionReference: {
      description: 'Save 100 dollars',
      points: 200,
      tier: 'Silver'
    }
  },
  {
    isComplete: false,
    missionReference: {
      description: 'Save 150 dollars',
      points: 250,
      tier: 'Silver'
    }
  },
  {
    isComplete: false,
    missionReference: {
      description: 'Save 150 dollars',
      points: 300,
      tier: 'Silver'
    }
  },
  {
    isComplete: true,
    missionReference: {
      description: 'Save 150 dollars',
      points: 300,
      tier: 'Silver'
    }
  },
  {
    isComplete: true,
    missionReference: {
      description: 'Save 150 dollars',
      points: 250,
      tier: 'Silver'
    }
  },

]

function Missions() {
  missions.sort((o1, o2) => o2.missionReference.points - o1.missionReference.points)
  const silverIncomplete = []
  const platinumIncomplete = []
  const silverComplete = []
  const platinumComplete = []

  missions.forEach(mission => {
    if (mission.missionReference.tier === 'Silver') {
      if (mission.isComplete) silverComplete.push(mission)
      else silverIncomplete.push(mission)
    } else {
      if (mission.isComplete) platinumComplete.push(mission)
      else platinumIncomplete.push(mission)
    }
  })

  const [showSilver, setShowSilver] = useState(true)


  return (
    <div className="container">
      <MissionsList incomplete={silverIncomplete} complete={silverComplete} title={"Silver Missions"}/>
      <MissionsList incomplete={platinumIncomplete} complete={platinumComplete} title={"Platinum Missions"}/>
    </div>
  )
}

function MissionsList({incomplete, complete, title}) {
  return (
    <div className="missions">
    <h1>{title}</h1>
    <div><ul>
      {incomplete.map((mission, i) => 
        <li key={i}>
          <h3>
            <span>({mission.missionReference.points} pts) </span>
            {mission.missionReference.description}
          </h3>
          <div className="percentComplete">
            <span>80</span>
            <span>/</span>
            <span>100</span>
          </div>
        </li>  
      )}
      {complete.map((mission, i) => 
        <li key={i} className="completed">
          <h3>
            <span>({mission.missionReference.points} pts) </span>
            {mission.missionReference.description}
          </h3>
          <div className="percentComplete">
            <span>Finished!</span>
          </div>
        </li>
        
      )}
    </ul></div>
  </div>
  )
}


export default Missions
