// import React from 'react';

// // variables
// type user2 = {name:String; age:number}
// type array2 = Number[]
// export type array4 = (number|string)[]
// function App() {
  
//   let name : String = "ahmad"
//   let counter =1
//   let flag = false
//   let array =[1,"fds",false]
//   // یعنی این ارایه نامبر هست جنسش 
//   let array2:array2 = [1,2]
//   let array3: String[] = ["d","g"]
//   // حالا ترکیبی باشه تایپش هم عدد و هم استرینگ
//   let array4:array4 =[1,"rsfs"]
//   // تعریف آبجکت هست با {}
//   let user = {
//     name:"hanna",
//     age:24,
//     color:"red",
//   }
//   // جیا بگیره و چه تایپی باشه داخلش 
//   // محدودش کردیم که چی میتونیم بگیره نام و سن محدود شده
//    let user2: user2= {
//     name:"jfmm",
//     age:25
//   }


//   return (

//     <div className="App">
//        <h1>typeScript</h1>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import User from './component/User'
// // بعد از دو نقطه خروجی رو مشخص میکنیم که نامبر هست
// function sum(a:number,b:number):number{
//   return a+b;
// }

// function App() {
//   return (

//     <div className="App">
//        <h1>typeScript</h1>
//        <h2>{sum(5,5)}</h2>

//        <User name="hanna" age={22} hasChild={true}/>

//     </div>
//   );
// }

// export default App;



// union type

// import React from 'react';
// import User from './component/User'
// // بعد از دو نقطه خروجی رو مشخص میکنیم که نامبر هست
// function sum(a:number,b:number){
//   return a+b
// }

// function App() {
//   return (

//     <div className="App">
//        <h1>typeScript</h1>

//        <User name="hanna" age={22} hasChild={true} sum={sum} father="ghghbb" mother="mari"/>
//        {/* چون فادر اپشنال شده نیازی نیست بنویسیم اجبار نیست*/}
//        <User name="hanna" age={22} hasChild={true} sum={sum} mother="mari"/> 

//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import Article from "./component/Article"
// type State = {
//   name: String,
//   age : number,
// }
// function App() {
//   const [state,setState] = useState<State | null>(null);
//   return (
//     <div className='App'>
//       <h1>typeScript</h1>
//       {
//         // علامت سوال گذاشتیم چون ممکن نال باشه مقدارش  پس علامت سوال میزاریم 
//         state?.name
//       }
//       {/* <Article>
//          <h1>عنوان مقاله اول</h1>
//       </Article> */}

//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';
// import Article from "./component/Article"
// type State = {
//   name: String,
//   age : number,
// }
// function App() {
//   // اگر قرار نال هم بگیره اینو میزاریم 
//   const [state,setState] = useState<State | null>(null);
//   return (
//     <div className='App'>
//       <h1>typeScript</h1>
//       {
//         // علامت سوال گذاشتیم چون ممکن نال باشه مقدارش  پس علامت سوال میزاریم 
//         state?.name
//       }
//       {/* <Article>
//          <h1>عنوان مقاله اول</h1>
//       </Article> */}

//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import User from './component/User'
// function App() {
//   const [state,setState]=useState<String>("hanna")
//   return (
//     <div className="App">
//       {/* اینجا حالا ست استیت و بهش پاس دادیم */}
//       <User value={state} onChange={setState}/>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// // ادغام کردن تایپ ها هست
// type User1 = {
//    name:String;
//    age:number;
// }

// type User2 = User1 & {
//   children:String[]
// }

// // حالا استفاده از تایپ ادغام شده
// let user2:  User2={
//   age:5,
//   name:"fgdg",
//   children:["fdf"]
// }


// // ادغام کردن اینترفیس هست
// interface User5 {
//   name3:String,
//   age5:Number,
// }

// interface User6{
//   x:String,
//   y:Number,

// }
// interface User10 extends User6{
//   age6:Number,
// }
// // برای استفاده از اینترفیس
// let User10: User10 = {
// age6:8,
// x:"lll",
// y:55,
// }

// function App() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default App


import React from 'react'
import Button from './component/Button'
function App() {
  return (
    <Button buttonTitle='buttonTitle' />
  )
}

export default App