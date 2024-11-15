import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Escucha los cambios en el carrito para actualizar la cantidad total de productos
    this.carritoService.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0); // Suma la cantidad de productos
    });
  }

  onCarritoClick() {
    console.log('Carrito clicked');
  }
}
