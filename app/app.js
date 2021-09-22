import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'storefront-cms/config/environment';

export default class App extends Application {
    modulePrefix = config.modulePrefix;
    podModulePrefix = config.podModulePrefix;
    Resolver = Resolver;

    constructor() {
        super(...arguments);

        this.engines = {
            '@fleetbase/storefront-web-engine': {
                dependencies: {
                    services: ['store', 'router'],
                },
            },
        };
    }
}

loadInitializers(App, config.modulePrefix);
