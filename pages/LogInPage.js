export class LogInPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.getByPlaceholder("username");
        this.passwordInput = page.getByPlaceholder("password");
        this.loginButton = page.locator("//button[text()=' Login ']");
        
    }

    ///Navigation
    async navigation() {
        await this.page.goto("/web/index.php/auth/login");
    }
    //Log In Methods
    async login(username,password){
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}