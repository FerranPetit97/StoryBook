import { Component } from '@angular/core';
import { RLVModalService } from '../../../../projects/relative/src/lib/services/modal.service';
import { CTAButtonComponent } from '@relative/public-api';
import { ModalComponent } from '@relative/lib/components/modal/modal.component';

@Component({
  selector: 'rlv-preview-modal',
  standalone: true,
  templateUrl: './previewModal.component.html',
  imports: [CTAButtonComponent],
})
export class PreviewModalComponent {
  constructor(private readonly modalService: RLVModalService) {}

  openModal() {
    this.modalService.open(ModalComponent, {
        
    });
  }
}
