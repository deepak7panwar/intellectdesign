import { async, TestBed } from '@angular/core/testing';
import { UiWidgetsModule } from './ui-widgets.module';

describe('UiWidgetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiWidgetsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiWidgetsModule).toBeDefined();
  });
});
