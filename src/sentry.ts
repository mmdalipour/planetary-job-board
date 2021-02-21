
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


if(
  process.env.NODE_ENV === "production"
){
Sentry.init({
  dsn:
    "https://4489c474f960442892557fd3495e5158@o517278.ingest.sentry.io/5624875",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
}


