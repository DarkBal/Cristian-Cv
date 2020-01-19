import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CristianCaravergaComponent } from './cristian-caraverga.component';

describe('CristianCaravergaComponent', () => {
  let component: CristianCaravergaComponent;
  let fixture: ComponentFixture<CristianCaravergaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CristianCaravergaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CristianCaravergaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
