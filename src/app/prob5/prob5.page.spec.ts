import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Prob5Page } from './prob5.page';

describe('Prob5Page', () => {
  let component: Prob5Page;
  let fixture: ComponentFixture<Prob5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Prob5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
