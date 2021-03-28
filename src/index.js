function firstFunction(){
    console.log("Hello from firstFunction");
   }
   
   function secondFunction(){
    firstFunction();
    console.log("The end from secondFunction");
   }
   secondFunction();