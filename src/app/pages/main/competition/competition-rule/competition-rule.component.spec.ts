import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionRuleComponent } from './competition-rule.component';

describe('CompetitionRuleComponent', () => {
  let component: CompetitionRuleComponent;
  let fixture: ComponentFixture<CompetitionRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
