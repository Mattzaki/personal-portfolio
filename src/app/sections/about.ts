import { Component, inject } from '@angular/core';
import { LanguageService } from '../i18n/language.service';
import { TranslationKey } from '../i18n/translations';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title" style="--glow: var(--blue)" appReveal>
          {{ i18n.t('about.title') }}
        </h2>
        <div class="about__grid">
          @for (card of cards; track card.title) {
            <article class="card about__card" appReveal>
              <h3 class="pixel">{{ i18n.t(card.title) }}</h3>
              <p>{{ i18n.t(card.text) }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .about__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
    .about__card {
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .about__card h3 {
      margin: 0;
      font-size: 36px;
      line-height: 1;
      color: var(--pink);
    }
    .about__card p {
      margin: 0;
      color: var(--text-muted);
    }
  `,
})
export class About {
  protected readonly i18n = inject(LanguageService);
  protected readonly cards: { title: TranslationKey; text: TranslationKey }[] = [
    { title: 'about.whoTitle', text: 'about.who' },
    { title: 'about.whatTitle', text: 'about.what' },
    { title: 'about.focusTitle', text: 'about.focus' },
  ];
}
