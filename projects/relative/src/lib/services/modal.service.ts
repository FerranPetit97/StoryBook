import {
  Injectable,
  ComponentRef,
  ApplicationRef,
  Type,
  createComponent,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class RLVModalService {
  private modalComponentRef: ComponentRef<ModalComponent>;

  constructor(private appRef: ApplicationRef) {}

  open<T>(component: Type<T>, options?: Partial<T>): ComponentRef<T> | void {
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

    const dynamicComponentRef = createComponent(component, {
      environmentInjector: this.appRef.injector,
    });

    // Set inputs
    if (options) {
      (Object.keys(options) as (keyof T)[]).forEach(inputName => {
        (dynamicComponentRef.instance[inputName] as any) = options[inputName];
      });
    }

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
