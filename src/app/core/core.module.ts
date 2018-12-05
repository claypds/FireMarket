import { NgModule } from '@angular/core';

import { environment } from '@env/environment';

import { FirebaseModule } from './firebase/firebase.module';

// NGXS
import { NgxsModule } from '@ngxs/store';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [],
  imports: [
    FirebaseModule,
    // NGXS
    NgxsReduxDevtoolsPluginModule.forRoot({
      maxAge: 15,
      disabled: environment.production
    }),
    NgxsModule.forRoot([]),
    NgxsRouterPluginModule.forRoot()
  ]
})
export class CoreModule {}
