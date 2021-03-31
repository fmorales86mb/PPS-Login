export class Credential{

    private email:string;
    private pass:string;

    constructor(email:string, pass:string){
        this.Validate(email, pass);

        this.email = email;
        this.pass = pass;
    }

    private Validate(email:string, pass:string):void{
        if(email == null && pass == null){
            throw "Debe ingresar email y contraseña";
        }
        if(email == null){
            throw "Debe ingresar su email";
        }
        if(pass == null){
            throw "Debe ingresar la contraseña";
        }
    }
    
    public GetEmail():string{
        return this.email;
    }

    public GetPass():string{
        return this.pass;
    }
}