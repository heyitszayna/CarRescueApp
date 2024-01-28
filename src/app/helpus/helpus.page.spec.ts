import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpusPage } from './helpus.page';

describe('HelpusPage', () => {
  let component: HelpusPage;
  let fixture: ComponentFixture<HelpusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
