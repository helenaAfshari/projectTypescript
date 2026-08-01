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

import React from 'react';
import User from './component/User'
// بعد از دو نقطه خروجی رو مشخص میکنیم که نامبر هست
function sum(a:number,b:number){
  return a+b
}

function App() {
  return (

    <div className="App">
       <h1>typeScript</h1>

       <User name="hanna" age={22} hasChild={true} sum={sum} father="ghghbb" mother={"mother"}/>
       {/* چون فادر اپشنال شده نیازی نیست بنویسیم اجبار نیست*/}
       <User name="hanna" age={22} hasChild={true} sum={sum} mother={2}/> 

    </div>
  );
}

export default App;