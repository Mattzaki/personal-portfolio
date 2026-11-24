import { Component, inject } from '@angular/core';
import { LanguageService } from './i18n/language.service';
import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Experience } from './sections/experience';
import { Hero } from './sections/hero';
import { Navbar } from './sections/navbar';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Skills, Projects, Contact],
  template: `
    <a href="#main" class="skip-link">{{
      i18n.lang() === 'it' ? 'Vai al contenuto' : 'Skip to content'
    }}</a>
    <app-navbar />
    <main id="main">
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
    </main>
    <app-contact />
  `,
})
export class App {
  protected readonly i18n = inject(LanguageService);
}
