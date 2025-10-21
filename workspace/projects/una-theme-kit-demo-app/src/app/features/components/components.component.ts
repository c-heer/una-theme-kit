import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  standalone: true,
  template: `
    <div class="page-container">
      <h1>Components</h1>
      <p>Component showcase with live examples will go here.</p>
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
export class ComponentsComponent {}
