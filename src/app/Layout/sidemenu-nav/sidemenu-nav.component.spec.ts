import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuNavComponent } from './sidemenu-nav.component';

describe('SidemenuNavComponent', () => {
  let component: SidemenuNavComponent;
  let fixture: ComponentFixture<SidemenuNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemenuNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
