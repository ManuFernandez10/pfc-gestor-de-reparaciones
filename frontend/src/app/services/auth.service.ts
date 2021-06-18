import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private afsAuth: AngularFireAuth, private router: Router) { }

login(usuario: string, pass: string) {
  this.afsAuth.signInWithEmailAndPassword(usuario, pass)
  .then( res => {
    console.log(res)
    this.router.navigate(['tarjetas-reparaciones']);
  })
  .catch(err => console.log('err', err));

}

logout() {
  return this.afsAuth.signOut();
}

}
