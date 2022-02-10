import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-alta-comision',
  templateUrl: './alta-comision.component.html',
  styleUrls: ['./alta-comision.component.css']
})
export class AltaComisionComponent implements OnInit {
  usuario:any;
  constructor(public router: Router) { 
    this.usuario = window.sessionStorage.getItem('usuario');

  }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['./login']);
  }
  guardarComision(){
    Swal.fire({
      title: 'Genial!',
      text: 'Guardando Datos...',
      icon: 'success',
      confirmButtonText: 'Continuar',
      allowOutsideClick: false
    })
  }
}
