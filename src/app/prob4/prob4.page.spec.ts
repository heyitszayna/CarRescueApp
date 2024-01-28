import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prob4Page } from './prob4.page';

describe('Prob4Page', () => {
  let component: Prob4Page;
  let fixture: ComponentFixture<Prob4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Prob4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
