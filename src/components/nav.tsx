'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icons } from './icons';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const hero = document.querySelector('.hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setOnLight(rect.bottom < 80);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-wrap">
      <header className={`nav ${onLight ? 'on-light' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" aria-label="Callinio" className="nav-brand">
          <Image
            className="nav-logo"
            src={onLight ? '/assets/logo_callinio.png' : '/assets/logo_callinio_blanc_mini.png'}
            alt="Callinio"
            width={120}
            height={22}
            priority
          />
        </a>
        <nav className="nav-mid">
          <a href="#how">Comment ça marche</a>
          <a href="#features">Fonctionnement</a>
          <a href="#testimonials">Témoignages</a>
          <a href="#pricing">Tarifs</a>
        </nav>
        <div className="nav-cta">
          <a href="#" className="nav-link">Se connecter</a>
          <a href="#pricing" className="btn btn-sm btn-amber">
            Démarrer l'essai gratuit <Icons.arrow size={12} className="arr"/>
          </a>
        </div>
        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <a href="#how" onClick={closeMenu}>Comment ça marche</a>
        <a href="#features" onClick={closeMenu}>Fonctionnement</a>
        <a href="#testimonials" onClick={closeMenu}>Témoignages</a>
        <a href="#pricing" onClick={closeMenu}>Tarifs</a>
        <div className="nav-mobile-cta">
          <a
            href="#pricing"
            className="btn btn-amber btn-sm"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            Démarrer l'essai gratuit <Icons.arrow size={12} className="arr"/>
          </a>
        </div>
      </nav>
    </div>
  );
}
