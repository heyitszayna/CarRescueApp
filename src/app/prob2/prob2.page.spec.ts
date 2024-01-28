import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prob2Page } from './prob2.page';

describe('Prob2Page', () => {
  let component: Prob2Page;
  let fixture: ComponentFixture<Prob2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Prob2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
