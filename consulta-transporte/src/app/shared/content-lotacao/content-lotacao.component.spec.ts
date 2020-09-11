import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLotacaoComponent } from './content-lotacao.component';

describe('ContentLotacaoComponent', () => {
  let component: ContentLotacaoComponent;
  let fixture: ComponentFixture<ContentLotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLotacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
