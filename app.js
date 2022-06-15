const list = [];
function myFunc() {
  const danhapvao = document.getElementById("nhapvao").value;
  if(danhapvao.length === 0) {
    alert('Không Có gì mà cũng thêm à?')
  } else{
    Map();
    document.getElementById("nhapvao").value = "";
  }
  
}

function Test(index) {
  console.log(index);
  if (index > -1) {
    list.splice(index, 1); // 2nd parameter means remove one item only
  }
  Map();

}

window.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("myBtn").click();
  }
});

function deleteAll(){
    list.length = 0
    Map();
}

function Map(){
    document.getElementById("test1").innerHTML = list
    .map(
      (currElement, index) => `
        <div style='padding: 10px;margin-bottom: 30px ;border: 1px solid #000; display: flex; justify-content: space-between'> <div> ${currElement}  </div> <button style:'margin-left: 10px' onclick="Test(${index})"> X </button> </div>
    `
    )
    .join("");
}