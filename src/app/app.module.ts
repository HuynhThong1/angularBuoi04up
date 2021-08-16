import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './AdminModule/Admin.module';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { AboutComponent } from './HomeModule/About.component';
import { ContactComponent } from './HomeModule/Contact.component';
import { HeaderHomeComponent } from './HomeModule/HeaderHome.component';
import { HomeModule } from './HomeModule/Home.module';
import { HomePageComponent } from './HomeModule/Homepage1.component';
import { LoginComponent } from './HomeModule/Login.component';
import { RegisterComponent2 } from './HomeModule/Register.component';


const AppRoute: Routes = [
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'admin', loadChildren: () => AdminModule},
]

@NgModule({
  declarations: [
    AppComponent, //các component trong module này (mỗi component sinh ra phải ở trong 1 module)
  ],
  imports: [
    BrowserModule, BaiTapLayoutModule,DataBindingModule, RouterModule.forRoot(AppRoute), HomeModule //nơi chèn các module khác vào
  ],
  providers: [], //nơi chèn các service vào
  bootstrap: [AppComponent] //Các component 
})
export class AppModule { } //Module gốc ứng dụng 
