import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Creds } from '../../state/auth.service';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
    @Input()
    set pending(isPending: boolean) {
        if (isPending) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

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
