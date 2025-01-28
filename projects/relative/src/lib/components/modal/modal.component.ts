import { RLVModalService } from '../../services/modal.service';
import { CommonModule } from '@angular/common';
import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ViewContainerRef,
  inject,
  Input,
} from '@angular/core';
import { IOptions } from './interfaces/modal-options.interface';

@Component({
  selector: 'rlv-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() options: IOptions = {};

  @ViewChild('dynamicComponentContainer', {
    read: ViewContainerRef,
    static: true,
  })
  public viewContainerRef: ViewContainerRef;

  modalService = inject(RLVModalService);

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.modalService.close();
  }

  get styles() {
    return {
      width: this.options.width,
      height: this.options.height
    }
  }
}
