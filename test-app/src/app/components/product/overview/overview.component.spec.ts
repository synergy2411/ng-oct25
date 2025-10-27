import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewComponent } from './overview.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('Overview Component', () => {
  let fixture: ComponentFixture<OverviewComponent>;
  let component: OverviewComponent;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the overview component', () => {
    expect(component).toBeTruthy();
  });

  it('should populate product Id in component', () => {
    expect(component.productId).not.toBeUndefined();
  });

  it('should render product ID on template', () => {
    const h2Element = de.query(By.css('h2'));
    expect(h2Element.nativeElement.textContent).toContain(101);
  });
});

// // Test Suite
// describe('Test Examples', () => {
//   // Setup & Tear-down
//   beforeAll(() => {});
//   beforeEach(() => {});

//   afterEach(() => {});
//   afterAll(() => {});

//   // Create a Test
//   it('should pass the test', () => {
//     // Assertions
//     expect(true).toBeTruthy();
//   });

//   it('should contain "Hello" greeting', () => {
//     let greeting = 'Hello World';
//     expect(greeting).toContain('Hello');
//   });

//   it('should contains some list items', () => {
//     let todos = ['Grocery', 'Planting', 'Shopping'];
//     expect(todos.length).not.toEqual(0);
//   });
// });
