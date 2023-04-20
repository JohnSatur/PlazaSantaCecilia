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
      nombre: 'Liverpool Click & Collect',
      descripcion: 'Tienda departamental',
      socialLinks: {
        facebook: 'https://www.facebook.com/XalapaEsParteDeMiVida?mibextid=ZbWKwL',
        instagram: 'https://www.instagram.com/liverpool_mexico/',
        website: 'https://www.liverpool.com.mx/',
      },
      bgImg: 'liverpool-c&c-1.jpg'
    },
    {
      nombre: 'Casa Ahued',
      descripcion: 'Tienda de artículos para el hogar',
      socialLinks: {
        facebook: 'https://www.facebook.com/CasaAhued',
        website: 'https://tiendaenlinea.casaahued.com/mx/tiendas',
      },
      bgImg: 'casa-ahued-1.jpg'
    },
    {
      nombre: 'Comex',
      descripcion: 'Tienda de pintura',
      socialLinks: {
        website: 'https://comex.care/xalapa.html',
      },
      bgImg: 'comex-1.jpg'
    },
    {
      nombre: 'Bola de Oro',
      descripcion: 'Cafetería',
      socialLinks: {
        facebook: 'https://www.facebook.com/CafeBolaDeOro/',
        instagram: 'https://www.instagram.com/cafeboladeoro/',
        website: 'https://boladeoro.com.mx/',
      },
      bgImg: 'bola-de-oro-1.jpg'
    },
    {
      nombre: 'Bodegón de Semillas',
      descripcion: 'Abarrotes',
      socialLinks: {
        facebook: 'https://www.facebook.com/elbodegondesemillas',
      },
      bgImg: 'bodegon-de-semillas-1.jpg'
    },
    
    {
      nombre: 'El Iris',
      descripcion: 'Papelería',
      socialLinks: {
        facebook: 'https://www.facebook.com/ElIrisPapeleriaOficial',
      },
      bgImg: 'el-iris-1.jpg'
    },
    {
      nombre: 'Super Fasti',
      descripcion: 'Abarrotes',
      socialLinks: {
        website: 'https://superfasti.com/',
      },
      bgImg: 'fasti-1.jpg'
    },
    {
      nombre: 'Look',
      descripcion: 'Artículos de belleza',
      socialLinks: {
        facebook: 'https://www.facebook.com/LookAccesoriosXalapa',
        instagram: 'https://www.instagram.com/look_accesorios',
      },
      bgImg: 'look-1.jpg'
    },
    {
      nombre: 'Cervecería Chapultepec',
      descripcion: 'Restaurant-Bar',
      socialLinks: {
        facebook: 'https://www.facebook.com/cerveceriachapultepeccoatepec/',
      },
      bgImg: 'cerveceria-chapultepec-1.jpg'
    },
    {
      nombre: 'Oriental Wok',
      descripcion: 'Restaurante',
      socialLinks: {
        facebook: 'https://www.facebook.com/profile.php?id=100067657576736',
        instagram: 'https://www.instagram.com/orientalwokveracruz/',
      },
      bgImg: 'oriental-wok-1.jpg'
    },
    {
      nombre: 'Hercón Coatepec',
      descripcion: 'Ferretería',
      socialLinks: {
        facebook: 'https://www.facebook.com/people/Hercon-Ferreter%C3%ADa/100076143756269/',
      },
      bgImg: 'hercon-1.jpg'
    },
    {
      nombre: 'Jugotropick',
      descripcion: 'Juguería',
      socialLinks: {
        website: 'https://jugotropick.com.mx/',
      },
      bgImg: 'jugotropick-1.jpg'
    },
    {
      nombre: 'Laboratorio Alfa',
      descripcion: 'Análisis Clínicos',
      socialLinks: {},
      bgImg: 'laboratorio-alfa-1.jpg'
    },
    {
      nombre: 'Boxis',
      descripcion: 'Artículos de madera',
      socialLinks: {
        facebook: 'https://www.facebook.com/boxismx/',
        instagram: 'https://www.instagram.com/boxismx/?hl=es-la',
        website: 'https://www.boxis.com.mx/',
      },
      bgImg: 'boxis-1.jpg'
    }
  ];
}
