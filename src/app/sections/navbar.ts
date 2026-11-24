import { Component, HostListener, inject, signal } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { TranslationKey } from '../i18n/translations';

@Component({
  selector: 'app-navbar',
  template: `
    <header class="nav" [class.nav--scrolled]="scrolled() || open()">
      <div class="nav__inner">
        <a href="#top" class="nav__logo pixel" aria-label="Matteo Zacchino, home">MZ</a>

        <button
          type="button"
          class="nav__burger"
          [attr.aria-expanded]="open()"
          aria-controls="nav-links"
          [attr.aria-label]="i18n.t('nav.menu')"
          (click)="open.set(!open())"
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="nav-links" class="nav__links" [class.nav__links--open]="open()">
          @for (link of links; track link.href) {
            <a [href]="link.href" class="pixel" (click)="open.set(false)">{{ i18n.t(link.key) }}</a>
          }
          <button
            type="button"
            class="nav__lang pixel"
            [attr.aria-label]="i18n.t('nav.switch')"
            [title]="i18n.t('nav.switch')"
            (click)="i18n.toggle()"
          >
            <span [class.is-active]="i18n.lang() === 'it'">IT</span>
            <span aria-hidden="true">/</span>
            <span [class.is-active]="i18n.lang() === 'en'">EN</span>
          </button>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .nav {
      position: fixed;
      inset: 0 0 auto 0;
      z-index: 50;
      height: var(--nav-height);
      border-bottom: 1px solid transparent;
      transition:
        background 0.3s ease,
        border-color 0.3s ease;
    }
    .nav--scrolled {
      background: rgba(18, 18, 18, 0.88);
      backdrop-filter: blur(10px);
      border-color: rgba(185, 103, 255, 0.35);
    }
    .nav__inner {
      height: 100%;
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav__logo {
      font-size: 36px;
      line-height: 1;
      color: var(--pink);
      text-shadow: 0 0 8px var(--pink);
    }
    .nav__links {
      display: flex;
      align-items: center;
      gap: 28px;
    }
    .nav__links a {
      font-size: 24px;
      color: var(--text);
    }
    .nav__links a:hover {
      color: var(--pink);
    }
    .nav__lang {
      display: inline-flex;
      gap: 4px;
      min-height: 40px;
      padding: 0 12px;
      border: 1px solid var(--purple);
      border-radius: 8px;
      background: transparent;
      color: var(--text-faint);
      font-size: 22px;
      cursor: pointer;
      align-items: center;
    }
    .nav__lang .is-active {
      color: var(--green);
    }
    .nav__lang:hover {
      box-shadow: 0 0 10px var(--purple);
    }
    .nav__burger {
      display: none;
      width: 44px;
      height: 44px;
      padding: 10px;
      border: 0;
      background: transparent;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
    }
    .nav__burger span {
      display: block;
      height: 2px;
      background: var(--blue);
      box-shadow: 0 0 6px var(--blue);
    }
    @media (max-width: 820px) {
      .nav__inner {
        padding: 0 20px;
      }
      .nav__burger {
        display: flex;
      }
      .nav__links {
        position: absolute;
        top: var(--nav-height);
        left: 0;
        right: 0;
        flex-direction: column;
        gap: 18px;
        padding: 28px 20px 32px;
        background: var(--bg);
        border-bottom: 1px solid rgba(185, 103, 255, 0.35);
        display: none;
      }
      .nav__links--open {
        display: flex;
      }
    }
  `,
})
export class Navbar {
  protected readonly i18n = inject(LanguageService);
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);

  protected readonly links: { href: string; key: TranslationKey }[] = [
    { href: '#about', key: 'nav.about' },
    { href: '#experience', key: 'nav.experience' },
    { href: '#skills', key: 'nav.skills' },
    { href: '#projects', key: 'nav.projects' },
    { href: '#contact', key: 'nav.contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
