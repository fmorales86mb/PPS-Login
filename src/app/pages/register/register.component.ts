import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterCredential } from '../../models/registerCredential';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {

  private email:string;
  private pass1: string;
  private pass2: string;
  private showSpinner: boolean;
  private isDisabled: boolean;
  private isRequiered: boolean;
  private hasAlert: boolean;
  private alertMessage: string;
  private name: string;

  constructor(private authService: AuthService){
    this.showSpinner = false;
    this.isDisabled = false;
    this.isRequiered = false;
    this.hasAlert = false;
  }  
  
  public async ClickRegistrarse(){
    this.showSpinner = true;
    this.isDisabled = true;
    this.isRequiered = true;
    this.hasAlert = false;

    try{
      if(this.Validate()){
        let credential = new RegisterCredential(this.email, this.pass1, this.name);

        if (await this.authService.Registrarse(credential)){

        }
        else{
          this.alertMessage = "Error al registrar el usuario";
          this.hasAlert = true;
        }    
      }
    }
    catch(error){
      console.log(error);
      this.alertMessage = "Ocurrió un error inesperado";
      this.hasAlert = true;
    }
    finally{
      this.showSpinner = false;
      this.isDisabled = false;
    }     
  }

  private Validate():boolean{
    let isValid: boolean = true;

    if(!this.email && !this.pass1 && !this.name){
      this.alertMessage = "Debe ingresar nombre, email y contraseña";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.name){
      this.alertMessage = "Debe ingresar el nombre";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.email){
      this.alertMessage = "Debe ingresar su email";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.pass1){
      this.alertMessage = "Debe ingresar la contraseña";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.pass2){
      this.alertMessage = "Debe confirmar la contraseña";
      isValid = false;
      this.hasAlert = true;
    }    
    else if(this.pass1 != this.pass2){
      this.alertMessage = "Las contraseñas no coinciden";
      isValid = false;
      this.hasAlert = true;
    }

    return isValid;
  }

  ngOnInit() {}

}
