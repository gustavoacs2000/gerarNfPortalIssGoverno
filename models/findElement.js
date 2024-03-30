import { By } from "selenium-webdriver";

async function findElementByName(driver, name) {
    const elements = await driver.findElements(By.xpath(`//*[@name="${name}"] | //*[@id="${name}"]`));
    return elements.length > 0 ? elements[0] : null;
};

async function findElementByType(driver, type) {
    const elements = await driver.findElements(By.xpath(`//*[@type="${type}"]`));
    return elements.length > 0 ? elements[0] : null;
};

export {
    findElementByName,
    findElementByType
};