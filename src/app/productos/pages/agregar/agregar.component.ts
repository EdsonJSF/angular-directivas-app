import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  });

  texto: string = 'Debe de ingresar este campo';
  color: string = 'red';

  constructor(private fb: FormBuilder) {}

  validFormByName(name: string) {
    const invalid =
      this.miFormulario.get(name)?.invalid &&
      this.miFormulario.get(name)?.touched;

    return invalid || false;
  }

  cambiarTexto() {
    this.texto = Math.random().toString();
  }

  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}
