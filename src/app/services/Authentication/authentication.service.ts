import {Injectable, NgZone} from '@angular/core';
import {delay, filter, map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Observable, of} from 'rxjs';
import firebase from 'firebase/compat/app';
import {ToastService} from '../Toast/toast.service';
import auth = firebase.auth;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>;
  private redirect = false;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private toastService: ToastService
  ) {
    this.isAuthenticated$ = afAuth.user.pipe(
      map(user => !!user)
    );
    this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
      delay(1000)
    );
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.route.firstChild),
      // eslint-disable-next-line @typescript-eslint/no-shadow
      switchMap(route => route?.data ?? of({}))
    ).subscribe(data => {
      this.redirect = data.authOnly ?? false;
    });
  }

// Firebase SignInWithPopup
  public async oAuthProvider(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((res) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
      }).catch((error) => {
        window.alert(error);
      });
  }

// Firebase Google Sign-in
  public async signInWithGoogle() {
    return this.oAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        this.toastService.presentToast('Successfully Logged In!', 3000, 'success');
      }).catch(error => {
        this.toastService.presentToast('We are having trouble logging you in. Please try again later', 5000, 'danger');
      });
  }

  public async logout($event?: Event) {
    if ($event) {
      $event.preventDefault();
    }
    await this.afAuth.signOut();
    await this.router.navigateByUrl('/');
  }
}
