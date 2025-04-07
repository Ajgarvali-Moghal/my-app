import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case for addition
  it('should correctly add two numbers', () => {
    component.num2 = 5;
    component.num3 = 3;
    component.add();
    expect(component.result).toBe(8); // 5 + 3 = 8
  });

  // Test case for subtraction
  it('should correctly subtract two numbers', () => {
    component.num2 = 10;
    component.num3 = 4;
    component.sub();
    expect(component.result).toBe(6); // 10 - 4 = 6
  });

  // Test case for multiplication
  it('should correctly multiply two numbers', () => {
    component.num2 = 7;
    component.num3 = 6;
    component.mul();
    expect(component.result).toBe(42); // 7 * 6 = 42
  });

  // Test case for modulus operation
  it('should correctly find the modulus of two numbers', () => {
    component.num2 = 10;
    component.num3 = 3;
    component.div();
    expect(component.result).toBe(1); // 10 % 3 = 1
  });

  // Edge case: Division by zero
  it('should handle division by zero without errors', () => {
    component.num2 = 10;
    component.num3 = 0;
    expect(() => component.div()).not.toThrow();
    expect(component.result).toBeNaN(); // Modulus with zero results in NaN
  });

  // Edge case: Negative numbers
  it('should handle negative numbers correctly in addition', () => {
    component.num2 = -5;
    component.num3 = 3;
    component.add();
    expect(component.result).toBe(-2); // -5 + 3 = -2
  });

  it('should handle negative numbers correctly in multiplication', () => {
    component.num2 = -4;
    component.num3 = 3;
    component.mul();
    expect(component.result).toBe(-12); // -4 * 3 = -12
  });

  // Edge case: Zero values
  it('should return zero when adding zero and zero', () => {
    component.num2 = 0;
    component.num3 = 0;
    component.add();
    expect(component.result).toBe(0); // 0 + 0 = 0
  });

  it('should return zero when subtracting the same number', () => {
    component.num2 = 5;
    component.num3 = 5;
    component.sub();
    expect(component.result).toBe(0); // 5 - 5 = 0
  });
});
