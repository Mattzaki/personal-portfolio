import { Component, inject } from '@angular/core';
import { EXPERIENCE } from '../data/portfolio.data';
import { LanguageService } from '../i18n/language.service';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title" style="--glow: var(--purple)" appReveal>
          {{ i18n.t('experience.title') }}
        </h2>
        <ol class="timeline">
          @for (item of items; track $index) {
            <li class="card timeline__item" style="--card-color: var(--purple)" appReveal>
              <div class="timeline__text">
                <h3>{{ i18n.pick(item.title) }}</h3>
                <p class="timeline__place">{{ i18n.pick(item.place) }}</p>
                @if (i18n.pick(item.description)) {
                  <p class="timeline__desc">{{ i18n.pick(item.description) }}</p>
                }
              </div>
              <span class="timeline__period pixel">{{ i18n.pick(item.period) }}</span>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      list-style: none;
      margin: 0 auto;
      padding: 0;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .timeline__item {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 8px 24px;
      padding: 26px 30px;
    }
    .timeline__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-width: 640px;
    }
    .timeline__text h3 {
      margin: 0;
      font-size: 21px;
      font-weight: 600;
      color: #fff;
    }
    .timeline__place {
      margin: 0;
      color: var(--blue);
      font-size: 15px;
    }
    .timeline__desc {
      margin: 6px 0 0;
      color: var(--text-muted);
    }
    .timeline__period {
      font-size: 26px;
      line-height: 1.2;
      color: var(--green);
      white-space: nowrap;
    }
  `,
})
export class Experience {
  protected readonly i18n = inject(LanguageService);
  protected readonly items = EXPERIENCE;
}
