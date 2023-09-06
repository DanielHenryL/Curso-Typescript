(()=>{
    interface Xmen{
        name:string,
        realName:string,
        mutantPower( id:number ):string,
    }
    interface Human{
        age: number;
    }

    class Mutan implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        public mutantPower( id:number ): string {
            return `${this.name} ${this.realName}`
        }

    }

})()