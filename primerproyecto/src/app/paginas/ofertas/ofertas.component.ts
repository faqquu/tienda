import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camisa de Algodón',
      descripcion: 'Camisa de algodón 100% cómoda y fresca.',
      precioan: 39.99,
      precio: 29.99,
      imagen: 'data:image/jpeg;base64,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', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Pantalones Vaqueros',
      descripcion: 'Pantalones vaqueros de corte clásico.',
      precioan: 69.99,
      precio: 49.99,
      imagen: 'https://dhb3yazwboecu.cloudfront.net/1500/Frank-Store---1.6.21-new-Pantalones-3_l.JPG', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Chaqueta de Cuero',
      descripcion: 'Chaqueta de cuero genuino.',
      precioan: 109.99,
      precio: 89.99,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_809543-MLA41634735796_052020-O.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 4,
      nombre: 'Zapatos de cuero',
      descripcion: 'Zapatos de cuero genuino.',
      precioan: 49.99,
      precio: 29.99,
      imagen: 'https://dorianargentina.com/wp-content/uploads/2020/07/zapatos-cuero-hombre-oxford-dorian-cannes-guinda-perfil.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 5,
      nombre: 'Pantalones de Algodon negro',
      descripcion: 'Pantalones de algodon comodos',
      precioan: 79.99,
      precio: 69.99,
      imagen: 'https://dcdn.mitiendanube.com/stores/001/066/782/products/sin-titulo-21-3d905c3d11e9d3fdf016245034198837-1024-1024.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Campera Adidas',
      descripcion: 'Campera de algodon de la marca adidas',
      precioan: 99.99,
      precio: 89.99,
      imagen: 'https://sportotalar.vtexassets.com/arquivos/ids/507561/IC0433-1074-BLACK-WHITE_1.jpg?v=638488915088570000', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
  constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
