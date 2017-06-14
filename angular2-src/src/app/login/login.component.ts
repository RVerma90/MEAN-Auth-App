import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// For Notifications based on input
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: String;
    password: String;

    constructor(
        private authService: AuthService,
        private snackBar: MdSnackBar,
        private router: Router) { }

    ngOnInit() {
    }

    onLoginSubmit() {
        const user = {
            username: this.username,
            password: this.password
        }
        // For the Snackbar notification
        const action = 'Okay'

        this.authService.authenticateUser(user).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.snackBar.open('You are now logged in', action, {
                    duration: 5000
                });
                this.router.navigate(['dashboard']);
            } else {
                this.snackBar.open(data.msg, action, {
                    duration: 5000
                });
                this.router.navigate(['login']);
            }
        });


    }

}
