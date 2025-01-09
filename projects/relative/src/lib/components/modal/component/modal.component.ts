import { ModalService } from '../../../services/modal.service';
import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('dynamicComponentContainer', {
    read: ViewContainerRef,
    static: true,
  })
  public viewContainerRef: ViewContainerRef;

  width: string = '400px';
  height: string = '200px';
  title: string = 'Modal Title';
  

  modalService = inject(ModalService);

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.modalService.close();
  }
}
