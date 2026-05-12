import {expect} from "@playwright/test"
export class DashboardPage{
    constructor(page){
        this.page=page;
        this.pageHeading = page.getByRole('heading',{name:"Dashboard"});
    }   

    async validateDashboardPage(){
        await expect (this.pageHeading).toHaveText("Dashboard");
    }
    
}