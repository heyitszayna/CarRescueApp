import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prob6Page } from './prob6.page';

describe('Prob6Page', () => {
  let component: Prob6Page;
  let fixture: ComponentFixture<Prob6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Prob6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
