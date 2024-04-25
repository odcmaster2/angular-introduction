import { ThisReceiver } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  registrationStatus: { success: boolean; message: string } = {
    success: false,
    message: 'Not attempted yet',
  };

  form = new FormGroup(
    {
      givenName: new FormControl('', Validators.required),
      surName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    },
  );
  constructor() {
    this.passwordConfirmValidator(this.form);
  }

    passwordConfirmValidator(form: FormGroup): void {
    form.setValidators((control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if (!password || !confirmPassword) {
        return null;
      }

      return password.value === confirmPassword.value ? null : { passwordMismatch: true };
    });
  }

    onSubmit(value: any) {
      console.log(value);
  
      const user = this.form.value as User;
      if ('confirmPassword' in user) {
        delete user['confirmPassword'];
      }
  
      this.userService.registerUser(user).subscribe({
        next: (response) => {
          console.log('User registered', response.msg);
          this.registrationStatus = { success: true, message: response.msg };
        },
        error: (response) => {
          const message = response.error.msg;
          console.log('Error registering user', message);
          this.registrationStatus = { success: false, message };
        },
      });
    }

    registerAnotherUser() {
      this.form.reset();
      this.registrationStatus = { success: false, message: 'Not attempted yet' };
    }

    check_duplicate_email() {
      const emailControl = this.form.get('email');
      if (emailControl && emailControl.value !== null) {
        const email = emailControl.value;
    
        this.userService.check_duplicate_email(email).subscribe({
          next: (response) => {
            console.log(response.msg);
            emailControl.setErrors(null);
          },
          error: (response) => {
            const message = response.error.msg;
            console.log(message);
            emailControl.setErrors({ duplicateEmail: true });
          },
        });
      }
    }
}
