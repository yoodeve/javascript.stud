const signinButtonOnClickHandle = () => {
  AccountService.getInstance().signin();
};

class AccountService {
  // # : private
  authPassword = "1234";
  authUsername = "janhold";
  static #instance = null;
  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new AccountService();
    }
    return this.#instance;
  }
  signin() {
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    if (username !== this.authUsername && password !== this.authPassword) {
      alert("로그인실패");
      return;
    }
    alert("로그인 성공");
  }
}
