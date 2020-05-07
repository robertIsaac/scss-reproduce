import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproduceImportComponent } from './reproduce-import.component';

describe('ReproduceImportComponent', () => {
  let component: ReproduceImportComponent;
  let fixture: ComponentFixture<ReproduceImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproduceImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproduceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
