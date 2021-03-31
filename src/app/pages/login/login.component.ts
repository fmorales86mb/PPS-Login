import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Credential } from '../../models/credential';
import { $ } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  private email:string;
  private pass: string;
  //private showSpinner: boolean;

  private credential: Credential;

  constructor(private authService: AuthService){
  }  
  public async ClickIngresar(){
    //$("#spinner").show();

    try{
      this.credential = new Credential(this.email, this.pass);
      await this.authService.Ingresar(this.credential);      
      console.log("userId: ", this.authService.GetUserId());      
    }
    catch(error){
      console.log(error);
    }
    finally{
      //$("#spinner").hide();
      //this.showSpinner = false;
    }     
  }
}
