/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { h, render } from 'preact';
import App from './App';

const root = document.getElementById('app') as HTMLElement;

async function main() {
  if (!__PRODUCTION__) await import('preact/debug');
  render(<App />, root);
}

main();

// Analytics
{
  // Determine the current display mode.
  const displayMode =
    navigator.standalone ||
    window.matchMedia('(display-mode: standalone)').matches
      ? 'standalone'
      : 'browser';

  // Setup gtag (Google Analytics 4)
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  gtag('js', new Date());

  // Setup GA4 config
  gtag('config', 'G-62Y3EHCTRX', {
    page_path: '/index.html',
    page_title: 'Squoosh',
    user_properties: {
      displayMode: displayMode,
    },
  });

  // Load the GA script asynchronously
  addEventListener('load', () => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-62Y3EHCTRX';
    document.head.appendChild(script);
  });
    
}
