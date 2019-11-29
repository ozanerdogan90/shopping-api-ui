import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;
    private apiUrl = environment.baseUrl;
    constructor(private http: HttpClient) {
        if (!localStorage.getItem('currentUser')) {
            this.currentUserSubject = new BehaviorSubject<string>(undefined);
        } else {
            this.currentUserSubject = new BehaviorSubject<string>(atob(localStorage.getItem('currentUser')));
        }
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): string {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.apiUrl}/token`, { email, password })
            .pipe(map(token => {
                localStorage.setItem('currentUser', btoa(JSON.stringify(token)));
                this.currentUserSubject.next(token);
                return token;
            }));
    }

    register(user: User) {
        return this.http.post<any>(`${this.apiUrl}/register`, user)
            .pipe(map(_ => {
                return this.login(user.email, user.password);
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
