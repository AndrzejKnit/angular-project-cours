import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvanComponent } from './evan.component';

describe('EvanComponent', () => {
  let component: EvanComponent;
  let fixture: ComponentFixture<EvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
