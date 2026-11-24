import { Component, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
import { LanguageService } from '../i18n/language.service';

@Component({
  selector: 'app-hero',
  template: `
    <section id="top" class="hero">
      <div class="hero__grid" aria-hidden="true"></div>
      <div class="hero__content">
        <h1 class="hero__name pixel">{{ profile.name }}</h1>
        <p class="hero__role pixel">
          <span class="visually-hidden">{{ i18n.pick(profile.roles[0]) }}</span>
          <span aria-hidden="true">&gt; {{ typed() }}<span class="hero__cursor">_</span></span>
        </p>
        <p class="hero__description">{{ i18n.t('hero.description') }}</p>
        <div class="hero__actions">
          <a href="#projects" class="btn btn--primary">{{ i18n.t('hero.ctaProjects') }}</a>
          <a [href]="profile.cv" class="btn btn--secondary" download>{{ i18n.t('hero.ctaCv') }}</a>
        </div>
      </div>
      <a href="#about" class="hero__scroll">
        <span>{{ i18n.t('hero.scroll') }}</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      min-height: 100vh;
      min-height: 100svh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: calc(var(--nav-height) + 40px) 24px 120px;
      overflow: hidden;
      text-align: center;
    }
    .hero__grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(185, 103, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(185, 103, 255, 0.1) 1px, transparent 1px);
      background-size: 40px 40px;
      mask-image: linear-gradient(to bottom, #000 55%, transparent);
      pointer-events: none;
    }
    .hero__content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      max-width: 900px;
    }
    .hero__name {
      margin: 0;
      font-size: clamp(64px, 12vw, 140px);
      line-height: 0.9;
      color: #fff;
      text-shadow:
        0 0 6px var(--pink),
        0 0 22px var(--pink);
    }
    .hero__role {
      margin: 0;
      min-height: 1.1em;
      font-size: clamp(30px, 4.5vw, 46px);
      line-height: 1.1;
      color: var(--blue);
    }
    .hero__cursor {
      color: var(--pink);
      animation: blink 1s steps(1) infinite;
    }
    .hero__description {
      margin: 8px 0 0;
      max-width: 680px;
      font-size: 19px;
      color: var(--text-muted);
      text-wrap: pretty;
    }
    .hero__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-top: 20px;
    }
    .hero__scroll {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      color: var(--text-faint);
      font-size: 14px;
      animation: bob 1.8s ease-in-out infinite;
    }
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
    }
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
    @keyframes bob {
      0%,
      100% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, 8px);
      }
    }
    @media (max-width: 720px) {
      .hero__description {
        font-size: 17px;
      }
    }
  `,
})
export class Hero implements OnDestroy {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;

  private readonly roles = computed(() => this.profile.roles.map((r) => this.i18n.pick(r)));
  protected readonly typed = signal('');
  private timer?: ReturnType<typeof setTimeout>;
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  constructor() {
    // Quando cambia lingua, riparte la scritta da capo.
    effect(() => {
      this.roles();
      this.restart();
    });
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private restart(): void {
    clearTimeout(this.timer);
    this.roleIndex = 0;
    this.charIndex = 0;
    this.deleting = false;
    const reduceMotion =
      typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      this.typed.set(this.roles()[0]);
      return;
    }
    this.tick();
  }

  private tick(): void {
    const word = this.roles()[this.roleIndex];
    if (!this.deleting) {
      this.charIndex++;
      this.typed.set(word.slice(0, this.charIndex));
      if (this.charIndex === word.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 2000);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 90);
    } else {
      this.charIndex--;
      this.typed.set(word.slice(0, this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles().length;
        this.timer = setTimeout(() => this.tick(), 400);
        return;
      }
      this.timer = setTimeout(() => this.tick(), 45);
    }
  }
}
