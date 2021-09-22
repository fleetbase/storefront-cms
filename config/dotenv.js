/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (/* env */) {
    return {
        clientAllowedKeys: ['STOREFRONT_KEY', 'FLEETBASE_KEY', 'FLEETBASE_HOST', 'GOOGLE_MAPS_KEY', 'STRIPE_KEY'],
        fastbootAllowedKeys: [],
        failOnMissingKey: false,
        path: path.join(path.dirname(__dirname), '.env'),
    };
};
