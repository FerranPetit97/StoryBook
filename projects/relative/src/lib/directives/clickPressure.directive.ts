import { OnInit } from '@angular/core';
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
export class ClickPressureDirective implements OnInit {
  @Input() actived: boolean = true;
  @Input() theme: string = '#ffffff';
  @Input() intensity: number = 10;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initClass(this.elementRef.nativeElement);
  }

  @HostListener('click', ['$event'])
  mouseClick(event: MouseEvent): void {
    if (this.actived === false) return;

    const componentRect = this.elementRef.nativeElement.getBoundingClientRect();

    const relativeX = event.clientX - componentRect.left;
    const relativeY = event.clientY - componentRect.top;

    this.createWave(relativeX, relativeY);
    this.applyPressEffect(relativeX, relativeY, componentRect);
  }

  private createWave(x: number, y: number): void {
    const wave = this.renderer.createElement('span');
    this.renderer.addClass(wave, 'mouse-wave');

    this.renderer.setStyle(wave, 'left', `${x}px`);
    this.renderer.setStyle(wave, 'top', `${y}px`);
    this.renderer.setStyle(wave, 'background-color', `${this.theme}4d`);

    this.renderer.appendChild(this.elementRef.nativeElement, wave);

    setTimeout(() => {
      this.renderer.removeChild(this.elementRef.nativeElement, wave);
    }, 1000);
  }

  private applyPressEffect(x: number, y: number, rect: any): void {

    const xPosition = x - rect.width / 2;
    const yPosition = y - rect.height / 2;

    const rotateX = (yPosition * this.intensity) / rect.height;
    const rotateY = -(xPosition * this.intensity) / rect.width;

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      `perspective(500px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg)`
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transition',
      'transform 0.1s ease-out'
    );

    setTimeout(() => {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'transform',
        `perspective(500px) rotateX(0) rotateY(0)`
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'transition',
        'transform 0.3s ease-out'
      );
    }, 200);
  }

  private initClass(rect: any): void {
    this.renderer.setStyle(rect, 'overflow', `hidden`);
  }
}
