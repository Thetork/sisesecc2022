import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario:any;
  constructor(public router:Router) { 
    this.usuario = window.sessionStorage.getItem('usuario');
  }

  ngOnInit(): void {
  } 

  logout(){
    this.router.navigate(['/login']);
    
  }
  registrarSesion(){
    Swal.fire({
      title: 'Genial!',
      text: 'Guardando Datos...',
      icon: 'success',
      confirmButtonText: 'Continuar',
      allowOutsideClick: false
    }).then((result) => {
      this.router.navigate(['./orden_dia']);

    })
  }

  
  

}
