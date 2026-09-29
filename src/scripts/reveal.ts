// Scroll reveals for every page, owned by GSAP and loaded on demand so it never
// enters the initial bundle. Only elements below the first viewport animate:
// hiding content that is already visible would make it flash.
//   [data-stamp] blocks land with a slight rotation and overshoot.
//   [data-split] section titles rise letter by letter.

type GsapBundle = {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  SplitText: typeof import('gsap/SplitText').SplitText;
};

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

let bundle: Promise<GsapBundle> | undefined;
let revert: (() => void) | undefined;

function loadGsap(): Promise<GsapBundle> {
  bundle ??= Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/SplitText'),
  ]).then(([core, scroll, split]) => {
    core.gsap.registerPlugin(scroll.ScrollTrigger, split.SplitText);
    return {
      gsap: core.gsap,
      ScrollTrigger: scroll.ScrollTrigger,
      SplitText: split.SplitText,
    };
  });
  return bundle;
}

function belowTheFold<T extends Element>(selector: string): T[] {
  const limit = window.innerHeight * 0.92;
  return [...document.querySelectorAll<T>(selector)].filter(
    (element) => element.getBoundingClientRect().top > limit,
  );
}

function start(): void {
  if (window.matchMedia(REDUCED_MOTION).matches) return;

  const stamps = belowTheFold<HTMLElement>('[data-stamp]');
  const titles = belowTheFold<HTMLElement>('[data-split]');
  if (stamps.length === 0 && titles.length === 0) return;

  loadGsap()
    .then(({ gsap, ScrollTrigger, SplitText }) => {
      const context = gsap.context(() => {
        gsap.set(stamps, { autoAlpha: 0, y: 48 });
        ScrollTrigger.batch(stamps, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              rotation: 0,
              duration: 0.65,
              ease: 'back.out(1.7)',
              stagger: 0.08,
              startAt: { rotation: gsap.utils.random(-3, 3, 0.5) },
            }),
        });

        titles.forEach((title) => {
          SplitText.create(title, {
            type: 'words,chars',
            mask: 'words',
            onSplit: (self) =>
              gsap.from(self.chars, {
                yPercent: 110,
                duration: 0.6,
                ease: 'back.out(1.6)',
                stagger: 0.022,
                scrollTrigger: { trigger: title, start: 'top 88%', once: true },
              }),
          });
        });
      });
      revert = () => context.revert();
    })
    .catch((error: unknown) => {
      console.error('Failed to load GSAP for scroll reveals', error);
    });
}

document.addEventListener('astro:page-load', start);
document.addEventListener('astro:before-swap', () => {
  revert?.();
  revert = undefined;
});
