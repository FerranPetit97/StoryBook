import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  message = '¡Hola! Este es un componente dinámico cargado dentro del modal.';

  constructor() {}
}