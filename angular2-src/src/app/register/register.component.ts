import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// For input error notification
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: String;
    username: String;
    email: String;
    password: String;

    constructor(
        private validateService: ValidateService,
        private authService: AuthService,
        private snackBar: MdSnackBar,
        private router: Router) { }

    ngOnInit() {
    }

    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        }
        // For the Snackbar notification
        const action = 'Okay'

        // Required Fields - Users Validate Service to check against input fields
        if (!this.validateService.validateEmail(user.email)) {

            this.snackBar.open('Please use a valid email', action, {
                duration: 2000,
            });
            return false;
        }
        // Check Email
        if (!this.validateService.validateRegister(user)) {
            this.snackBar.open('Please fill in all fields', action, {
                duration: 2000,
            });
            return false;
        }

        // Register User
        this.authService.registerUser(user).subscribe(data => {
            console.log('registering');
            if (data.success) {
                this.snackBar.open('You are now registered and can log in', action, {
                    duration: 2000,
                });
                this.router.navigate(['/login']);
            } else {
                this.snackBar.open('Something went wrong.', action, {
                    duration: 2000,
                });
                this.router.navigate(['/register']);
            }
            console.log('process complete')
        })



    }
}
