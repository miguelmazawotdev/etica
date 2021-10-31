import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  menuItems = [
    'Inicio',
    'Principio',
    'Palacio de Sabiduria',
    'Los 7 Votos del Exito',
    'Consejo de Sabiduria',
    'Matriz de Resultado',
    'Matriz de Seguimiento'
  ];
  inicio = true;
  principio = false;
  palacio = false;
  votos = false;
  sabiduria = false;
  resultado = false;
  seguimiento = false;

  constructor(private location: Location) { }

  ngOnInit(): void {
    // this.location.replaceState('Inicio');
  }

  onMenu(name: string): void {
    if (name === 'Inicio') {
      this.location.replaceState('');
      this.inicio = true;
      this.principio = false;
      this.palacio = false;
      this.votos = false;
      this.sabiduria = false;
      this.resultado = false;
      this.seguimiento = false;
    } else if (name === 'Principio') {
      this.location.replaceState(name);
      this.inicio = false;
      this.principio = true;
      this.palacio = false;
      this.votos = false;
      this.sabiduria = false;
      this.resultado = false;
      this.seguimiento = false;
    } else if (name === 'Palacio de Sabiduria') {
      this.location.replaceState(name);
      this.inicio = false;
      this.principio = false;
      this.palacio = true;
      this.votos = false;
      this.sabiduria = false;
      this.resultado = false;
      this.seguimiento = false;
    } else if (name === 'Los 7 Votos del Exito') {
      this.location.replaceState(name);
      this.inicio = false;
      this.principio = false;
      this.palacio = false;
      this.votos = true;
      this.sabiduria = false;
      this.resultado = false;
      this.seguimiento = false;
    } else if (name === 'Consejo de Sabiduria') {
      this.location.replaceState(name);
      this.inicio = false;
      this.principio = false;
      this.palacio = false;
      this.votos = false;
      this.sabiduria = true;
      this.resultado = false;
      this.seguimiento = false;
    } else if (name === 'Matriz de Resultado') {
      this.location.replaceState(name);
      this.inicio = false;
      this.principio = false;
      this.palacio = false;
      this.votos = false;
      this.sabiduria = false;
      this.resultado = true;
      this.seguimiento = false;
    } else if (name === 'Matriz de Seguimiento') {
      this.location.replaceState(name);
      this.inicio = false;
      this.principio = false;
      this.palacio = false;
      this.votos = false;
      this.sabiduria = false;
      this.resultado = false;
      this.seguimiento = true;
    }
  }
}
