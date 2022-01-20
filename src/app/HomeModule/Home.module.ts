import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AntdModule } from '@antd';
import { QuanTriGheModule } from '../quan-tri-ghe/quan-tri-ghe.module';
import { isLoginGuard } from '../_core/guards/isLogin.guard';
import { isSubmitGuard } from '../_core/guards/isSubmit.guard';
import { PipeModule } from '../_core/Shared/PipeModule/Pipe.module';
import { AboutComponent } from './About.component';
import { DanhSachSanPhamComponent } from './BaiTapXemChiTiet/DanhSachSanPham.component';
import { ModalComponent } from './BaiTapXemChiTiet/Modal.component';
import { SanPhamComponent } from './BaiTapXemChiTiet/SanPham.component';
import { DatGheComponent } from './DatGhe.component';
import { DemoBehaviorSubjectComponent } from './DemoBehavior/DemoBehavior.component';
import { ModalBehaviorComponent } from './DemoBehavior/ModalBehavior.component';
import { ChildComponent } from './DemoLifeCycle/Child.component';
import { DemoLifeCycleComponent } from './DemoLifeCycle/DemoLifeCycle.component';
import { DemoPipeComponent } from './DemoPipe.component';
import { DetailComponent } from './Details.component';
import { FormValidationComponent } from './FormValidation.component';
import { HeaderHomeComponent } from './HeaderHome.component';
import { HomePageComponent } from './Homepage1.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { LoginComponent } from './Login.component';
import { ProfileComponent } from './Profile.component';
import { RegisterComponent2 } from './Register.component';


//định nghĩa rooter


const HomeRoute:Routes = [
  {path: '', component: HomeTemplateComponent, children:[
    {path:'', component: HomePageComponent},
    {path:'login', component: LoginComponent},
    // {path:'register', component: RegisterComponent},
    {path:'about', component: AboutComponent},
    {path:'datghe', component: DatGheComponent},
    {path:'detail/:id', component: DetailComponent},
    {path:'detail', component: DetailComponent},
    {path:'register', component: FormValidationComponent},
    {path:'demopipe', component: DemoPipeComponent},
    {path:'register2', component: RegisterComponent2, canDeactivate: [isSubmitGuard]},
    {path:'profile', component: ProfileComponent, canActivate: [isLoginGuard]},


    {path:'demolifecycle', component: DemoLifeCycleComponent},


    {path:'dssp', component: DanhSachSanPhamComponent},
    {path:'demobehavior', component: DemoBehaviorSubjectComponent},
  ]},
]


@NgModule({
  declarations: [HomePageComponent,AboutComponent,RegisterComponent2, LoginComponent ,DatGheComponent, HomeTemplateComponent, HeaderHomeComponent, DetailComponent, FormValidationComponent, ProfileComponent, DanhSachSanPhamComponent, SanPhamComponent, ModalComponent, DemoPipeComponent, ChildComponent, DemoLifeCycleComponent, DemoBehaviorSubjectComponent, ModalBehaviorComponent],
  imports: [RouterModule.forChild(HomeRoute), CommonModule, AntdModule,QuanTriGheModule, FormsModule, PipeModule],
  providers: [], //nơi sử dụng service k có provider trong root
  exports: [],
  
})
export class HomeModule { }