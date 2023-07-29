import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import HomePageSimulator from './modules/HomePageSimulator';
import reportWebVitals from './reportWebVitals';
import { setupStore } from '@/redux/store';
import { initDayjs } from '@/utils/dayjs';

initDayjs();

const rootContainer = document.getElementById('rootSimulator');
if (rootContainer) {
  const uicRoot = ReactDOM.createRoot(rootContainer);
  uicRoot.render(
    <Provider store={setupStore()}>
      <HomePageSimulator />
    </Provider>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
