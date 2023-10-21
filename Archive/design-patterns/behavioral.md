---
title: "Behavioral Design Patterns"
---

#### [Strategy Design Pattern (Behavioral)](https://www.thisdot.co/blog/clean-up-your-code-with-design-patterns-in-javascript)

Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm exist very independently from clients that use it.

[![strategy-pattern](https://camo.githubusercontent.com/5a9d9c6c2071047d1b316ac2e2a0c874f52af235aa90e3c95ddf408ba698058e/68747470733a2f2f696d616765732e636f6e74656e7466756c2e636f6d2f7a6f6a7a7a646f7030667a782f66534433624f35555759494370626e7950327a726c2f34333233316439373036653834326439353831313537646666376236626332332f53747261746567792e676966)](https://camo.githubusercontent.com/5a9d9c6c2071047d1b316ac2e2a0c874f52af235aa90e3c95ddf408ba698058e/68747470733a2f2f696d616765732e636f6e74656e7466756c2e636f6d2f7a6f6a7a7a646f7030667a782f66534433624f35555759494370626e7950327a726c2f34333233316439373036653834326439353831313537646666376236626332332f53747261746567792e676966)


```ts

/**
 * The Context defines the interface of interest to clients.
 */
class Context {

    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeBusinessLogic(): void {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();


