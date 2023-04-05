let tbody = document.querySelector('tbody');
let addBtn = document.querySelector('.add');
let form = document.querySelector('.form-wrapper');
let saveBtn = document.querySelector('.save');
let cancelBtn =  document.querySelector('.cancel');
let mobileEle =  document.querySelector('#mobile');
let priceEle =  document.querySelector('#price');
let ramEle =  document.querySelector('#ram');
let storageEle =  document.querySelector('#storage');

let httpm =null;

let url ='https://dummyjson.com/users';

let mobiles =[];

let id=null;

let data ={};

addBtn.onclick = function(){
    httpm="POST";
    clearForm();
    form.classList.add('active')
}


cancelBtn.onclick = function(){
    form.classList.remove('active')
}

saveBtn.onclick= function(){
    data.firstName= mobileEle.value;
    data.lastName= priceEle.value;
    data.age = ramEle.value;
    data.gender = storageEle.value;
    if(httpm=="PUT"){
        data.id= id
        fetch(url + "/" + id,
            { 
                method: httpm, body: JSON.stringify(data.users), 
                headers: { "Content-type": "application/json" } 
            })
        .then(()=>{
            clearForm();
            form.classList.remove('active');
            getMobiles()
        })
        alert('Data berhasil diedit')
    } else if (
        httpm=="POST"
    ) {
        data.id= id
        fetch(url + "/add" ,
            { 
                method: httpm, body: JSON.stringify(data.users), 
                headers: { "Content-type": "application/json" } 
            })
        .then(()=>{
            clearForm();
            form.classList.remove('active');
            getMobiles()
    })
        alert('Data berhasil ditambahkan')
    }

}

function clearForm(){
    mobileEle.value =null;
    priceEle.value =null;
    ramEle.value= null;
    storageEle.value =null;
}



function getMobiles(){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        mobiles = data.users;
        updateTable();
        
    })

    
}

getMobiles();

function updateTable(){
    let data="";

    if(mobiles.length>0){
        for(i= 0;i<mobiles.length;i++){

            data+=  `<tr id="${mobiles[i]['id']}">
                        <td>${mobiles[i]['firstName']}</td>
                        <td>${mobiles[i]['lastName']}</td>
                        <td>${mobiles[i]['age']+" Years Old"}</td>
                        <td>${mobiles[i]['gender']}</td>
                        <td><button class="btn btn-primary" onclick="editMobile(event)">Edit</button></td>
                        <td><button class="btn btn-danger" onclick="deleteMobile(event)">Delete</button></td>   
                     </tr>`
        }
     tbody.innerHTML=data;
    }

}

function editMobile(e){
   form.classList.add('active');
   httpm = "PUT"
   id = e.target.parentElement.parentElement.id;
  let selectedMobile = mobiles.filter((m)=>{return m['id'] == id})[0];
  mobileEle.value= selectedMobile.firstName;
  priceEle.value = selectedMobile.lastName;
  ramEle.value = selectedMobile.age;
  storageEle.value = selectedMobile.gender;


   

}

function deleteMobile(e){
    id = e.target.parentElement.parentElement.id;
     fetch(url+"/"+id, {method:'DELETE'})
     .then(
        ()=>{
            getMobiles()
        }
     )
    alert('Data berhasil dihapus')
}