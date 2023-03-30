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
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valid: boolean) {
    if (valid) {
      this.htmlElement.nativeElement.classList.add('d-none');
    } else {
      this.htmlElement.nativeElement.classList.remove('d-none');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
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

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
