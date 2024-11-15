import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { OfertasComponent } from './paginas/ofertas/ofertas.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { QuienessomosComponent } from './paginas/quienessomos/quienessomos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienessomos', component: QuienessomosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

