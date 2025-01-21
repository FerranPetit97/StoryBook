import {
  Injectable,
  ComponentRef,
  ApplicationRef,
  Type,
  createComponent,
  EnvironmentInjector,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { IOptions } from '@relative/public-api';

@Injectable({
  providedIn: 'root',
})
export class RLVModalService {
  private modalComponentRef: ComponentRef<ModalComponent>;

  constructor(private appRef: ApplicationRef) {}

  open<T extends object>(
    component: Type<T>,
    options?: Partial<IOptions>
  ): ComponentRef<T> | void {
    const modalComponentRef = createComponent(ModalComponent, {
      environmentInjector: this.appRef.injector,
    });
    this.modalComponentRef = modalComponentRef;

    this.appRef.attachView(this.modalComponentRef.hostView);
    const domElem = (this.modalComponentRef.hostView as any)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    if (!this.modalComponentRef.instance.viewContainerRef) {
      console.error('viewContainerRef is not available');
      return;
    }

    const modalInstance = this.modalComponentRef.instance;
    if (!modalInstance.viewContainerRef) {
      console.error('viewContainerRef is not available in ModalComponent');
      this.close();
      return;
    }

    const dynamicComponentRef = createComponent(component, {
      environmentInjector: this.appRef.injector as EnvironmentInjector,
    });

    if (options) {
      modalInstance.options = options;
    }

    dynamicComponentRef.changeDetectorRef.detectChanges();

    this.modalComponentRef.instance.viewContainerRef.insert(
      dynamicComponentRef.hostView
    );

    return dynamicComponentRef;
  }

  close() {
    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }
}
