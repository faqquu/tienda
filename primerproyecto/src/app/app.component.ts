import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './compartidos/menu/menu.component';
import { FooterComponent } from './compartidos/footer/footer.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, MenuComponent, FooterComponent] // Asegúrate de que estos componentes sean standalones
})
export class AppComponent {
  title = 'mi-tienda'; 
}
