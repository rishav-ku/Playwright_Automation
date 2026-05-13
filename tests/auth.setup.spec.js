import {test as setup,expect} from "@playwright/test"
import logInData from "../TestData/LogInData.json"
import { LogInPage } from '../pages/LogInPage'

setup("Authentication", async ({page})=>{
    const logInPage = new LogInPage(page);
    await logInPage.navigation();
    
    await logInPage.login(logInData.userId,logInData.password);
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.context().storageState({path:'utills/auth.json'});
   


})


