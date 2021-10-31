import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motivar',
  templateUrl: './motivar.component.html',
  styleUrls: ['./motivar.component.scss']
})
export class MotivarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
