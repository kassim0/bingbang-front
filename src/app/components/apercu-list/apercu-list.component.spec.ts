import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuListComponent } from './apercu-list.component';

describe('ApercuListComponent', () => {
  let component: ApercuListComponent;
  let fixture: ComponentFixture<ApercuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApercuListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApercuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
