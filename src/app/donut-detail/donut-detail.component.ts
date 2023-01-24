import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {

  @Input() parent = null;
  whichdonut = null;

  constructor() { }

  ngOnInit(): void {
    this.parent.detailDonutComp = this;
  }

  test() {

    console.log(this.whichdonut);
  }
}
