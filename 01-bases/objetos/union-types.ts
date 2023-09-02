(() => {

    type Hero = {
        name:string,
        age?:number,
        power:string[],
        getName?:() => string
    }

    let myCustomVariable: (string | number | Hero) = 'Daniel';

    console.log(typeof myCustomVariable );
    
    myCustomVariable = 20
    console.log(typeof myCustomVariable );
    
    myCustomVariable = {
        name:'Daniel',
        age:26,
        power:['estudioso', 'bueno'],
    }
    console.log(typeof myCustomVariable );
    console.log( myCustomVariable );
    
})()