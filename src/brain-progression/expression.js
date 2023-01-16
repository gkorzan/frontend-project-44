import { getGenerator } from '../utils/generate-number.js';

const MAX_NUMBER = 10

const generator = getGenerator(MAX_NUMBER)

class ArithmeticProgression {
    /**
     * @param {Number} a - first number of progression secuence to start
     * @param {Number} d - common difference of progression
     */
    constructor (a, d) {
        this.firstNumber = a;
        this.difference = d;
    }

    /**
     * 
     * @param {Number} n - number of element in progression to calc
     */
    getNthTerm(n) {
        return this.firstNumber + (n-1)*this.difference
    }
    /**
     * 
     * @param {Number} n - number of element until need to calc sum
     */
    getSumOfFirstNElements(n) {
        return n*(this.firstNumber + this.getNthTerm(n))/2
    }

    * progressionGeneratorInfinite() {
        for (let i = 0; i < 1000; i += 1) {
            yield this.firstNumber + i * this.difference
        }
    }

    * progressionGenerator(numberOfElements) {
    for (let i = 0; i < numberOfElements; i += 1) {
        yield this.firstNumber + i * this.difference
    }
    }

    printInfo() {
        console.log(`First element: ${this.firstNumber}, difference: ${this.difference}`)
    }

}

function generateRandomProgression() {
    const randomFirstElement = generator()
    const randomDifference = generator()

    const arithmeticProgression = new ArithmeticProgression(randomFirstElement, randomDifference)

    return arithmeticProgression
}

function generateExpression(length = 6) {
    const arithmeticProgression = generateRandomProgression()
    const progressionArrayLenght = length 
    const progressionArray = [...arithmeticProgression.progressionGenerator(progressionArrayLenght)]
    const generator = getGenerator(progressionArrayLenght)
    const numberToHideIndex = generator()
    const hiddenNumber = progressionArray[numberToHideIndex]
    const hiddenArray = progressionArray.map((value, index) => {
        if (index === numberToHideIndex) {
            return '..'
        }
        return value
    })

    return {hiddenArray, hiddenNumber}
}

export { ArithmeticProgression, generateExpression }