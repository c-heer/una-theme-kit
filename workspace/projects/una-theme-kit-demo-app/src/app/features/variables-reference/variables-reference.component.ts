import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../shared/components/code-block.component';

interface Variable {
  name: string;
  value: string;
  description: string;
  type?: 'color' | 'text' | 'size';
}

interface VariableCategory {
  title: string;
  description: string;
  variables: Variable[];
}

@Component({
  selector: 'app-variables-reference',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './variables-reference.component.html',
  styleUrl: './variables-reference.component.scss'
})
export class VariablesReferenceComponent {
  copiedVariable = signal<string | null>(null);

  categories: VariableCategory[] = [
    {
      title: 'Colors',
      description: 'Theme colors with light and dark mode variants. All colors are defined using HSL for easy customization.',
      variables: [
        { name: '--color-1', value: 'Primary brand color', description: 'Main theme color for interactive elements', type: 'color' },
        { name: '--color-2', value: 'Secondary accent color', description: 'Complementary accent color', type: 'color' },
        { name: '--color-3', value: 'Tertiary accent color', description: 'Additional accent option', type: 'color' },
        { name: '--on-color', value: 'Text on colored backgrounds', description: 'Ensures readability on colored surfaces', type: 'color' },
        { name: '--background-1', value: 'Main background', description: 'Primary page background', type: 'color' },
        { name: '--background-2', value: 'Card background', description: 'Elevated surface background', type: 'color' },
        { name: '--background-3', value: 'Hover background', description: 'Interactive state background', type: 'color' },
        { name: '--background-4', value: 'Subtle background', description: 'Minimal contrast background', type: 'color' },
        { name: '--on-background', value: 'Primary text', description: 'Main body text color', type: 'color' },
        { name: '--on-background-light', value: 'Secondary text', description: 'Subtle or metadata text', type: 'color' },
        { name: '--on-background-dark', value: 'Emphasized text', description: 'High contrast text', type: 'color' },
        { name: '--border-1', value: 'Primary border', description: 'Default border color', type: 'color' },
        { name: '--border-2', value: 'Emphasized border', description: 'Stronger border color', type: 'color' },
        { name: '--error', value: 'Error state', description: 'Error messages and states', type: 'color' },
        { name: '--warning', value: 'Warning state', description: 'Warning messages and states', type: 'color' },
        { name: '--success', value: 'Success state', description: 'Success messages and states', type: 'color' },
      ]
    },
    {
      title: 'Typography',
      description: 'Font families, sizes, and line heights for consistent text styling.',
      variables: [
        { name: '--family-1', value: 'System font stack', description: 'Primary sans-serif font', type: 'text' },
        { name: '--family-2', value: 'Georgia, serif', description: 'Secondary serif font', type: 'text' },
        { name: '--font-size-0', value: '0.75rem', description: 'Extra small text - 12px (caption, small labels)', type: 'size' },
        { name: '--font-size-1', value: '0.875rem', description: 'Small text - 14px (metadata, secondary info)', type: 'size' },
        { name: '--font-size-2', value: '1rem', description: 'Body text - 16px (default)', type: 'size' },
        { name: '--font-size-3', value: '1.5rem', description: 'Headings - 24px (h2-h6)', type: 'size' },
        { name: '--font-size-4', value: '3rem', description: 'Hero text - 48px (h1, display)', type: 'size' },
        { name: '--line-height-0', value: '1', description: 'Tight line height for headings', type: 'size' },
        { name: '--line-height-1', value: '1.2', description: 'Compact line height', type: 'size' },
        { name: '--line-height-2', value: '1.6', description: 'Comfortable reading (default)', type: 'size' },
        { name: '--line-height-3', value: '2', description: 'Spacious line height', type: 'size' },
      ]
    },
    {
      title: 'Spacing',
      description: 'Consistent spacing scale for margins, padding, and layout gaps.',
      variables: [
        { name: '--space-1', value: '0.5rem', description: 'Small spacing (8px)', type: 'size' },
        { name: '--space-2', value: '1rem', description: 'Medium spacing (16px)', type: 'size' },
        { name: '--space-3', value: '2rem', description: 'Large spacing (32px)', type: 'size' },
        { name: '--space-around', value: 'var(--space-3) var(--space-1)', description: 'Responsive container padding', type: 'size' },
      ]
    },
    {
      title: 'Layout',
      description: 'Component dimensions and layout constraints.',
      variables: [
        { name: '--max-width', value: '1280px', description: 'Maximum content width', type: 'size' },
        { name: '--height-1', value: '40px', description: 'Small component height', type: 'size' },
        { name: '--height-2', value: '48px', description: 'Medium component height (default)', type: 'size' },
        { name: '--height-3', value: '64px', description: 'Large component height', type: 'size' },
        { name: '--border-radius', value: '0', description: 'Corner rounding (0 = sharp)', type: 'size' },
      ]
    },
    {
      title: 'Animations',
      description: 'Transition and animation timing for smooth interactions.',
      variables: [
        { name: '--transition-fast', value: '0.2s ease-in-out', description: 'Quick transitions (hover, focus)', type: 'text' },
        { name: '--transition-slow', value: '0.4s ease-in-out', description: 'Slower transitions (navigation)', type: 'text' },
        { name: '--animation-fast', value: '0.3s ease-in-out forwards', description: 'Quick animations (fade-in)', type: 'text' },
        { name: '--animation-slow', value: '0.6s ease-in-out forwards', description: 'Slower animations (drop-in)', type: 'text' },
        { name: '--animation-fast-infinite', value: '0.3s ease-in-out 0s infinite', description: 'Quick looping animations', type: 'text' },
        { name: '--animation-slow-infinite', value: '0.6s ease-in-out 0s infinite', description: 'Slow looping animations', type: 'text' },
      ]
    },
    {
      title: 'Scrollbars',
      description: 'Custom scrollbar styling (WebKit browsers).',
      variables: [
        { name: '--scrollbar-track', value: 'Track background', description: 'Scrollbar track color', type: 'color' },
        { name: '--scrollbar-thumb', value: 'Thumb color', description: 'Scrollbar thumb color', type: 'color' },
      ]
    }
  ];

  copyVariable(variableName: string): void {
    // Use the Clipboard API if available
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(variableName).then(() => {
        this.copiedVariable.set(variableName);
        setTimeout(() => this.copiedVariable.set(null), 2000);
      });
    }
  }

  isColor(type?: string): boolean {
    return type === 'color';
  }

  isSize(type?: string): boolean {
    return type === 'size';
  }
}
