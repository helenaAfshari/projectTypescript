import React, { ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'

// اینجور کد نوشتن برای دکمه جالب نیست بهترش قسمت پایین هست که مقادیر دکمه را بگیره
// type Button = {
//  type?:String;
//  value?:String;
// onClick?: () => void;
// };
// function Button({}: Button) {
  
//   return  <button>Click</button>;
  
// }

// export default Button

// کل پراپس های دکمه را میگیره
type Button = ComponentProps<"button"> &{
  // حالا مقادیری که نبود داخل دکمه میاییم اضافه میکنیم
  buttonTitle?:string;
}
// یک تایپ دیگه هست اگر خواستیم از ref استفاده کنیم
// type Button2 = ComponentPropsWithRef<"button"> &{
//    buttonTitle?:string;

// }
// اینم یک تایپ دیگ هست
// اینجا ما ref رو نمیبینیم 
// type Button3 = ComponentPropsWithoutRef<"button"> &{
//    buttonTitle?:string;
// }
function Button({type,onChange,onClick,buttonTitle}:Button){
  return <button type={type}></button>
}

export default Button