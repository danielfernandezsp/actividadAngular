import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-class',
  templateUrl: './section-class.component.html',
  styleUrls: ['./section-class.component.css']
})
export class SectionClassComponent implements OnInit {
  nFoto2 = 0;

  constructor() { }

  ngOnInit() {
   
  }

  recalculando2() {
    if (this.nFoto2 > 2) {
      this.nFoto2 = 0;

    } if (this.nFoto2 < 0) {
      this.nFoto2 = 2;
    }
  }
}

