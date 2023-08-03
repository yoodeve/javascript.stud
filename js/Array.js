window.onload = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const func = n => {
    return n*2;
  }
  const numbers2 = numbers.map(e => func(e))
  console.log(numbers2.join(''))
  loadUserList();
};

const userList = new Array();
userList.push({ username: "aaa", password: "0000" });
userList.push({ username: "bbb", password: "1111" });
userList.push({ username: "ccc", password: "2222" });
userList.push({ username: "ddd", password: "3333" });
userList.push({ username: "eee", password: "4444" });
userList.push({ username: "fff", password: "5555" });

const loadUserList = () => {
  const userListTbody = document.querySelector(".user-list");
  userList.map((e) => {
    userListTbody.innerHTML += `
        <tr>
            <td style="border: 1px solid black">${e.username}</td>
            <td style="border: 1px solid black">${e.password}</td>
        </tr>
        `;
  });

};
