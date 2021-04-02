import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Credential } from '../models/credential';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  private userId;

  constructor(private authDb: AngularFireAuth) { }

  public async Ingresar(credential: Credential): Promise<boolean>{           
    return await this.Authenticate(credential);
  }

  public GetUserId(){
    return this.userId;
  }

  private async Authenticate(credential: Credential): Promise<boolean>{    
    let isAuth:boolean;

    await this.authDb.signInWithEmailAndPassword(credential.GetEmail(), credential.GetPass())
    .then((userCredential) => {
      // Signed in
      this.userId = userCredential.user.uid;
      isAuth = true;
      //console.log("service: ", userCredential.user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage); 
      isAuth = false;     
    });

    return isAuth;
  }
}