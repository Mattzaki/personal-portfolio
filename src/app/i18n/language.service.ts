import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { TRANSLATIONS, TranslationKey } from './translations';

export type Lang = 'it' | 'en';

/** Testo con una versione per lingua. */
export interface Localized {
  it: string;
  en: string;
}

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.initialLang());
  readonly dictionary = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      this.document.title = TRANSLATIONS[lang]['meta.title'];
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* localStorage non disponibile: la lingua non viene ricordata */
      }
    });
  }

  /** Testo dell'interfaccia per la lingua attiva. */
  t(key: TranslationKey): string {
    return this.dictionary()[key];
  }

  /** Sceglie la versione giusta di un testo dei dati (progetti, esperienza…). */
  pick(text: Localized): string {
    return text[this.lang()];
  }

  toggle(): void {
    this.lang.update((l) => (l === 'it' ? 'en' : 'it'));
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'it' || saved === 'en') return saved;
    } catch {
      /* ignora */
    }
    const browser = this.document.defaultView?.navigator.language ?? 'it';
    return browser.toLowerCase().startsWith('it') ? 'it' : 'en';
  }
}
