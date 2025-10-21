import { Component, Input, signal, PLATFORM_ID, Inject, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="code-block-wrapper">
      <div class="code-header">
        <span class="code-language">{{ language }}</span>
        <button 
          class="copy-button"
          (click)="copyCode()"
          [class.copied]="copied()"
          [attr.aria-label]="copied() ? 'Copied!' : 'Copy code'"
        >
          @if (copied()) {
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Copied!</span>
          } @else {
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M3 10.5V3C3 2.44772 3.44772 2 4 2H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span>Copy</span>
          }
        </button>
      </div>
      <div class="code-display">
        <pre #preElement [class]="'language-' + language"><code><ng-content></ng-content></code></pre>
      </div>
    </div>
  `,
  styles: [`
    .code-block-wrapper {
      position: relative;
      margin: var(--space-2) 0;
      border-radius: var(--border-radius);
      overflow: hidden;
      background: var(--background-2);
      border: 1px solid var(--border-1);
      transition: var(--transition-fast);
    }

    .code-block-wrapper:hover {
      border-color: var(--border-2);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      background: var(--background-3);
      border-bottom: 1px solid var(--border-1);
    }

    .code-language {
      font-size: var(--font-size-0);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--on-background-light);
      font-family: var(--family-1);
    }

    .copy-button {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      padding: 0.25rem 0.625rem;
      background: transparent;
      border: 1px solid var(--border-1);
      border-radius: 4px;
      color: var(--on-background);
      font-size: var(--font-size-0);
      font-weight: 500;
      cursor: pointer;
      transition: var(--transition-fast);
      font-family: var(--family-1);
    }

    .copy-button:hover {
      background: var(--background-4);
      border-color: var(--border-2);
    }

    .copy-button:active {
      transform: scale(0.98);
    }

    .copy-button.copied {
      background: var(--success);
      border-color: var(--success);
      color: white;
    }

    .copy-button svg {
      width: 14px;
      height: 14px;
    }

    .code-display {
      overflow-x: auto;
    }

    .code-display pre {
      margin: 0 !important;
      padding: 1rem !important;
      background: var(--background-2) !important;
      border: none !important;
      border-radius: 0 !important;
    }

    .code-display code {
      font-size: var(--font-size-1) !important;
      line-height: 1.6 !important;
      font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Consolas', monospace !important;
    }

    /* Custom scrollbar for code blocks */
    .code-display::-webkit-scrollbar {
      height: 8px;
    }

    .code-display::-webkit-scrollbar-track {
      background: var(--background-3);
    }

    .code-display::-webkit-scrollbar-thumb {
      background: var(--border-2);
      border-radius: 4px;
    }

    .code-display::-webkit-scrollbar-thumb:hover {
      background: var(--on-background-light);
    }
  `]
})
export class CodeBlockComponent implements AfterViewInit {
  @Input() language: string = 'bash';
  @ViewChild('preElement') preElement!: ElementRef;
  
  copied = signal(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        if ((window as any).Prism && this.preElement) {
          (window as any).Prism.highlightElement(this.preElement.nativeElement);
        }
      }, 0);
    }
  }

  copyCode() {
    if (isPlatformBrowser(this.platformId) && navigator.clipboard && this.preElement) {
      const code = this.preElement.nativeElement.textContent;
      navigator.clipboard.writeText(code.trim()).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }
}
