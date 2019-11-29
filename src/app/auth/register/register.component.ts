import { Component, OnInit } from '@angular/core';
import { AuthService, Creds } from '../state/auth.service';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent {
    constructor(private authService: AuthService) { }

    onSubmit(creds: Creds) {
        this.authService.register(creds).subscribe();
    }
}
