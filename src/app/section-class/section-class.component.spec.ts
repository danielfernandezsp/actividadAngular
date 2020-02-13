import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionClassComponent } from './section-class.component';

describe('SectionClassComponent', () => {
  let component: SectionClassComponent;
  let fixture: ComponentFixture<SectionClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
