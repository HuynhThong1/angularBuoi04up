import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/DataBinding/Register.component';
import { RegisterComponent2 } from 'src/app/HomeModule/Register.component';


// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class isSubmitGuard implements CanDeactivate<RegisterComponent2> {
    canDeactivate(
        component: RegisterComponent2, // DOM đén component giống viewChild
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

        if(component.isSubmit){
            return true;
        }   
        //Nếu chưa điền xong thì hỏi = confirm => true => cho đi
        if(confirm('Bạn có chắc muốn rời khỏi trang này?')){
            return true;
        }
        return false;
    }
}