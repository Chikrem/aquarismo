import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageZoomModalComponent } from './image-zoom-modal.component';

describe('ImageZoomModalComponent', () => {
  let component: ImageZoomModalComponent;
  let fixture: ComponentFixture<ImageZoomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageZoomModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageZoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
