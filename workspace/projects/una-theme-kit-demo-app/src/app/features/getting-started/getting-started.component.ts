import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './getting-started.component.html',
  styleUrl: './getting-started.component.scss'
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
            // Highlight all code blocks
            (window as any).Prism?.highlightAll();
          });
        });
      });
    }
  }
}
