# Assignment-1-typescript
## What are some differences between interfaces and types in TypeScript?
 **Ans:** There are some key differences in interfaces and types.They are 
 * Interfaces are mainly  work with objects on the other hand types are work with primitive values,array,object also functions.
 * In interface we can easily extends a type   but In the types we don't extends another types we can do only union and intersection.
 * We need to write interface and a name for interface to declare a interface and for type we write type and a name type name for declare type. 
##  What is the use of the `keyof` keyword in TypeScript? Provide an example.
 **Ans:** We generally use the keyof keyword checking for types of a value like is it a number,string,boolean etc it's check the value with string like
 it allows us to ckeck the value with keyof value === "number".It also helps us on the run time checking and we can check the value types before a unvalid types set in the value.
 **Example:**
 ```ts
 const checkType=(value:string|number):number=>{
  if(typeof value==="number"){
      
    return value*value
  }
  else if(typeof value==="string"){
      const numValue=parseInt(value)  
    return numValue * numValue
  }
return value
}
console.log(checkType('20'))
```
## How does TypeScript help in improving code quality and project maintainability?
**Ans:** Typescript generally give us compile time type error that means it gives us type error before the runtime checking so that we cannot get unexpected error in runtime because  normally we have to do total count of many items price in number but mistakely one items price in string so this item will effect unexpected behaviour in total count typescript give us type error before we run the code and we can easilt save from a unexpected behaviour also typescript helps us on project maintainability when we work with big project we have our data in many types typescript are help to check data types in compile type that's why we can easily reform our data with safety and correct types.
