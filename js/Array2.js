window.onload = () => {
  loadBookList();
};

const bookList = new Array();

bookList.push({
  bookname: "달과 6펜스",
  author: "서머싯 몸",
  publication: "민음사",
});
bookList.push({
  bookname: "데미안",
  author: "헤르만 헤세",
  publication: "민음사",
});
bookList.push({
  bookname: "호밀밭의 파수꾼",
  author: "제롬 샐린저",
  publication: "민음사",
});
bookList.push({
  bookname: "변신",
  author: "프란츠 카프카",
  publication: "민음사",
});
bookList.push({
  bookname: "구운몽",
  author: "김만중",
  publication: "천재교육",
});
bookList.push({
  bookname: "관동별곡",
  author: "정철",
  publication: "ebs",
});

const loadBookList = () => {
  const olList = document.getElementsByClassName("book-list")[0];
  bookList.map((e) => {
    olList.innerHTML += `
    <li>
    <span>${e.bookname}</span>
    <span>${e.author}</span>
    <span>${e.publication}</span>
    </li>
    `;
  });
};

const addBookList = () => {
  const bookname = document.getElementsByTagName("input")[0].value;
  const author = document.getElementsByTagName("input")[1].value;
  const publication = document.getElementsByTagName("input")[2].value;
  const olList = document.getElementsByClassName("book-list")[0];
  olList.innerHTML += `
        <li>
        <span>${bookname}</span>
        <span>${author}</span>
        <span>${publication}</span>
        </li>
        `;
  window.alert("추가됨");
  document.getElementsByTagName("input")[0].value = "";
  document.getElementsByTagName("input")[1].value = "";
  document.getElementsByTagName("input")[2].value = "";
};
