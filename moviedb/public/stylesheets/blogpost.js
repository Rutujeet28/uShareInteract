const btn = document.getElementsByClassName("add")[0];
let tags = document.getElementsByClassName("tags");
let i = 0;
let pageitems = document.getElementsByClassName("page-item");
let close;
// btn.addEventListener('click',()=>
// {
//     console.log("Clicked");

// const c=tags.childElementCount;

// let tg="tag"+c;
//    if(tags.childElementCount<3)
//   {

//     let input=document.createElement('input');
//     input.setAttribute('name',tg)
//     tags.appendChild(input);
//   }

// })

function clicked(e) {
 
  console.log("clicked",e)
  close=e;
  tags=close.nextElementSibling.nextElementSibling;
  const c = tags.childElementCount;

  let tg = "tag" + c;
  if (tags.childElementCount < 3) {
    let input = document.createElement("input");
    input.classList.add('tagp')
    input.setAttribute("name", tg);
    tags.appendChild(input);
  }
}


// function clicked_edit(n) {
 
 
//   console.log("N",n)
//   tags=document.getElementById("tags-edit");
//   const c = tags.childElementCount;

//   let tg = "tag" + c;
//   for(let i=0;i<n;i++) {
//     let input = document.createElement("input");
//     input.setAttribute("name", tg);
//     tags.appendChild(input);
//   }
// }

function deletetag() {
  const c = tags.childElementCount;

  let tg = "tags-edit" + c;
  if (tags.childElementCount > 0) {
    tags.removeChild(tags.lastChild);
  }
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");
  console.log("check tag")

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// const currentLocation=location.href;
// var current = document.getElementsByClassName("active");

// for (var j = 0;j < pageitems.length; j++) {
// pageitems[j].addEventListener("click", function() {
// for(let i=0;i<pageitems.length;i++)
// {
//   if(pageitems[i].href==current)
//   {
//     pageitems[i].className+="active";
//   }
// }
// }
// }
// for (var j = 0;j < pageitems.length; j++) {
//   pageitems[j].addEventListener("click", function() {

//     var current = document.getElementsByClassName("active");
//     console.log("Page clicked",current.length)

//     {
//       current[0].className = current[0].className.replace(" active", "");

//     }
//     this.className += " active";

//   })
// }

const posts = document.getElementsByClassName("post");
let items;
let targetElem;

const btn1 = document.getElementsByClassName("tag");

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("click", (e) => {
    items = e.target.classList;
    targetElem = e.target;
    let validTarget = items.contains("btn") || items.contains("tag-a");
    if (!validTarget) {
      const id = targetElem.closest(".post").getAttribute("id");
     
    }
  });
}

function icounter(ele) {
  let count = parseInt(ele.innerText) || 0;
  

  count += 1;
  ele.innerText = count;
}

function dcounter(ele) {
  let count = parseInt(ele.innerText) || 0;
  count -= 1;

  ele.innerText = count;
}

const Upvotes = document.getElementsByClassName("upvote");
const Downvotes = document.getElementsByClassName("downvote");

let check;
for (let i = 0; i < Upvotes.length; i++) {
  Upvotes[i].addEventListener("click", (e) => {
    let targetELem = e.target;
    let items = targetELem.classList;
    check=targetELem;
    let id=targetELem.parentNode.parentNode.getAttribute('id');
    console.log("Post track",id);
    let downv = targetELem.parentNode.parentNode.querySelector(".downvote");
    let res = targetELem.parentNode.parentNode.querySelector("#vote-count");
    // axios.post(`/user/post/${id}/upvote`);
   

    if (items.contains("bx-upvote") && !(items.contains("bxs-upvote"))) {
      console.log("inc if")
      Upvotes[i].classList.toggle("bxs-upvote");
      icounter(res);
      //upvote and check if downvoted
      axios.post(`/user/post/${id}/upvote`).then((res)=>console.log("response",res));
      if (downv.classList.contains("bxs-downvote")) {
        downv.classList.remove("bxs-downvote");
        icounter(res); //test

      }
    } 
    else if (items.contains("bxs-upvote") && items.contains("bx-upvote")  ) {
      console.log("inc else 1")
      dcounter(res);
      //remove upvote
      axios.post(`/user/post/${id}/removeupvote`).then((res)=>console.log("response",res));
      
      Upvotes[i].classList.remove("bxs-upvote");

    }
 
    console.log("next");

  });
}

