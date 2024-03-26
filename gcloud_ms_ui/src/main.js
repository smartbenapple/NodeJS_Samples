/// <reference types="@angular/localize" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// Note: With templates original bootstrapApplication, nothing appears.
//       Google's example requires use of the platformBrowserDynamic.
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
//# sourceMappingURL=main.js.map