import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evan',
  templateUrl: './evan.component.html',
  styleUrls: ['./evan.component.css']
})
export class EvanComponent implements OnInit {
 @Input() number: number;
  constructor() { }

  ngOnInit() {
  }

}
