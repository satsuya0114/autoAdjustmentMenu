import React from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { prefixer } from 'stylis';

import App from './App';
import HomePageSimulator from './modules/HomePageSimulator';
import reportWebVitals from './reportWebVitals';
import { setupStore } from '@/redux/store';
import { initDayjs } from '@/utils/dayjs';

const container = document.createElement('div');
container.classList.add('txone-app-container');
container.setAttribute('id', 'txone-app-dom');
const shadowRoot = container.attachShadow({ mode: 'open' });
const mountPoint = document.createElement('div');
mountPoint.setAttribute('id', '__txoneApp');
document.querySelector('body')?.append(mountPoint);
const domElement = document.getElementById('__txoneApp');
domElement?.after(container);
const root = ReactDOM.createRoot(shadowRoot);
const txoneCache = createCache({
  key: 'txone-app-cache',
  container: shadowRoot,
  stylisPlugins: [prefixer],
});

initDayjs();

if (root) {
  root.render(
    <React.StrictMode>
      <CacheProvider value={txoneCache}>
        <Provider store={setupStore()}>
          <App />
        </Provider>
      </CacheProvider>
    </React.StrictMode>,
  );
}

const uicRootContainer = document.getElementById('rootSimulator');
if (uicRootContainer) {
  const uicRoot = ReactDOM.createRoot(uicRootContainer);
  uicRoot.render(<HomePageSimulator />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
