import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adopcion.component.html',
  styleUrl: './adopcion.component.css'
})
export class AdopcionComponent {
  nombre = '';
  raza = '';
  edad: number | null = null;
  descripcion = '';

  enviarFormulario() {
    console.log('🐶 Publicado:', {
      nombre: this.nombre,
      raza: this.raza,
      edad: this.edad,
      descripcion: this.descripcion,
    });
    alert('Perro publicado para adopción 🐾');
  }
}