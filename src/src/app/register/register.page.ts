import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    user: User = new User();


    constructor(
        private authSvc: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async onRegister() {
        if (this.user.password !== this.user.cpassword) {
            alert('Las contraseñas no son iguales');
            return console.log('las contraseñas no coinciden');
        } else {

            const user = await this.authSvc.onRegister(this.user);
            if (user) {
                console.log('Successfully created user¡');
                this.router.navigateByUrl('/login');
            }
        }
    }

    viewPassword() {
        const tipo = document.getElementById('password');
        const valor = document.getElementById('iconEyePassword');
        // @ts-ignore
        if ('password' === tipo.type) {
            // @ts-ignore
            tipo.type = 'text';
            // @ts-ignore
            valor.name = 'eye';
        } else {
            // @ts-ignore
            tipo.type = 'password';
            // @ts-ignore
            valor.name = 'eye-off';
        }
    }
    viewPassword2() {
        const tipo = document.getElementById('cpassword');
        const valor = document.getElementById('iconEyePassword2');
        // @ts-ignore
        if ('password' === tipo.type) {
            // @ts-ignore
            tipo.type = 'text';
            // @ts-ignore
            valor.name = 'eye';
        } else {
            // @ts-ignore
            tipo.type = 'password';
            // @ts-ignore
            valor.name = 'eye-off';
        }
    }
}

