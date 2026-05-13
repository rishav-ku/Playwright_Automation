import {test,expect} from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'



test('Validate dashboard page', async ({page})=>{
    
    await page.goto("/web/index.php/dashboard/index");
    const dashboardPage = new DashboardPage(page);
    dashboardPage.validateDashboardPage();
    
})

test.only('Validate dashboard page elements', async ({page})=>{
    
    await page.goto("/web/index.php/dashboard/index");
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.validateDashboardPageElements();  
})