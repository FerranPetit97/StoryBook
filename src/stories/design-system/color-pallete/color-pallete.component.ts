import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-color-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.css'],
})
export class ColorPaletteComponent {
  @Input() colors: { name: string; hex: string }[] = [];

  activeRow: number | null = null;

  copyHex(color: string, index: number): void {
    if(this.activeRow !== null) return
    navigator.clipboard
      .writeText(color)
      .then(() => {
        this.showAlert(index);
      })
      .catch((err) => {
        alert(`Error al copiar al portapapeles: ${err}`);
      });
  }

  showAlert(index: number): void {
    this.activeRow = index;

    setTimeout(() => {
      this.activeRow = null;
    }, 1000);
  }
}
