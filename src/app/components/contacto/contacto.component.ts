import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre: string ='';
  mensaje:string='';

  enviarFormulario() {
    alert(`Nombre: ${this.nombre}, Mensaje: ${this.mensaje}`);

}
}
