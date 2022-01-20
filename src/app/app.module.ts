import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './AdminModule/Admin.module';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { HomeModule } from './HomeModule/Home.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AntdModule } from './_core/Shared/Antd/Antd.module';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';
import { HeaderInterceptor } from './_core/guards/jwt.interceptor';



// cấu hình ngrx/store


import {StoreModule} from '@ngrx/store';
import { modalReducer } from './_core/redux/Reducers/Modal.reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

registerLocaleData(en);


const AppRoute: Routes = [
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'admin', loadChildren: () => AdminModule},
  {path: '', loadChildren: () =>HomeModule},
  // {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent, //các component trong module này (mỗi component sinh ra phải ở trong 1 module)
  ],
  imports: [
    BrowserModule, BaiTapLayoutModule,DataBindingModule, RouterModule.forRoot(AppRoute), HomeModule, HttpClientModule, FormsModule, BrowserAnimationsModule, AntdModule, QuanTriGheModule, StoreModule.forRoot({modalReducer:modalReducer}), ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})
     //nơi chèn các module khác vào
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true}
  ], //nơi chèn các service vào
  bootstrap: [AppComponent] //Các component 
})
export class AppModule { } //Module gốc ứng dụng 
