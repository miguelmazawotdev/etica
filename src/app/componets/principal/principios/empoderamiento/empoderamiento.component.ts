import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empoderamiento',
  templateUrl: './empoderamiento.component.html',
  styleUrls: ['./empoderamiento.component.scss']
})
export class EmpoderamientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