for (let i = 0; i < Downvotes.length; i++) {
  Downvotes[i].addEventListener("click", (e) => {
    let targetELem = e.target;
    let res = targetELem.parentNode.parentNode.querySelector("#vote-count");

    let items = targetELem.classList;

    let upv = targetELem.parentNode.parentNode.querySelector(".upvote");
    let id=targetELem.parentNode.parentNode.getAttribute('id');
    console.log("Post track",id);

    if (items.contains("bx-downvote") && !(items.contains("bxs-downvote"))) {
      dcounter(res);
      Downvotes[i].classList.toggle("bxs-downvote");
      console.log("if 2");
      //downvote and check for upvote
      axios.post(`/user/post/${id}/downvote`).then((res)=>console.log("response",res));
   

      if (upv.classList.contains("bxs-upvote")) {
        upv.classList.remove("bxs-upvote");
        dcounter(res);
      }
    } else if (items.contains("bxs-downvote") && items.contains("bx-downvote") ) {
      console.log("else 2")
      icounter(res);
      Downvotes[i].classList.remove("bxs-downvote");

      //remove downvote
      axios.post(`/user/post/${id}/removedownvote`).then((res)=>console.log("response",res));
    }
  });
}


function display(input) {
  if (input.files && input.files[0]) {
     var reader = new FileReader();
     reader.onload = function(event) {
        $('#preview').attr('src', event.target.result);
        let pic=document.getElementsByClassName('remove-pic')[0];
        pic.style.display="block"
     }
     reader.readAsDataURL(input.files[0]);
  }
}



function removeprev_post() {
  // if (input.files && input.files[0]) {
    //  var reader = new FileReader();
    //  reader.onload = function(event) {
        $('#preview').attr('src', "");
        $('#editImage').attr('value','false');
        let pic=document.getElementsByClassName('remove-pic')[0];
        pic.style.display="none";
        console.log("Remove prev post")

     
    //  reader.readAsDataURL=" ";
    //  input.files[0]=""
    //  $(".filelabel .title").text(" ");
    document.getElementById("FileInput").value=null;
    document.getElementsByClassName("title")[0].innerHTML="<i class='bx bx bx-image-alt'></i>";
    document.getElementsByClassName("title")[0].style.color="black";
    document.getElementsByClassName("filelabel")[0].style.border="none";

  // }
}



function display_edit(input) {
  if (input.files && input.files[0]) {
     var reader = new FileReader();
     reader.onload = function(event) {
       console.log("display edit modal");
       let pic=document.getElementsByClassName('remove-prev-pic')[0];
       console.log("pic selected",pic)
       pic.style.display="block"
     
        $('#preview_edit').attr('src', event.target.result);
        $('#editImage').attr('value','true');
       
       
     }
     reader.readAsDataURL(input.files[0]);
  }
}



$("#FileInput").change(function() {
  console.log("Jquery test");
  display(this);
});

$("#FileInput_edit").change(function() {
  console.log("Jquery");
  display_edit(this);
});

let post;
// function showEditModal(id)
// {

//   console.log("CAlled",id);
//   axios.get(`/post/${id}/getdet`).then((res)=>{

//     console.log("response",res.data)
//     clicked_edit(res.data.tags.length)
//     post=res.data;
//     document.querySelector('#edit-form').action=`/user/post/${id}?_method=PUT`;
//     document.querySelector("#e-title").value = post.title;
//     // document.querySelector("#e-image").src = post.image.url;
//     document.querySelector("#e-text").value = post.text;
//     document.querySelector(".preview").src=post.image.url;
//     // console.log("Post",post.text)
 

//   });


// }








