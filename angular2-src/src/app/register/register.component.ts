import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service'

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

    constructor(private validateService: ValidateService, public snackBar: MdSnackBar) { }

    ngOnInit() {
    }

    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        }

        // Require Fields - Users Validate Service to check against input fields
        if(!this.validateService.validateEmail(user.email)){
          const action = 'Okay'
          this.snackBar.open('Please use a valid email', action, {
             duration: 2000,
           });
        }

        if(!this.validateService.validateRegister(user)){
          const action = 'Okay'
          this.snackBar.open('Please fill in all fields', action, {
             duration: 2000,
           });
        }
    }
}
