import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perdon',
  templateUrl: './perdon.component.html',
  styleUrls: ['./perdon.component.scss']
})
export class PerdonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    sessionStorage.setItem('back', 'true');
  }
}
