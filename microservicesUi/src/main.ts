import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

// Note: With templates original bootstrapApplication, nothing appears.
//       Google's example requires use of the platformBrowserDynamic.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
