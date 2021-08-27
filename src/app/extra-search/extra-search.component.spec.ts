import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSearchComponent } from './extra-search.component';

describe('ExtraSearchComponent', () => {
  let component: ExtraSearchComponent;
  let fixture: ComponentFixture<ExtraSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
