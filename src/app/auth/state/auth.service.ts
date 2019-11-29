import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { AuthStore, User } from './auth.store';

export interface Creds { password: string; username: string; }

@Injectable()
export class AuthService {

    constructor(
        private authStore: AuthStore,
        private router: Router
    ) { }

    login(creds: Creds) {
        return this.checkUser(creds).pipe(
            map(user => {
                this.authStore.login(user);
                this.router.navigate(['/']);
            }),
            catchError(error => of(error))
        );
    }

    register(user: Creds) {
        return this.addUser(user).pipe(
            map(user => {
                this.authStore.login(user);
                this.router.navigate(['/']);
            }),
            catchError(error => of(error))
        );
    }

    logout() {
        this.authStore.logout();
        this.router.navigate(['/login']);
    }

    private checkUser({ username, password }: Creds): Observable<User> {
        if (username !== 'test') {
            return throwError('Invalid username or password');
        }

        return of({ name: username });
    }

    private addUser(user: Creds): Observable<User> {
        return of({ name: user.username });
    }
}
