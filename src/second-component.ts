import { stateManager } from './state-manager.js';

class SecondComponent extends HTMLElement
{
    connectedCallback()
    {
        console.log('Second Component mounted');
        setInterval(()=>{
            stateManager.ping(performance.now(), 'second-component');
        }, 3500);
    }
}
customElements.define('second-component', SecondComponent);