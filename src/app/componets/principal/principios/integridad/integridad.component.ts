import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integridad',
  templateUrl: './integridad.component.html',
  styleUrls: ['./integridad.component.scss']
})
export class IntegridadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
