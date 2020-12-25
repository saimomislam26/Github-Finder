//define ui
let find = document.querySelector('#find');
let search = document.querySelector('#addname');
let ui = new Ui();

//event listener
find.addEventListener('click',getprofile);



//function
function getprofile(){
    let text = search.value;
    if(text != ''){
        
        fetch(`https://api.github.com/users/${text}`)
        .then(res => res.json())
        .then(data => {
            if(data.message== 'Not Found'){
                ui.showalert("User Not Found","error");
            }
            else{
                ui.showprofile(data);
            }
        })
    }
    else{
        ui.showalert('fill up the iput field','error');
    }
}