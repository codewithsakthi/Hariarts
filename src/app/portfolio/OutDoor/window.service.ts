import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  verifyOTP(otp: string) {
    const auth = this.afAuth;
    return auth.signInWithCustomToken(otp)
      .then(userCredential => {
        return userCredential.user;
      })
      .catch(error => {
        throw error;
      });
  }
}
