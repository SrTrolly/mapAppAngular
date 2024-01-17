import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomRagePageComponent } from './zoom-rage-page.component';

describe('ZoomRagePageComponent', () => {
  let component: ZoomRagePageComponent;
  let fixture: ComponentFixture<ZoomRagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoomRagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoomRagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
