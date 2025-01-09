import {
  Injectable,
  ComponentRef,
  ApplicationRef,
  Type,
  createComponent,
} from '@angular/core';
import { ModalComponent } from '../components/modal/component/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalComponentRef: ComponentRef<ModalComponent>;

  constructor(private appRef: ApplicationRef) {}

  open<T>(component: Type<T>, inputs?: Partial<T>): ComponentRef<T> | void {
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
    if (inputs) {
      (Object.keys(inputs) as (keyof T)[]).forEach(inputName => {
        (dynamicComponentRef.instance[inputName] as any) = inputs[inputName];
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
