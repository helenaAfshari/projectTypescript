import React from 'react'

// اسمش یونیون تایپ هست 
type UsersMother = "mari" | "gfded" | "juy"


type User ={
     name: String;
    age:number;
    hasChild:boolean;
    // این علامت سوال اختیاری یا آپشنال میشه
    father?:String;
    // یعنی نمیدونم تایپشو چی بزارم
    // mother:any;
    // اینجا تایپ مشخص کردیم پس همینو باید بنویسیم
    // یونیون تایپ هست اسمش 
    mother:UsersMother,
    // void یعنی هیچ نداره تاپ
    // اگر هم تایپی داشت مثل نامبر مینویسیم 

    sum : (a:number,b:number)=>number
}
function User({age,hasChild,name,sum,father,mother}:User) {
  return (
    <div>
         <h2>name:{name}</h2>
         <h2>age:{age}</h2>
         <h2>hasChild:{hasChild}</h2>
         <h2>sum:{sum(5,5)}</h2>
         <h2>father:{father}</h2>
         {/* فادر چون اپشنال هست */}
        <h2>father:{father ?? "g"}</h2>
        <h2>mother:{mother}</h2>

    </div>
  )
}

export default User