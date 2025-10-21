import { Component } from '@angular/core';

@Component({
  selector: 'app-variable-builder',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Variable Builder</h1>
      <p>Interactive CSS variable generator tool will go here.</p>
    </div>
  `,
  styles: [`
    .page-container {
      padding: var(--space-lg, 2rem);
      max-width: 1200px;
      margin: 0 auto;
    }
  `]
})
export class VariableBuilderComponent {}
