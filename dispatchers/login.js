import { driver } from "../models/createDriverInstance.js";
import { findElementByName, findElementByType } from "../models/findElement.js";

async function Login(url, login, senha) {
    try {
        await driver.get(url);
        let inputLoginElement = await findElementByName(driver, `accountId`); // esse accountId precisa ser dinâmico de alguma forma
        await inputLoginElement.sendKeys(login);
        let inpuLoginButton = await findElementByType(driver, `submit`);
        inpuLoginButton === null ? null : await inputLoginElement.click();

    } catch (err) {
        console.log(`Erro na função de login:\n${err}`);
        throw new Error(`Erro na função de login:\n${err.message}`);
    }

}

export { Login }