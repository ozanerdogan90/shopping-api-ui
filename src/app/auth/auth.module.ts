import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './auth-guard.service';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthQuery } from './state/auth.query';
import { AuthStore } from './state/auth.store';
import { AuthService } from './state/auth.service';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { RouterModule } from '@angular/router';

export const COMPONENTS = [LoginFormComponent, LoginComponent, RegisterComponent, RegisterFormComponent];

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RootAuthModule,
            providers: [
                AuthService,
                AuthGuard,
                AuthQuery,
                AuthStore
            ]
        };
    }
}

@NgModule({
    imports: [AuthModule, AuthRoutingModule]
})
export class RootAuthModule { }
