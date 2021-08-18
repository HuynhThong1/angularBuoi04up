import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../DataBinding/Register.component';
import { AntdModule } from '../_core/Shared/Antd/Antd.module';
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HeaderHomeComponent } from './HeaderHome.component';
import { HomePageComponent } from './Homepage1.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { LoginComponent } from './Login.component';
import { RegisterComponent2 } from './Register.component';


//định nghĩa rooter


const HomeRoute:Routes = [
  {path: '', component: HomeTemplateComponent, children:[
    {path:'', component: HomePageComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
  ]},
]


@NgModule({
  declarations: [HomePageComponent,AboutComponent,RegisterComponent2, LoginComponent ,ContactComponent, HomeTemplateComponent, HeaderHomeComponent],
  imports: [RouterModule.forChild(HomeRoute), CommonModule, AntdModule],
  providers: [], //nơi sử dụng service k có provider trong root
  exports: [],
  
})
export class HomeModule { }