$("#FileInput").on('change',function (e) {
  var labelVal = $(".title").text();
  var oldfileName = $(this).val();
      fileName = e.target.value.split( '\\' ).pop();

      if (oldfileName == fileName) {return false;}
      var extension = fileName.split('.').pop();

  if ($.inArray(extension,['jpg','jpeg','png']) >= 0) {
      $(".filelabel i").removeClass().addClass('fa fa-file-image-o');
      $(".filelabel i, .filelabel .title").css({'color':'#208440'});
      $(".filelabel").css({'border':' 2px solid #208440'});
  }
  else if(extension == 'pdf'){
      $(".filelabel i").removeClass().addClass('fa fa-file-pdf-o');
      $(".filelabel i, .filelabel .title").css({'color':'red'});
      $(".filelabel").css({'border':' 2px solid red'});

  }
else if(extension == 'doc' || extension == 'docx'){
  $(".filelabel i").removeClass().addClass('fa fa-file-word-o');
  $(".filelabel i, .filelabel .title").css({'color':'#2388df'});
  $(".filelabel").css({'border':' 2px solid #2388df'});
}
  else{
      $(".filelabel i").removeClass().addClass('fa fa-file-o');
      $(".filelabel i, .filelabel .title").css({'color':'black'});
      $(".filelabel").css({'border':' 2px solid black'});
  }

  if(fileName ){
      if (fileName.length > 10){
          $(".filelabel .title").text(fileName.slice(0,4)+'...'+extension);
      }
      else{
          $(".filelabel .title").text(fileName);
      }
  }
  else{
      $(".filelabel .title").text(labelVal);
  }
});






function sharebtn(e,id)
{

  const sstatus=e.nextElementSibling;
  let clists;
  clists=e.classList;
  if(clists.contains('bx-share'))
  {
 
e.classList.add('bxs-share');
e.classList.remove('bx-share');
 sstatus.innerText="Shared";

 axios.post(`/user/shared/${id}`).then((res)=>console.log("response",res));
 console.log("Shared js");
  }
  else if(clists.contains('bxs-share'))
  {
 
e.classList.add('bx-share');
e.classList.remove('bxs-share');
   sstatus.innerText="Share";
   axios.post(`/user/unshared/${id}`).then((res)=>console.log("response",res));
   console.log("unShared js");


  }

  

}


let data;
async function getcricScore()
{
  console.log("api called");
  

  const config = {
    method: 'get',
    url: 'https://api.cricapi.com/v1/currentMatches?apikey=d9fe92c0-1a01-4608-afbd-4dde8e0b9858&offset=0'
}

let res = await axios(config);

data=res.data.data;

const par=document.getElementById('scorecard');
if(par) par.innerHTML="";
const tot=data.length;
for(let i=0;i<tot;i++)
{
const div1 = document.createElement('div');
div1.classList.add("match-score");
const div2 = document.createElement('div');
const p1 = document.createElement('p');
p1.classList.add("match-name");
p1.innerText=data[i].name;

const p2 = document.createElement('p');
const p3 = document.createElement('p');
p3.classList.add("match_status");

p2.classList.add("score");


let scores=data[i].score;

let mscore=""
let team=""
for(let i=0;i<scores.length ;i++)
{
 team="";
  let sc=scores[i];
  let s=sc.r+"/"+sc.w +"("+sc.o+")"+" ";

  let a=sc.inning.replace("Inning","");
  let b=a.replace("1","");
   b=b.replace("2","");
  let f=b.split(" ");


  for(let i=0;i<f.length;i++)
  {
    if(f[i].length!=0)
    {
      team+=f[i][0];
    }
  }
  if(team.length==1)
  {
    team=b.slice(0,4).toUpperCase();
  }



  mscore+=team;
  mscore+=" "
  mscore+=s;
  if(sc.inning.includes("1")) mscore+="1st Inning"
  else if(sc.inning.includes("2")) mscore+="2nd Inning"
  mscore+="\n"
  


}

// p2.innerText+=team;
p2.innerText+=" " +mscore;
p3.innerText=data[i].status;



div2.appendChild(p1);

div2.appendChild(p2);
div2.appendChild(p3)
div1.appendChild(div2);

if(par) par.appendChild(div1);
}





}
getcricScore();

function printeg()
{
  console.log("check")
}
printeg();
// setInterval(printeg, 0.1 * 60 * 1000);
setInterval(getcricScore, 10000 * 60 * 1000);