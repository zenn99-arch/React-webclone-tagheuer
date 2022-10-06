import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://89d13d5f35374688b01b920a0d724c7c@o1389181.ingest.sentry.io/6711894",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


