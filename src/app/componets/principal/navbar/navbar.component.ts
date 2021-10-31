import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    'Inicio',
    'Principio',
    'Palacio de Sabiduria',
    'Los 7 Votos del Exito',
    'Consejo de Sabiduria',
    'Matriz de Resultado',
    'Matriz de Seguimiento',
    'Video'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // sessionStorage.setItem('name', 'Inicio');
  }

  onMenu(name: string): void {
    if (name === 'Inicio') {
      this.router.navigate(['']);
    } else if (name === 'Video') {
      window.open('https://youtu.be/b2xiLHLayUo');
    } else {
      this.router.navigate([`${name}`]);
    }
  }
}
