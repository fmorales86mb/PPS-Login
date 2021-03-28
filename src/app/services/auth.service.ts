import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }

  public Ingresar(email: string, pass: string): boolean{
    if(email == null && pass == null){
      throw "Debe ingresar email y contraseña";
    }
    if(email == null){
      throw "Debe ingresar su email";
    }
    if(pass == null){
      throw "Debe ingresar la contraseña";
    }
    
    //validar
    return true;
  }

}
