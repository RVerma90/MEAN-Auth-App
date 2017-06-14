import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

// For Notifications based on input
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private snackBar: MdSnackBar,
        private router: Router) { }

    ngOnInit() {
    }

    onLogoutClick() {

        // For the Snackbar notification
        const action = 'Okay'

        this.authService.logout();
        console.log(this.snackBar);
        this.snackBar.open('You are now logged out', action, {
            duration: 2000
        });
        this.router.navigate(['/login'])
        return false;
    }

}
