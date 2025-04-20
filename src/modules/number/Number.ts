import NumberFormat from './format/NumberFormat';

export default class Number {
  static format = NumberFormat;

  // Utils
  static lowerThan(num1: number, num2: number) {
    return num1 < num2;
  }

  static lowerOrEqualThan(num1: number, num2: number) {
    return num1 <= num2;
  }

  static greaterThan(num1: number, num2: number) {
    return num1 > num2;
  }

  static greaterOrEqualThan(num1: number, num2: number) {
    return num1 >= num2;
  }
}
