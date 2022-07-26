import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTeamComponent } from './member-team.component';

describe('MemberTeamComponent', () => {
  let component: MemberTeamComponent;
  let fixture: ComponentFixture<MemberTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
