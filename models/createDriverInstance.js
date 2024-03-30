import webdriver from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

let chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--js-flags=--expose-gc");
chromeOptions.addArguments("--enable-precise-memory-info");
chromeOptions.addArguments("--disable-popup-blocking");
chromeOptions.addArguments("--disable-default-apps");
chromeOptions.addArguments("--disable-infobars");
chromeOptions.addArguments('--enable-logging')
chromeOptions.addArguments('--kiosk-printing');
chromeOptions.setUserPreferences({
    'download.default_directory': `files`,
    'download.prompt_for_download': false,
    'download.directory_upgrade': true,
    'safebrowsing.enabled': false
});

const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

export { driver };