import { NgModule } from '@angular/core';

import { environment } from '@env/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'fire-market'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ]
})
export class FirebaseModule {}
