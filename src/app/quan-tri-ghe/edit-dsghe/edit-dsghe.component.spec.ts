import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDSGheComponent } from './edit-dsghe.component';

describe('EditDSGheComponent', () => {
  let component: EditDSGheComponent;
  let fixture: ComponentFixture<EditDSGheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDSGheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDSGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
