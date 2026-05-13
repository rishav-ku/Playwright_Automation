import {expect} from "@playwright/test"
export class DashboardPage{
    constructor(page){
        this.page=page;
        this.pageHeading = page.getByRole('heading',{name:"Dashboard"});
    }   

    async validateDashboardPage(){
        await expect (this.pageHeading).toHaveText("Dashboard");
    }

    async validateDashboardPageElements(){
       const minimizeButton = this.page.locator(("//div[@class='oxd-main-menu-search']"))
        .getByRole('button');
        await expect(minimizeButton).toBeVisible();

        await expect(this.page.getByRole("button",{name:"Upgrade"})).toBeVisible();
    }
        
    
}