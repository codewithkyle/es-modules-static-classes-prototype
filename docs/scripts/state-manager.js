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
        this.state = updatedState;
        console.log(this.state);
    }
}
// @ts-ignore
window.stateManager = new StateManager();
// @ts-ignore
export const stateManager = window.stateManager;
