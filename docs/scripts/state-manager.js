class StateManager {
    constructor() {
        console.log('State Manager started');
        this.state = {
            lastTimestamp: performance.now(),
            lastUpdatedBy: 'initial'
        };
    }
    ping(timestamp, componentName) {
        const updatedState = Object.assign({}, this.state);
        updatedState.lastTimestamp = timestamp;
        updatedState.lastUpdatedBy = componentName;
        this.setState(updatedState);
    }
    setState(updatedState) {
        console.group();
        console.log(`Was last updated by ${this.state.lastUpdatedBy}`);
        this.state = updatedState;
        console.log(`Now is updated by ${this.state.lastUpdatedBy} at ${this.state.lastTimestamp}`);
        console.groupEnd();
    }
}
export const stateManager = new StateManager();
