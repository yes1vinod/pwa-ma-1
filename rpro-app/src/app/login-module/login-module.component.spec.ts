
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModuleComponent } from './login-module.component';

describe('LoginModuleComponent', () => {
  let component: LoginModuleComponent;
  let fixture: ComponentFixture<LoginModuleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
