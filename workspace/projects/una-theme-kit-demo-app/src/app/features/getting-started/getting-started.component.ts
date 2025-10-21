import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CodeBlockComponent } from '../../shared/components/code-block.component';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [CommonModule, RouterLink, CodeBlockComponent],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss',
  preserveWhitespaces: true
})
export class GettingStartedComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only load Prism in browser environment
    if (isPlatformBrowser(this.platformId)) {
      import('prismjs').then(() => {
        // @ts-ignore
        import('prismjs/components/prism-css').then(() => {
          // @ts-ignore
          import('prismjs/components/prism-bash').then(() => {
            // @ts-ignore
            import('prismjs/components/prism-markup').then(() => {
              // Highlight all code blocks
              (window as any).Prism?.highlightAll();
            });
          });
        });
      });
    }
  }
}
