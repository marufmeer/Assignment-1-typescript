{


    function formatString(input: string, toUpper?: boolean): string{
       if(toUpper===true){
        const stringUppercase=input.toUpperCase()
        return stringUppercase
    }
    else if(toUpper===false){
        const stringLowercase=input.toLowerCase()
        return stringLowercase
    }
    return input
}
   const string= formatString('hello',true)
   const string2= formatString('Hello',false)
   const string3= formatString('hello')

console.log(string,string2,string3)



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
 const filterByRating=items.filter(item=>item.rating>=4)
 return filterByRating
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
const result=filterByRating(books)
console.log(result)


function concatenateArrays<T>(...arrays: T[][]): T[]{
     const multipleArrays=arrays.flat()
     return multipleArrays
   
}

const concat1=concatenateArrays(["a", "b"], ["c"]);       
const concat2=concatenateArrays([1, 2], [3, 4], [5]);  
console.log(concat1)   
console.log(concat2)   
 

      class Vehicle{
         private make:string;
         private year:number;
          constructor(make:string,year:number){
            this.make=make,
            this.year=year
          }
          getInfo(){
            return `Make:${this.make},Year:${this.year}`
          }
      }
      class Car extends Vehicle{
       model:string
          constructor(make:string,year:number,model:string){
            super(make,year)
            this.model=model
             
          }
          getModel(){
            return `Model:${this.model}`
          }
      }
      const myCar = new Car("Toyota", 2020, "Corolla");
   console.log(myCar.getInfo()) 
   console.log(myCar.getModel()) 

function processValue(value: string | number): number{
 if(typeof value ==="string"){
    return value.length
 }
 else if(typeof value ==="number"){
    return value*2
 }
 return value
}
console.log(processValue("hello")); 
console.log(processValue(10));  

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
  const filters=products.map(product=>product.price)
  const mostExpensivePrice=Math.max(...filters)
  console.log(mostExpensivePrice)
  const mostExpensiveProduct=products.find(product=>product.price===mostExpensivePrice)

  if(mostExpensiveProduct){
  return mostExpensiveProduct
  }
else{
    return null
}

  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  
  console.log(getMostExpensiveProduct(products));  


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
  
    if(Day.Sunday===day ){
        return "Weekend"
     }
     else {
      return "Weekday"
     }
   
  }
  console.log(getDayType(Day.Monday));   
console.log(getDayType(Day.Sunday));   

async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve,reject)=>{
        try{
           if(n>0){
          const number=n*n
          setTimeout(()=>{
               resolve( number) 
          },1000)
      
           }
           else{
            reject('negative number is not allowed')
           }
        }
        catch(error){
             console.log(error)
        }
    })
}

 squareAsync(4).then(console.log)
 squareAsync(-4).catch(console.error)


}
 