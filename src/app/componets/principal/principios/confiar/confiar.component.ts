import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confiar',
  templateUrl: './confiar.component.html',
  styleUrls: ['./confiar.component.scss']
})
export class ConfiarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
