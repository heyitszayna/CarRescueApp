import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prob1Page } from './prob1.page';

describe('Prob1Page', () => {
  let component: Prob1Page;
  let fixture: ComponentFixture<Prob1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Prob1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
