import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DesktopComponent } from './desktop.component';

describe('DesktopComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DesktopComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DesktopComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'desktop'`, () => {
    const fixture = TestBed.createComponent(DesktopComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('desktop');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DesktopComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('desktop app is running!');
  });
});
