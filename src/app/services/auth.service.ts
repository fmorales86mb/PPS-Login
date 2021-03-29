import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private service: RepositoryService) { }

  public Ingresar(email: string, pass: string): boolean{

    console.log(this.service.Authenticate());
    //console.log(this.service.GetAll());
    //this.service.SetItem();


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
