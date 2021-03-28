import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  private email:string;
  private pass: string;

  constructor(private authService: AuthService){

  }

  public ClickIngresar(){
    console.log(this.email + ' ' + this.pass);

    try{
      let ingreso = this.authService.Ingresar(this.email, this.pass);
      console.log(ingreso);
    }
    catch(error){
      console.log(error);
    }          
  }
}
