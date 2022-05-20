import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNamesComponent } from './employee-names.component';

describe('EmployeeNamesComponent', () => {
  let component: EmployeeNamesComponent;
  let fixture: ComponentFixture<EmployeeNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
