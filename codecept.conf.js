exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Protractor:
    { 
      url: 'localhost',
      host: '127.0.0.1',
      port:4444,
      browser: 'chrome',
	    restart: true,
      keepBrowserStat: false,
      keepCookies: false,
      maxInstances:1,
      windowSize: 'maximize',
      smartWait: 5000,
      waitForTimeout: 5000,
      scriptTimeout: 5000,
      getPageTimeout:15000,
      desiredCapabilities: {chromeOptions:{args: [ "--disable-gpu"]}},
      chrome: {
        headless: false
      },
      angular: false
      },
      REST: {
        endpoint: 'https://stage-secure-gateway.hipay-tpp.com/rest',
        defaultHeaders: {
          'Authorization': 'Basic OTQ2NTgzNjUuc3RhZ2Utc2VjdXJlLWdhdGV3YXkuaGlwYXktdHBwLmNvbTpUZXN0X1JoeXBWdktpUDY4VzNLQUJ4eUdoS3Zlcw==',
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        },
    },
  },
  include: {
    paymentPage: './pages/payment.js',
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'hp_test',

  plugins: {
    allure: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
      seleniumArgs: {
          version: '3.141.5',
          drivers: {
              chrome: {
                  version: '86.0.4240.22',
              }
          },
      },
      seleniumInstallArgs: {
          version: '3.141.5',
          baseURL: 'https://selenium-release.storage.googleapis.com',
          drivers: {
              chrome: {
                  version: '86.0.4240.22',
                  arch: process.arch,
                  baseURL: 'https://chromedriver.storage.googleapis.com',
              }
          },
      },
    }
  }
}