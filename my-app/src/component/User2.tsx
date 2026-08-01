import React from 'react'
type User ={
     name: String;
    age:number;
    hasChild:boolean;
    // این علامت سوال اختیاری یا آپشنال میشه
    father?:String;
    // یعنی نمیدونم تایپشو چی بزارم
    mother:any;
    // void یعنی هیچ نداره تاپ
    // اگر هم تایپی داشت مثل نامبر مینویسیم 

    sum : (a:number,b:number)=>number
}
const User:React.FC<User>=({age,hasChild,name,sum,father})=> {
  return (
    <div>
         <h2>name:{name}</h2>
         <h2>age:{age}</h2>
         <h2>hasChild:{hasChild}</h2>
         <h2>sum:{sum(5,5)}</h2>
       

    </div>
  )
}

export default User