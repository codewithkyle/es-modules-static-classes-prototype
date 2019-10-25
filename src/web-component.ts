import { stateManager } from './state-manager.js';

class WebComponent extends HTMLElement
{
    connectedCallback()
    {
        console.log('Web Component mounted');
        setInterval(()=>{
            stateManager.ping(performance.now(), 'web-component');
        }, 1000);
    }
}
customElements.define('web-component', WebComponent);