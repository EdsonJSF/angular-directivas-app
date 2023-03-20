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

  constructor(private fb: FormBuilder) {}

  validFormByName(name: string) {
    const invalid =
      this.miFormulario.get(name)?.invalid &&
      this.miFormulario.get(name)?.touched;

    return invalid || false;
  }
}
