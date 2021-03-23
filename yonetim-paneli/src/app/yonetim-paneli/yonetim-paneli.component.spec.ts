import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YonetimPaneliComponent } from './yonetim-paneli.component';

describe('YonetimPaneliComponent', () => {
  let component: YonetimPaneliComponent;
  let fixture: ComponentFixture<YonetimPaneliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YonetimPaneliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YonetimPaneliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
