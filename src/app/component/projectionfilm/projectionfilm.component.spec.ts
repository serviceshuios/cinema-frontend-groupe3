import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionfilmComponent } from './projectionfilm.component';

describe('ProjectionfilmComponent', () => {
  let component: ProjectionfilmComponent;
  let fixture: ComponentFixture<ProjectionfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
