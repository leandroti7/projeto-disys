import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItinerarioComponent } from './list-itinerario.component';

describe('ListItinerarioComponent', () => {
  let component: ListItinerarioComponent;
  let fixture: ComponentFixture<ListItinerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItinerarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
