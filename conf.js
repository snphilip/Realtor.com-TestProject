exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // The specified spec files to run
    specs: ['positive-tests-spec.js'],
    capabilities: {
        'browserName': 'chrome'

    },



};





