import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principios',
  templateUrl: './principios.component.html',
  styleUrls: ['./principios.component.scss']
})
export class PrincipiosComponent implements OnInit {

  cards = true;
  comunicacion = false;
  comprender = false;
  motivar = false;
  justicia = false;
  critica = false;
  perdon = false;
  confiar = false;
  integridad = false;
  empoderamiento = false;
  tiposPrincipios = [
    'Principio de Comunicación',
    'Principio de Comprender a las Personas',
    'Principio de Motivar a las personas',
    'Principio de Justicia',
    'Principio de la Critica',
    'Principio del Perdón',
    'Principio de Confiar en Dios',
    'Principio de Integridad',
    'Principio de Empoderamiento'
  ];

  imagesProvider = [
    './assets/comunicacion',
    './assets/comprender',
    './assets/motivar',
    './assets/justicia',
    './assets/criticar',
    './assets/perdon',
    './assets/confiar',
    './assets/integridad',
    './assets/empoderamient',
  ]
  dataResource: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log(this.tiposPrincipios.length);
    // for (let i = 0; i < 9; i++) {
    //   const result = {
    //     image: this.imagesProvider[i],
    //     title: this.tiposPrincipios[i]
    //   }
    //   this.dataResource.push(result);
    // }
    // console.log(this.dataResource);

    setInterval(() => {
      if (sessionStorage.getItem('back')) {
        this.cards = true;
        this.comunicacion = false;
        this.comprender = false;
        this.motivar = false;
        this.justicia = false;
        this.critica = false;
        this.perdon = false;
        this.confiar = false;
        this.integridad = false;
        this.empoderamiento = false;
        sessionStorage.clear();
      }
    }, 300);
  }

  onRedirect(name: string): void {
    console.log(name);
    // this.router.navigate([`${name}`]);
    if (name === 'Principio de Comunicación') {
      this.cards = false;
      this.comunicacion = true;
      this.comprender = false;
      this.motivar = false;
      this.justicia = false;
      this.critica = false;
      this.perdon = false;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio de Comprender a las Personas') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = true;
      this.motivar = false;
      this.justicia = false;
      this.critica = false;
      this.perdon = false;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio de Motivar a las personas') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = true;
      this.justicia = false;
      this.critica = false;
      this.perdon = false;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio de Justicia') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = false;
      this.justicia = true;
      this.critica = false;
      this.perdon = false;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio de la Critica') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = false;
      this.justicia = false;
      this.critica = true;
      this.perdon = false;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio del Perdón') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = false;
      this.justicia = false;
      this.critica = false;
      this.perdon = true;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio de Confiar en Dios') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = false;
      this.justicia = false;
      this.critica = false;
      this.perdon = false;
      this.confiar = true;
      this.integridad = false;
      this.empoderamiento = false;
    } else if (name === 'Principio de Integridad') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = false;
      this.justicia = false;
      this.critica = false;
      this.perdon = false;
      this.confiar = false;
      this.integridad = true;
      this.empoderamiento = false;
    } else if (name === 'Principio de Empoderamiento') {
      this.cards = false;
      this.comunicacion = false;
      this.comprender = false;
      this.motivar = false;
      this.justicia = false;
      this.critica = false;
      this.perdon = false;
      this.confiar = false;
      this.integridad = false;
      this.empoderamiento = true;
    }
  }
}
