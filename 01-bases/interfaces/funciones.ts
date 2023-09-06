(()=>{
    interface addTwonNumber {
        (a:number, b:number):void
    }


    let addNumbersFunction:addTwonNumber = ( a:number, b:number ) => {
        return a*b;
    }

    console.log( addNumbersFunction(4,5) );
})()