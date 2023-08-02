const user = {
  //key:value
  username: null,
  password: null,
  name: null,
  email: null,
  toString: () => {
    return (
      "user(" +
      user.username +
      "," +
      user.password +
      "," +
      user.name +
      "," +
      user.email +
      ")"
    );
  },
};

user.username = "janhold";
user.password = "1234";
user.name = "한유정";
user.email = "janhold@naver.com";

console.log(user.toString());
console.log(user);

class User {
  username;
  password;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  usernameAndPasswordCheck(username, password) {
    console.log("username", username);
    console.log("password", password);
    if (username !== this.username || password != this.password) {
      alert("로그인실패");
      return;
    }
    alert("로그인성공");
  }
}

const janhold = new User("janhold","1234");
console.log(janhold);

janhold.usernameAndPasswordCheck("janhold", "1234");