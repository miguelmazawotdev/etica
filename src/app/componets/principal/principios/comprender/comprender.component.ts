import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprender',
  templateUrl: './comprender.component.html',
  styleUrls: ['./comprender.component.scss']
})
export class ComprenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
