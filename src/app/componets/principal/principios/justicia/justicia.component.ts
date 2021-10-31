import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-justicia',
  templateUrl: './justicia.component.html',
  styleUrls: ['./justicia.component.scss']
})
export class JusticiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
