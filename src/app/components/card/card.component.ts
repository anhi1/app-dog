import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  perros = [
    {
      nombre: 'Rocky – El Aventurero',
      descripcion: 'Rocky es un perrito curioso y valiente.',
      detalles: 'Ama correr por el parque, explorar cada rincón y es el primero en saludar a todos con una gran sonrisa.',
      imagen: 'https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg'
    },
    {
      nombre: 'Luna – La Dulce',
      descripcion: 'Luna es una perrita tranquila y amorosa.',
      detalles: 'Le encanta dormir largas siestas al sol y recibir caricias en la panza.',
      imagen: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg'
    },
    {
      nombre: 'Max – El Travieso',
      descripcion: 'Max es un torbellino de energía.',
      detalles: 'No puede estar quieto, ama jugar con su pelota y saltar por todos lados.',
      imagen: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg'
    }
  ];

  seleccionado: any = null;

  abrirModal(perro: any) {
    this.seleccionado = perro;
  }
}