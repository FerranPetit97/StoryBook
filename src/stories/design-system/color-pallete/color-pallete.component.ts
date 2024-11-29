import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rlv-color-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.css'],
})
export class ColorPaletteComponent {
  @Input() baseColors: { name: string; hex: string }[] = [];
  
  @Input() hoverColors: { name: string; hex: string }[] = [];

  activeRow: number | null = null;
  
  activeColor: string | null = null;

  copyHex(color: string, index: number): void {
    if(this.activeRow !== null) return
    navigator.clipboard
      .writeText(color)
      .then(() => {
        this.showAlert(index, color);
      })
      .catch((err) => {
        alert(`Error al copiar al portapapeles: ${err}`);
      });
  }

  showAlert(index: number, color: string): void {
    this.activeRow = index;
    this.activeColor = color;

    setTimeout(() => {
      this.activeRow = null;
    }, 1000);
  }
}
