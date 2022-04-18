import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionQuestionComponent } from './competition-question.component';

describe('CompetitionQuestionComponent', () => {
  let component: CompetitionQuestionComponent;
  let fixture: ComponentFixture<CompetitionQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
