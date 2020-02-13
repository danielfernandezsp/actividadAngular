import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionForComponent } from './section-for.component';

describe('SectionForComponent', () => {
  let component: SectionForComponent;
  let fixture: ComponentFixture<SectionForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
