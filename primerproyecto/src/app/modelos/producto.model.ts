export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precioan: number;
  precio: number;
  imagen: string;
  disponibilidad: boolean;
  cantidad?: number;
}
