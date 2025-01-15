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

@Component({
  selector: 'rlv-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title: string = 'Modal Title';
  @Input() width: string = '400px';
  @Input() height: string = '200px';

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
}
