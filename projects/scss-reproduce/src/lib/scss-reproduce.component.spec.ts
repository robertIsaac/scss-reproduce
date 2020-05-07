import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssReproduceComponent } from './scss-reproduce.component';

describe('ScssReproduceComponent', () => {
  let component: ScssReproduceComponent;
  let fixture: ComponentFixture<ScssReproduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssReproduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssReproduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
