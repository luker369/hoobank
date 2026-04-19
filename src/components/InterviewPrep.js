import React, { useState } from 'react'

const InterviewPrep = () => {


  const [dogsList, setDogsList] = useState([
    {name:"Daisy", age:5, color:"brown", goodBoy:true},
    {name:"Duke", age:5, color:"brown", goodBoy:true}, 
    {name:"Luna", age:4, color:"black", goodBoy:false}])

  const daisy = dogsList.find((item)=>{return item.name === "Daisy"})
  console.log(daisy)
  const duke = dogsList.find((item)=>{return item.name === "Duke"})
  console.log(duke)
  const goodBoys = dogsList.filter((item)=>{return item.goodBoy})
  console.log(goodBoys)
  return (

    <div style={{padding:"3em"}}>
      <p>What is the sum of Daisy plus Dukes age?</p>
      {/* {dogsList[0].age + dogsList[1].age} */}
      {daisy.age + duke.age}
      <p>Good Boys are:</p>
      {goodBoys.map((item)=>(<p>{item.name}</p>))}
    </div>
  )
}

export default InterviewPrep