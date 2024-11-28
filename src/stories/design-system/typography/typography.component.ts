import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rlv-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.css'],
})
export class TypographyComponent {
  @Input() categories: {
    category: string;
    styles: {
      name: string;
      element: string;
      fontFamily: number;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
      color: string;
      backgroundColor: string;
    }[];
  }[] = [];

  @Input() fonts: {
    name: string;
    preview: string;
    type: number;
    downloadLink: string;
  }[] = [];

  getFontFamily(fontFamily: number): string {
    const DEFAULT = 'Inter';

    const font = this.fonts.find((font) => fontFamily === font.type);

    if (!font) return DEFAULT;

    return font.name;
  }

  getBackgroundColor(type: number): string {
    let color: string;

    switch (type) {
      case 2:
        color = '#4caf50';

        break;

      case 3:
        color = '#e53935';
        break;

      default:
        color = '#3E8989';

        break;
    }

    return color;
  }
}
