import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  private htmlElement!: ElementRef<HTMLElement>;

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es necesario';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
