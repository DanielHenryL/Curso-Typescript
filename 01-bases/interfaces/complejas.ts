(()=>{
    
    interface Client {
        name:string,
        age:number,
        address: Address
    }

    interface Address{
        id:number,
        city:string,
        zip:string;
    }

    const client:Client = {
        name:'Daniel',
        age:25,
        address:{
            id:12334,
            city:'lima',
            zip:'adasdsa'
        }
    }
    const client2:Client ={
        name:'Henry',
        age:26,
        address:{
            id:98765,
            city:'junin',
            zip:'gagaga'
        }
    }
})()