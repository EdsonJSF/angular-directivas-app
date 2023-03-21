import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  constructor() {
    console.log('Contructor Directive');
  }

  ngOnInit(): void {
    console.log('ngOnInit Directive');
  }
}
