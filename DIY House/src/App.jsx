import { useState } from 'react'
import './App.css'
import Sample from './components/Sample'

const mockDB = [
  { 
    glbFileAddress: "https://cdn.glitch.global/b5ca4ccb-ed4c-4ece-b66c-5f831bd45890/KratkyMilkModele.glb?v=1695286915592",
    name : "Kratky Milk Modele",
    key: 1,
  },
  {
    glbFileAddress: "https://cdn.glitch.global/b5ca4ccb-ed4c-4ece-b66c-5f831bd45890/rainCollector.glb?v=1695469827748",
    name : "Rain Collector",
    key: 2,
  }



]

function App() {

  return (
    <>
      {
        mockDB.map((object) => <Sample objectName={object.name} glbFile={object.glbFileAddress} key={object.key} />)
      }

      
      
       
    </>
  )
}

export default App