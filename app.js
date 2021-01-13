window.onload = () =>{
    const screen = document.querySelector("#screen");
    const add = document.querySelector("#add");
    const list = document.querySelector(".list");
    const rmvAll = document.querySelector("#rmvAll");
    const rmvChk = document.querySelector("#rmvChk");

    const adding = () =>{
        //check if value of screen is empty
        let screenValue = screen.value.trim();
        if(screenValue === ''){
            return;
        }else{
            list.innerHTML += `
            <div id='element'>${screenValue}
            <input type='checkbox' name='chk' id='checkb'>
            </div>`;
            screen.value = '';
        }
    }
    const deletingAll = () =>{
        //remove all children of class list.
        const listDIV = document.querySelectorAll("#element");
        listDIV.forEach( elemento => {
            elemento.remove();
        })
    }
    const deleteCheck = () =>{
        const checkboxes = document.querySelectorAll('input[name="chk"]:checked');
        checkboxes.forEach( c => {
            c.parentNode.remove();
            console.log("delete checked box");
        })
    }
    add.onclick = adding;
    rmvAll.onclick = deletingAll;
    rmvChk.onclick = deleteCheck;
}