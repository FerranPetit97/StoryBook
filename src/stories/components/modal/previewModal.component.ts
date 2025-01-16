import { Component } from '@angular/core';
import { RLVModalService } from '../../../../projects/relative/src/lib/services/modal.service';
import { CTAButtonComponent, IOptions } from '@relative/public-api';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'rlv-preview-modal',
  standalone: true,
  templateUrl: './previewModal.component.html',
  imports: [CTAButtonComponent],
})
export class PreviewModalComponent {

  options: IOptions = {
    header: "Modal Header",
    width: "500px",
    height: "200px"
  };

  constructor(private readonly modalService: RLVModalService) {}

  openModal() {
    this.modalService.open(ModalComponent, this.options);
  }
}
