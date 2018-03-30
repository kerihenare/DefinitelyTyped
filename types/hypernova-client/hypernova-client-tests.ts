import HypernovaClient = require('hypernova-client');
import devModePlugin = require('hypernova-client/plugins/devModePlugin');

const devMode: HypernovaClient.Plugin = devModePlugin;

const renderer: HypernovaClient = new HypernovaClient({
    url: 'http://localhost:3030/batch',
    plugins: [
        devMode
    ]
});

const jobs: HypernovaClient.Jobs = {
    MyComponent: { name:  'Stranger' },
    Component2: { text: 'Hello World' }
};

renderer.render(jobs)
    .then((html: string) => console.log(html));
