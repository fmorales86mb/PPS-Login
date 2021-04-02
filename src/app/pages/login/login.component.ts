import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Credential } from '../../models/credential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  private email:string;
  private pass: string;
  private showSpinner: boolean;
  private isDisabled: boolean;
  private credential: Credential;
  private isRequiered: boolean;
  private hasAlert: boolean;
  private alertMessage: string;

  constructor(private authService: AuthService){
    this.showSpinner = false;
    this.isDisabled = false;
    this.isRequiered = false;
    this.hasAlert = false;
  }  
  
  public async ClickIngresar(){
    this.showSpinner = true;
    this.isDisabled = true;
    this.isRequiered = true;
    this.hasAlert = false;

    //console.log(this.email, this.pass);

    try{
      if(this.Validate()){
        this.credential = new Credential(this.email, this.pass);

        if (await this.authService.Ingresar(this.credential)){

        }
        else{
          this.alertMessage = "email o contraseña incorrectos";
          this.hasAlert = true;
        }   
        //console.log("userId: ", this.authService.GetUserId()); 
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

    if(!this.email && !this.pass){
      this.alertMessage = "Debe ingresar email y contraseña";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.email){
      this.alertMessage = "Debe ingresar su email";
      isValid = false;
      this.hasAlert = true;
    }
    else if(!this.pass){
      this.alertMessage = "Debe ingresar la contraseña";
      isValid = false;
      this.hasAlert = true;
    }

    return isValid;
  }
}
