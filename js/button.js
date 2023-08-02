const plus = () => {
    const resultOjb = document.getElementsByClassName("result")[0];
    let oldNum = parseInt(resultOjb.innerHTML);
    
    resultOjb.innerHTML = oldNum + 1;
}
const minus = () => {
    const resultOjb = document.querySelector(".result");
    let oldNum = parseInt(resultOjb.innerHTML);
    
    resultOjb.innerHTML = oldNum - 1;
}