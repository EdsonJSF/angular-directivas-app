import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private htmlElement!: ElementRef<HTMLElement>;

  private _color = 'red';
  private _mensaje = 'Este campo es requerido';

  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }

  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setEstilo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['mensaje']) {
    //   this.htmlElement.nativeElement.innerText =
    //     changes['mensaje'].currentValue;
    // }
    // if (changes['color']) {
    //   this.htmlElement.nativeElement.style.color =
    //     changes['color'].currentValue;
    // }
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  // setColor() {
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }

  // setMensaje() {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }
}
