import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[clickPressure]',
  standalone: true,
})
export class ClickPressureDirective {
  @Input() theme: string = '#ffffff';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  mouseClick(event: MouseEvent): void {
    const { clientX, clientY } = event;
    this.createWave(clientX, clientY);
    this.applyPressEffect(clientX, clientY);
  }

  private createWave(x: number, y: number): void {
    // Crear el elemento para la onda
    const wave = this.renderer.createElement('span');
    this.renderer.addClass(wave, 'mouse-wave');

    // Posicionar la onda en el lugar del ratón
    this.renderer.setStyle(wave, 'left', `${x - 15}px`);
    this.renderer.setStyle(wave, 'top', `${y - 15}px`);
    this.renderer.setStyle(wave, 'background-color', `${this.theme}4d`);

    // Añadir la onda al contenedor principal
    this.renderer.appendChild(this.el.nativeElement, wave);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, wave);
    }, 1000);
  }

  private applyPressEffect(x: number, y: number): void {
    const rect = this.el.nativeElement.getBoundingClientRect();

    // Calcular la posición relativa del clic dentro del elemento
    const xPosition = x - rect.left - rect.width / 2; // Posición relativa al centro
    const yPosition = y - rect.top - rect.height / 2; // Posición relativa al centro

    // Ajustar la intensidad de la inclinación
    const intensity = 10; // Cambia este valor para modificar el efecto
    const rotateX = (yPosition * intensity) / rect.height;
    const rotateY = -(xPosition * intensity) / rect.width;

    // Aplicar la transformación 3D
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(500px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) scale(0.98)`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.1s ease-out'
    );

    setTimeout(() => {
      // Restaurar el estilo original
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `perspective(500px) rotateX(0) rotateY(0) scale(1)`
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition',
        'transform 0.3s ease-out'
      );
    }, 200);
  }
}
