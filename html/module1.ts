class myRevealingModule1
{
    private _privateVar:  String;

     
    constructor (
        public PrivateVar?:string,) {

    }
   
   
    get privateVar() : string {
        console.log("Get private : ", this.privateVar);
        return this.privateVar;
    }
    set privateVar(value : string) {
        console.log("Set private : ", value);
        this.privateVar = value;
    }

}


