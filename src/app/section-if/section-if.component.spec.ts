import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIfComponent } from './section-if.component';

describe('SectionIfComponent', () => {
  let component: SectionIfComponent;
  let fixture: ComponentFixture<SectionIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
