import React from 'react';

function App() {
  
  let name : String = "ahmad"
  let counter =1
  let flag = false
  let array =[1,"fds",false]
  // یعنی این ارایه نامبر هست جنسش 
  let array2:Number[] = [1,2]
  let array3: String[] = ["d","g"]
  // حالا ترکیبی باشه تایپش هم عدد و هم استرینگ
  let array4:(number|string) []=[1,"rsfs"]
  let user = {
    name:"hanna",
    age:24,
    color:"red",
  }

  return (

    <div className="App">
       <h1>typeScript</h1>
    </div>
  );
}

export default App;
