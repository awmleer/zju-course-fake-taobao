import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesBarComponent } from './sites-bar.component';

describe('SitesBarComponent', () => {
  let component: SitesBarComponent;
  let fixture: ComponentFixture<SitesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
