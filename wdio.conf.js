exports.config = {    
    runner: 'local',    
    maxInstances: 1,
    capabilities: [{        
        browserName: 'chrome',
        'goog:chromeOptions':{
            args: ['--disable-gpu', '--window-size=1280,800']
        }
    }],    
    logLevel: 'info',    
    bail: 0,
    waitforTimeout: 10000,    
    connectionRetryTimeout: 120000,    
    connectionRetryCount: 3,
    framework: 'jasmine',
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
        }
    },
}
