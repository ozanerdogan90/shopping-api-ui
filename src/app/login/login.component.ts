import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

import { AuthenticationService } from '../shared/authentication/authentication.service';
import { Subject } from 'rxjs/internal/Subject';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    private readonly destroyed = new Subject<string>();

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private messageService: MessageService
    ) {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    get f() { return this.loginForm.controls; }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        const email = this.loginForm.controls.email.value;
        const password = this.loginForm.controls.password.value;
        this.authenticationService.login(email, password)
            .pipe(takeUntil(this.destroyed))
            .subscribe(
                _ => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Login failed',
                        detail: 'Please check your email adress and password'
                    });
                    this.loading = false;
                });
    }

    ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
