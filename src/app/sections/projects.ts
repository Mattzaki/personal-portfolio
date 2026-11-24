import { Component, inject } from '@angular/core';
import { PROJECTS } from '../data/portfolio.data';
import { LanguageService } from '../i18n/language.service';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title" style="--glow: var(--pink)" appReveal>
          {{ i18n.t('projects.title') }}
        </h2>
        <div class="projects__grid">
          @for (project of projects; track project.title) {
            <article class="card project" appReveal>
              <div class="project__media" [style.background]="project.imageBackground ?? null">
                @if (project.image) {
                  <img
                    [src]="project.image"
                    [alt]="i18n.pick(project.imageAlt)"
                    [class.project__img--contain]="project.imageFit === 'contain'"
                    loading="lazy"
                  />
                } @else {
                  <span class="project__placeholder pixel">{{ i18n.t('projects.noImage') }}</span>
                }
              </div>
              <div class="project__body">
                @if (project.team) {
                  <span class="project__badge">{{ i18n.t('projects.group') }}</span>
                }
                <h3 class="pixel">{{ project.title }}</h3>
                <p class="project__desc">{{ i18n.pick(project.description) }}</p>
                <p class="project__tech">{{ project.tech.join(' · ') }}</p>
                <a [href]="project.link" target="_blank" rel="noopener" class="project__link">
                  {{ i18n.t('projects.code') }} ↗
                  <span class="visually-hidden">: {{ project.title }}</span>
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .projects__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }
    .project {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .project__media {
      height: 200px;
      background: var(--surface-2);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .project__media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .project__media img.project__img--contain {
      width: auto;
      height: 85%;
      object-fit: contain;
    }
    .project:hover .project__media img {
      transform: scale(1.05);
    }
    .project__placeholder {
      font-size: 24px;
      color: var(--text-faint);
    }
    .project__body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      flex: 1;
    }
    .project__badge {
      align-self: flex-start;
      padding: 2px 10px;
      border-radius: 6px;
      background: rgba(185, 103, 255, 0.18);
      color: var(--purple-light);
      font-size: 13px;
      font-weight: 500;
    }
    .project__body h3 {
      margin: 0;
      font-size: 34px;
      line-height: 1;
      color: var(--blue);
    }
    .project__desc {
      margin: 0;
      color: var(--text-muted);
      font-size: 15px;
    }
    .project__tech {
      margin: 0;
      color: var(--green);
      font-size: 13px;
    }
    .project__link {
      margin-top: auto;
      padding-top: 8px;
      font-weight: 500;
      align-self: flex-start;
    }
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }
    @media (max-width: 400px) {
      .projects__grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class Projects {
  protected readonly i18n = inject(LanguageService);
  protected readonly projects = PROJECTS;
}
