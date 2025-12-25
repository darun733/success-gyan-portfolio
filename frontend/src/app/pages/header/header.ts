import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;
  isHomepage = false;

  constructor(private router: Router) {}
  
    /**
   * Returns true when the current URL matches the given path.
   * Example: isActive('/until-we-win')
   */
  isActive(path: string): boolean {
    // Removes query params + fragments so matching is consistent
    const current = this.router.url.split('?')[0].split('#')[0];
    return current === path;
  }

  isActiveAny(paths: string[]): boolean {
    return paths.some((p) => this.isActive(p));
  }
}
