class NumbersValidator {
  constructor() {}

  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== "number") {
      throw new Error(
        `[${number}] is not of type "Number" it is of type "${typeOfVariable}"`
      );
    }
    return number % 2 === 0;
  }

  getEvenNumbersFromArray(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error("Input must be an array");
    }
    if (!arrayOfNumbers.every((item) => typeof item === "number")) {
      throw new Error("All elements must be numbers");
    }
    return arrayOfNumbers.filter((num) => this.isNumberEven(num));
  }
}

export default NumbersValidator;
