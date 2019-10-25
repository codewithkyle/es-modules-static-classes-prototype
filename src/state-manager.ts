class StateManager
{
    private state : StateManagerState

    constructor()
    {
        console.log('State Manager started');
        this.state = {
            lastTimestamp: performance.now(),
            lastUpdatedBy: 'initial'
        };
    }

    public ping(timestamp:number, componentName:string) : void
    {
        const updatedState = { ...this.state };
        updatedState.lastTimestamp = timestamp;
        updatedState.lastUpdatedBy = componentName;
        this.setState(updatedState);
    }
    
    private setState(updatedState:StateManagerState) : void
    {
        this.state = updatedState;
        console.log(this.state);
    }
}
// @ts-ignore
window.stateManager = new StateManager();

// @ts-ignore
export const stateManager:StateManager = window.stateManager;