import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prob3Page } from './prob3.page';

describe('Prob3Page', () => {
  let component: Prob3Page;
  let fixture: ComponentFixture<Prob3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Prob3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
