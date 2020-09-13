import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItinerarioComponent } from './content-itinerario.component';

describe('ContentItinerarioComponent', () => {
  let component: ContentItinerarioComponent;
  let fixture: ComponentFixture<ContentItinerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentItinerarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
