import { Component, inject } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { LanguageService } from '../i18n/language.service';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  template: `
    <footer id="contact" class="contact">
      <div class="container contact__inner" appReveal>
        <h2 class="contact__title pixel">{{ i18n.t('contact.title') }}</h2>
        <p class="contact__text">{{ i18n.t('contact.text') }}</p>
        <a [href]="'mailto:' + profile.email" class="contact__email">{{ profile.email }}</a>
        <div class="contact__links">
          <a
            [href]="profile.linkedin"
            target="_blank"
            rel="noopener"
            class="contact__pill"
            style="--pill: var(--blue)"
            >LinkedIn ↗</a
          >
          <a
            [href]="profile.github"
            target="_blank"
            rel="noopener"
            class="contact__pill"
            style="--pill: var(--pink)"
            >GitHub ↗</a
          >
        </div>
        <p class="contact__copy pixel">
          © {{ year }} {{ profile.name }}
        </p>
      </div>
    </footer>
  `,
  styles: `
    .contact {
      padding: 96px 0 64px;
      border-top: 1px solid rgba(185, 103, 255, 0.35);
    }
    .contact__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
    }
    .contact__title {
      margin: 0;
      font-size: clamp(56px, 8vw, 80px);
      line-height: 1;
      color: #fff;
      text-shadow:
        0 0 6px var(--pink),
        0 0 20px var(--pink);
    }
    .contact__text {
      margin: 0;
      max-width: 560px;
      color: var(--text-muted);
    }
    .contact__email {
      font-size: clamp(18px, 3vw, 24px);
      font-weight: 500;
      word-break: break-all;
    }
    .contact__links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 14px;
    }
    .contact__pill {
      display: inline-flex;
      align-items: center;
      min-height: 48px;
      padding: 0 22px;
      border: 1px solid var(--pill);
      border-radius: 999px;
      color: var(--pill);
      transition: box-shadow 0.25s ease;
    }
    .contact__pill:hover {
      color: var(--pill);
      box-shadow: 0 0 14px var(--pill);
    }
    .contact__copy {
      margin: 32px 0 0;
      font-size: 22px;
      color: var(--text-faint);
    }
  `,
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
