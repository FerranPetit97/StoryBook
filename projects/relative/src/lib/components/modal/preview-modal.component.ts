import { Component } from '@angular/core';
import {
  BrandedButtonComponent,
  ModalComponent,
  ModalService,
} from '@relative/public-api';

@Component({
  selector: 'rlv-modal',
  standalone: true,
  imports: [BrandedButtonComponent],
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css'],
})
export class PreviewModalComponent {
  constructor(private readonly modalService: ModalService) {}

  openModal() {
    this.modalService.open(ModalComponent);
  }
}
