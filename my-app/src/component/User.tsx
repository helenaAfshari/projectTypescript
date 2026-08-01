import React from 'react'

function User(props:{
    name: String, 
    age:number,
    hasChild:boolean,
    // void یعنی هیچ نداره تاپ
    // اگر هم تایپی داشت مثل نامبر مینویسیم 
    
    sum : (a:number,b:number)=>number
}) {
  return (
    <div>
         <h2>name:{props.name}</h2>
         <h2>age:{props.age}</h2>
         <h2>hasChild:{props.hasChild}</h2>
         <h2>sum:{props.sum(5,5)}</h2>

    </div>
  )
}

export default User