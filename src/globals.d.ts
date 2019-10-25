interface StateManagerState
{
    lastTimestamp: number,
    lastUpdatedBy: string,
}

interface StateManager
{
    ping(timestamp:number, componentName:string) : void;
}
