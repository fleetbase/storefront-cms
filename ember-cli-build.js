'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const postCssPresetEnv = require('postcss-preset-env');
const tailwind = require('tailwindcss');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        storeConfigInMeta: false,

        postcssOptions: {
            compile: {
                plugins: [
                    {
                        module: require('postcss-import'),
                        options: {
                            path: ['node_modules'],
                        },
                    },
                    tailwind('./app/styles/tailwind.config.js'),
                    postCssPresetEnv({ stage: 1 }),
                    require('postcss-nested'),
                    require('autoprefixer')
                ],
            },
        },
    });

    return app.toTree();
};
