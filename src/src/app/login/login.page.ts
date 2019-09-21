import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../shared/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();

  constructor(
      private router: Router,
      private authSVC: AuthService
  ) { }

  ngOnInit() {
  }
  async onLogin() {
    const user = await this.authSVC.onLogin(this.user);
    if (user) {
      console.log('Succesfully logged in¡');
      this.router.navigateByUrl('/home');
    }

  }
  viewPassword() {
    const tipo = document.getElementById('password');
    const valor = document.getElementById('iconEyePassword')
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
