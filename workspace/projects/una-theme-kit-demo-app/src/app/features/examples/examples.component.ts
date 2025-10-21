import { Component } from '@angular/core';

@Component({
  selector: 'app-examples',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Examples</h1>
      <p>Complete page layouts and real-world examples will go here.</p>
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
export class ExamplesComponent {}
