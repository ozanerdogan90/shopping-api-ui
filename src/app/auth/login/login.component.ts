import { Component } from '@angular/core';
import { Creds, AuthService } from '../state/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor(private authService: AuthService) { }

    onSubmit(creds: Creds) {
        this.authService.login(creds).subscribe();
    }
}
