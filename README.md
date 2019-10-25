# ES Modules Static Class Importing

This prototype is designed to test using the [ES Modules](https://v8.dev/features/modules#intro) `import` keyword for 'static' classes. This prototype shows that we can import a single instance of a state manager class into several web components.

## How It Works

This demo is composed of a state manager class and two [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). The `StateManager` class contains a state object that tracks a timestamp and web component name. It has a public `ping()` method that allows web components to update the timestamp. Both the `web-component` and `second-component` elements are web components. Their JavaScript files user `type="module"` allowing them to import the `StateManger` class using `import { StateManager } from './state-manager.js`. When the web components `connectedCallback()` method is called they begin calling the `StateManger.ping()` method on set intervals.
