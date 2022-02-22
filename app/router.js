import EmberRouter from '@ember/routing/router';
import config from 'storefront-cms/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('@fleetbase/storefront-web-engine', { path: '/' });
});
