import { Component, inject } from '@angular/core';
import { SKILLS } from '../data/portfolio.data';
import { LanguageService } from '../i18n/language.service';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title" style="--glow: var(--green)" appReveal>
          {{ i18n.t('skills.title') }}
        </h2>
        <div class="skills__groups">
          @for (group of groups; track group.labelKey) {
            <div class="skills__group" appReveal>
              <h3 class="pixel" [style.color]="'var(--' + group.color + ')'">
                {{ i18n.t(group.labelKey) }}
              </h3>
              <ul class="skills__list">
                @for (skill of group.items; track skill) {
                  <li [class]="'tag tag--' + group.color">{{ skill }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .skills__groups {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 36px 48px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .skills__group h3 {
      margin: 0 0 14px;
      font-size: 30px;
      line-height: 1;
    }
    .skills__list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
  `,
})
export class Skills {
  protected readonly i18n = inject(LanguageService);
  protected readonly groups = SKILLS;
}
