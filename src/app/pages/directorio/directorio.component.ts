import { Component } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent {

  cards: Card[] = [
    {
      nombre: 'Casa Ahued',
      descripcion: 'Tienda de artículos para el hogar',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'casa-ahued-1.jpg'
    },
    {
      nombre: 'Bodegón de Semillas',
      descripcion: 'Abarrotes',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'bodegon-de-semillas-1.jpg'
    },
    {
      nombre: 'Bola de Oro',
      descripcion: 'Cafetería',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'bola-de-oro-1.jpg'
    },
    {
      nombre: 'Liverpool Click & Collect',
      descripcion: 'Tienda departamental',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'liverpool-c&c-1.jpg'
    },
    {
      nombre: 'El Iris',
      descripcion: 'Papelería',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'el-iris-1.jpg'
    },
    {
      nombre: 'Cervecería Chapultepec',
      descripcion: 'Restaurant-Bar',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'cerveceria-chapultepec-1.jpg'
    },
    {
      nombre: 'Oriental Wok',
      descripcion: 'Restaurante',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'oriental-wok-1.jpg'
    },
    {
      nombre: 'Super Fasti',
      descripcion: 'Abarrotes',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'fasti-1.jpg'
    },
    {
      nombre: 'Hercón Coatepec',
      descripcion: 'Ferretería',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'hercon-1.jpg'
    },
    {
      nombre: 'Jugotropick',
      descripcion: 'Juguería',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'jugotropick-1.jpg'
    },
    {
      nombre: 'Laboratorio Alfa',
      descripcion: 'Análisis Clínicos',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'laboratorio-alfa-1.jpg'
    },
    {
      nombre: 'Boxis',
      descripcion: 'Artículos de madera',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'boxis-1.jpg'
    },
    {
      nombre: 'Look',
      descripcion: 'Artículos de belleza',
      socialLinks: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        website: 'https://powercenterxanat.com',
        tiktok: 'https://tiktok.com'
      },
      bgImg: 'look-1.jpg'
    }
  ];
}
