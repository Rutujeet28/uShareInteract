function showEditModal(id)
{

  console.log("CAlled",id);
  axios.get(`/post/${id}/getdet`).then((res)=>{

    console.log("response",res.data)
    clicked_edit(res.data.tags.length,res.data.tags)
    let post=res.data;
    document.querySelector('#edit-form').action=`/user/post/${id}?_method=PUT`;
    document.querySelector("#e-title").value = post.title;
    // document.querySelector("#e-image").src = post.image.url;
    document.querySelector("#e-text").value = post.text;
    document.querySelector(".preview").src=post.image.url;
    // console.log("Post",post.text)
 

  });


}




let checks;
function clicked_edit(n,alltags) {
 
 
    console.log("N",n)
   let tags=document.getElementById("tags-edit");
   check=tags;
    const c = tags.childElementCount;
  
    
    
    for(let i=0;i<n;i++) {
      let input = document.createElement("input");
      input.classList.add('tagp')
      let tg = "tag" + i;
      input.setAttribute("name", tg);
      input.value=alltags[i];
      
      tags.appendChild(input);
    }
  }


  
function add_tags_edit(n) {
 
 
  console.log("N",n)
 let tags=document.getElementById("tags-edit");
  const c = tags.childElementCount;

  let tg = "tag" + c;
  if(c<3)
  {
  for(let i=0;i<n;i++) {
    let input = document.createElement("input");
    input.classList.add('tagp')
    input.setAttribute("name", tg);
    
    tags.appendChild(input);
  }
}
}


  function deletetag_edit() {
    let tags=document.getElementById("tags-edit");
    const c = tags.childElementCount;
  
    let tg = "tag" + c;
    if (tags.childElementCount > 0) {
      tags.removeChild(tags.lastChild);
    }
  }