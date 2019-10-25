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
        console.group()
        console.log(`Was last updated by ${ this.state.lastUpdatedBy }`);
        this.state = updatedState;
        console.log(`Now is updated by ${ this.state.lastUpdatedBy } at ${ this.state.lastTimestamp }`);
        console.groupEnd();
    }
}

export const stateManager:StateManager = new StateManager();