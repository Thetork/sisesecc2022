import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TableModule} from 'primeng/table';


import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public id_usuario: any; 
  public user: any[] = [
      { nombre: 'Comité...', numero: '2', tipo:'Ordinaria', fecha: '22/03/2022', hora: '10:00 a.m.', seguimiento: 'Ver detalle...' },

  ];
  public cols:any;
  public perfil: any;

  constructor(
    private router: Router,
    ) {
     
     this.id_usuario = window.sessionStorage.getItem('usuario');
     
   }
  
  ngOnInit(): void {
    this.perfil = window.sessionStorage.getItem('perfil');
    if(this.perfil != '1'){
      this.router.navigate(['./login']);
    }

    
  
  }
  
  public logout(){
    window.sessionStorage.clear();

    this.router.navigate(['./login']);

  }

}
