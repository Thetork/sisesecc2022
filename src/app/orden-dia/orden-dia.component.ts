import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-dia',
  templateUrl: './orden-dia.component.html',
  styleUrls: ['./orden-dia.component.css']
})
export class OrdenDiaComponent implements OnInit {
  orden_dia:any;
  constructor() {
    this.orden_dia = [
      {Id: '1', orden: 'Texto', observaciones: 'Texto', votacion: 'Unanimidad', documento: 'documento', cedula: 'Cedula', add_cedula: 'Upload'},
      {Id: '2', orden: 'Texto', observaciones: 'Texto', votacion: 'Mayoría', documento: 'documento', cedula: 'Cedula', add_cedula: 'Upload'}

    ];
   }

  ngOnInit(): void {
  }

}
