import powers from "../data/powers";

export class Hero {
    public name:string;
    public powerId:number;
    public age:number
    constructor( name:string, powerId:number, age:number){
        this.name = name;
        this.powerId = powerId;
        this.age = age;
    }

    get power():string{
        // el '?' siginica 'SI el valor existe has lo siguiente'
        // el '!' siginifica 'Estoy seguro que vendra el valor'
        return powers.find( power => power.id === this.powerId )?.name || 'Not found';
    }
}
