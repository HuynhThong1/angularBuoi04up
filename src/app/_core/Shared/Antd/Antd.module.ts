import { NgModule } from '@angular/core';

import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


@NgModule({
    imports: [NzButtonModule, NzIconModule, NzDrawerModule],
    exports: [NzButtonModule, NzIconModule, NzDrawerModule],
})
export class AntdModule { }
