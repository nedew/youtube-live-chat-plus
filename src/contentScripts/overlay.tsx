import React from 'react';
import { createRoot } from 'react-dom/client';
import { Overlay } from '@/components/Overlay';
import '@/styles/overlay.css';

console.log('[YouTube Live Chat Plus]: Injected');

const main = async () => {
  // フルスクリーン時
  const ytFullBleedContainer = await waitRefElement(
    '#player-full-bleed-container'
  );

  if (!ytFullBleedContainer) {
    throw new Error(
      '[YouTube Live Chat Plus]: Could not find player container'
    );
  }

  const observer = new MutationObserver((mutations) => {
    console.log('[YouTube Live Chat Plus]: Mutation detected', mutations);

    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.id === 'player-container') {
              const root = document.createElement('div');
              root.id = 'ylcp-root';
              root.className = 'ylcp-root-el';

              node.appendChild(root);

              createRoot(root).render(
                <React.StrictMode>
                  <Overlay />
                </React.StrictMode>
              );
            }
          }
        });
      }
    });
  });

  observer.observe(ytFullBleedContainer, {
    childList: true,
  });
};

const waitRefElement = async (selector: string) => {
  return new Promise<Element>((resolve) => {
    const interval = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(interval);
        resolve(el);
      }
    }, 500);
  });
};

main();
