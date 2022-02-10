import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:any;
  public dato: any;
  public token: any;
  public usuario_login: string;

  constructor( private router: Router) { 
    this.loginForm = {
      "usuario": "",
      "contrasena": "",
      "token": ""
    }
    this.token = "";
    this.usuario_login = "";
  }

  ngOnInit(): void {
  }
  public send(form: NgForm): void {
    if (form) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
        console.log(form.controls);
      }
      return;
    }

    // console.log(`Token `+ this.token +` generated`);
    // console.log(this.token);
  }

  login(){
    console.log(this.loginForm);  
    if(this.loginForm['token'] != ''){
      Swal.fire({
        title: 'Bienvenidx',
        text: 'Redirigiendo...',
        icon: 'success',
        confirmButtonText: 'Continuar',
        allowOutsideClick: false
      }).then( (result) => {
        console.log(result);
        
        if(result.isConfirmed){
          window.sessionStorage["usuario"] = this.loginForm['usuario'];
          window.sessionStorage["contrasena"] = this.loginForm['contrasena'];
          window.sessionStorage["perfil"] = "1";

          this.router.navigate(['./home']);
        }
        
      })

    }
  }

}
