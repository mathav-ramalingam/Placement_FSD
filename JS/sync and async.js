//Async and Sync
console.log( "-----------------------------------------sync and async-------------------------------" );
  
  
  async function Returnfun() {                          //using return
    return "eg for async with return";
  }
  console.log(Returnfun());
  
  
  
  async function fun() {                                  //without return
    console.log("eg for async without return");
  }
  fun();
  
  
  
  arrowfcReturn = async() =>                      //using setTimeout with arrow function  with return 
  { 
    setTimeout(() =>
    {
      console.log("async and await using timeout and arrowfunction (return) ")
    },1000)
    return "using return"
  }
  
  console.log(arrowfcReturn())
  
  

  arrowfc = async() =>                            //using setTimeout with arrow function without return
  {
    setTimeout(() =>
    {
      console.log("cse")
    }),2000
    console.log(await "kec")
  }
  
  arrowfc()





  
  
  