import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsMenuTabComponent } from './os-menu-tab.component';

describe('OsMenuTabComponent', () => {
  let component: OsMenuTabComponent;
  let fixture: ComponentFixture<OsMenuTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsMenuTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OsMenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
