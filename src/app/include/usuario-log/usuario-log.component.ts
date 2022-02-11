import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-log',
  templateUrl: './usuario-log.component.html',
  styleUrls: ['./usuario-log.component.css']
})
export class UsuarioLogComponent implements OnInit {
  usuario:any;
  constructor(public router:Router) {
    this.usuario = window.sessionStorage.getItem('usuario');
   }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['./login']);

  }

}
