(function() {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    // ===== Lenis smooth scroll =====
    let lenis;
    if (!prefersReducedMotion && window.Lenis) {
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        if (window.ScrollTrigger) {
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);
        }
    }

    // ===== Smooth anchor scrolling =====
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            if (lenis) {
                lenis.scrollTo(target, { offset: -76, duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 3) });
            } else {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== Nav state =====
    const nav = $('#nav');
    if (nav) {
        // Pages with a dark hero set data-transparent="true" — they get the scroll-toggle behavior.
        // All other pages stay in the .scrolled state permanently.
        const isTransparent = nav.dataset.transparent === 'true';
        if (!isTransparent) {
            nav.classList.add('scrolled');
        } else {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 80) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }, { passive: true });
        }
    }

    // ===== Mobile menu =====
    const hamburger = $('#hamburger-btn');
    const mobileMenu = $('#mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('active');
            mobileMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', !isOpen);
        });
        $$('a', mobileMenu).forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ===== FAQ accordion =====
    $$('.faq-item__question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-item__answer');
            const isOpen = item.classList.contains('open');

            $$('.faq-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    openItem.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
                    const a = openItem.querySelector('.faq-item__answer');
                    a.style.maxHeight = '0';
                    a.setAttribute('aria-hidden', 'true');
                }
            });

            if (isOpen) {
                item.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
                answer.style.maxHeight = '0';
                answer.setAttribute('aria-hidden', 'true');
            } else {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.setAttribute('aria-hidden', 'false');
            }
        });
    });

    // ===== Contact form (no-backend "thanks" state) =====
    const contactForm = $('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const success = $('#contact-form-success');
            contactForm.style.display = 'none';
            if (success) success.style.display = 'block';
        });
    }

    // ===== Skip animations if reduced motion =====
    if (prefersReducedMotion) {
        if (nav) nav.style.transform = 'translateY(0)';
        $$('.promise-card, .testimonial-card, .process__card, .hero__badge, .hero__quote, .service-card').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    // ===== GSAP animations =====
    if (!window.gsap) return;
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    // Page load sequence — only runs if hero is present
    const hero = $('.hero');
    if (hero && nav) {
        const loadTl = gsap.timeline();
        loadTl.to(nav, { y: 0, duration: 0.5, ease: 'power3.out', delay: 0.3 });
        if ($('.hero__eyebrow-line')) loadTl.to('.hero__eyebrow-line', { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 0.6);
        if ($('.hero__eyebrow-text')) loadTl.from('.hero__eyebrow-text', { opacity: 0, x: -10, duration: 0.4 }, 0.7);
        if ($('.hero__headline')) loadTl.from('.hero__headline', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, 0.8);
        if ($('.hero__subhead')) loadTl.from('.hero__subhead', { opacity: 0, y: 20, duration: 0.5 }, 1.4);
        if ($('.hero__subhead-small')) loadTl.from('.hero__subhead-small', { opacity: 0, y: 20, duration: 0.5 }, 1.5);
        if ($('.hero__ctas')) loadTl.from('.hero__ctas', { opacity: 0, y: 20, duration: 0.5 }, 1.6);
        if ($('.hero__badge')) loadTl.to('.hero__badge', { opacity: 1, y: 0, stagger: 0.15, duration: 0.5, ease: 'power2.out' }, 2.0);
        if ($('.hero__quote')) loadTl.to('.hero__quote', { opacity: 1, duration: 0.5 }, 2.4);
    } else if (nav) {
        gsap.to(nav, { y: 0, duration: 0.5, ease: 'power3.out' });
    }

    // Page hero (non-home) reveal
    const pageHero = $('.page-hero');
    if (pageHero) {
        const tl = gsap.timeline({ delay: 0.2 });
        if ($('.page-hero__eyebrow')) tl.from('.page-hero__eyebrow', { opacity: 0, y: 12, duration: 0.5, ease: 'power3.out' });
        if ($('.page-hero__headline')) tl.from('.page-hero__headline', { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' }, '-=0.3');
        if ($('.page-hero__subhead')) tl.from('.page-hero__subhead', { opacity: 0, y: 16, duration: 0.5, ease: 'power3.out' }, '-=0.4');
    }

    // Section eyebrow line animations
    $$('.section__eyebrow').forEach(eyebrow => {
        ScrollTrigger.create({
            trigger: eyebrow,
            start: 'top 85%',
            onEnter: () => eyebrow.classList.add('in-view'),
            once: true
        });
    });

    // Promise cards stagger
    if ($('.promises__grid')) {
        gsap.to('.promise-card', {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: '.promises__grid', start: 'top 75%', once: true }
        });
    }

    // Process timeline
    $$('.process__card').forEach(card => {
        ScrollTrigger.create({ trigger: card, start: 'top 80%', onEnter: () => card.classList.add('in-view'), once: true });
    });
    const timelineSection = $('.process__timeline');
    if (timelineSection) {
        const lineFill = $('.process__line-fill');
        if (lineFill) {
            ScrollTrigger.create({
                trigger: timelineSection, start: 'top 60%', end: 'bottom 40%', scrub: 1,
                onUpdate: (self) => { lineFill.style.height = (self.progress * 100) + '%'; }
            });
        }
    }
    $$('.process__item').forEach(item => {
        ScrollTrigger.create({ trigger: item, start: 'top 60%', onEnter: () => item.classList.add('active'), once: true });
    });

    // Testimonial cards stagger
    if ($('.testimonials__grid')) {
        gsap.to('.testimonial-card', {
            opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: '.testimonials__grid', start: 'top 75%', once: true }
        });
    }

    // Portfolio items reveal
    $$('.portfolio__item').forEach((item, i) => {
        gsap.from(item, {
            clipPath: 'inset(100% 0 0 0)',
            duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%', once: true },
            delay: i * 0.04
        });
    });

    // Service cards
    if ($('.services__grid') && $('.service-card')) {
        gsap.set('.service-card', { opacity: 0, y: 40 });
        ScrollTrigger.create({
            trigger: '.services__grid', start: 'top 85%', once: true,
            onEnter: () => {
                gsap.to('.service-card', { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out' });
            }
        });
        setTimeout(() => {
            gsap.to('.service-card', { opacity: 1, y: 0, duration: 0.5 });
        }, 2500);
    }

    // Final CTA headline
    if ($('.final-cta__headline')) {
        gsap.from('.final-cta__headline', {
            opacity: 0, y: 60, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: '.final-cta', start: 'top 70%', once: true }
        });
    }

    // Magnetic button effect
    $$('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const distance = Math.sqrt(x * x + y * y);
            if (distance < 60) {
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            }
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    // Hero parallax
    if ($('.hero__bg')) {
        gsap.to('.hero__bg', {
            y: '-10%', ease: 'none',
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });
    }
})();
