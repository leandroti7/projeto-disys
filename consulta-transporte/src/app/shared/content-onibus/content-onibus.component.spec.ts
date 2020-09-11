import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOnibusComponent } from './content-onibus.component';

describe('ContentOnibusComponent', () => {
  let component: ContentOnibusComponent;
  let fixture: ComponentFixture<ContentOnibusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentOnibusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
