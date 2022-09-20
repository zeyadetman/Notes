# Notes

### Behavioral <a href="#strategy-design-pattern-behavioral" id="strategy-design-pattern-behavioral"></a>

#### [Strategy Design Pattern (Behavioral)](https://www.thisdot.co/blog/clean-up-your-code-with-design-patterns-in-javascript)

Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm exist very independently from clients that use it.

![strategy-pattern](https://images.contentful.com/zojzzdop0fzx/fSD3bO5UWYICpbnyP2zrl/43231d9706e842d9581157dff7b6bc23/Strategy.gif)

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
```

### [🔗](https://www.thisdot.co/blog/clean-up-your-code-with-design-patterns-in-javascript#decorator-design-pattern-structural) <a href="#decorator-design-pattern-structural" id="decorator-design-pattern-structural"></a>

\
