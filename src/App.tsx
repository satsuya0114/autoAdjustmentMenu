import React from 'react';

import { TonicProvider } from '@tonic-ui/react';

import Layout from './Layout';
import WebComponent from './modules/WebComponent';

function App() {
  return (
    <TonicProvider colorMode={{ defaultValue: 'dark' }} useCSSBaseline>
      <Layout>
        <WebComponent />
      </Layout>
    </TonicProvider>
  );
}

export default App;
