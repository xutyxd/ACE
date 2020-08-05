import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MobileComponent } from './mobile.component';

describe('MobileComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MobileComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MobileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mobile'`, () => {
    const fixture = TestBed.createComponent(MobileComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mobile');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MobileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mobile app is running!');
  });
});
