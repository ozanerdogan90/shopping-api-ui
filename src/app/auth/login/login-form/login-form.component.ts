import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Creds } from '../../state/auth.service';
@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
    @Input()
    set pending(isPending: boolean) {
        if (isPending) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    @Input() errorMessage: string | null;
    @Output() submitted = new EventEmitter<Creds>();
    form: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    onSubmit() {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    }
}
