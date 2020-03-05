import { Component, OnInit, Input, ViewEncapsulation,
  OnChanges, SimpleChanges, DoCheck, AfterContentInit,
  AfterContentChecked,
AfterViewInit,
  ViewChild,
ContentChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
 @Input() element: {type: string, name: string, content: string};
 @ViewChild('heading', {static: true}) header: ElementRef;
 @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constractor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text content:' + this.header.nativeElement.textContent);
    console.log('Text content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCHeck called!');

  }

  ngAfterContentInit() {
    console.log('ngAfterContetInit called!');
    console.log('Text content of paragraph::' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContetChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text content:' + this.header.nativeElement.textContent);
  }
}
