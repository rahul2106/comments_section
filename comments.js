var comments={
  id:"",
  comment:"",
  reply:{}
};

var allComments=[];

function addComment(comment){

  var c= Object.create(comments);
  c.id=Math.random().toString(36).slice(2);
  c.comment= comment;
  c.reply=[];
  allComments.push(c);

  console.log(allComments);
  var uli= document.getElementById('allComments');
  uli.innerHTML='';
  createComment(allComments,'allComments');
}

function reply(comment,item){
  var r=Object.create(comments);
  r.id=Math.random().toString(36).slice(2);
  r.comment=comment;
  r.reply=[];

 item.reply.push(r);
 console.log(item);
document.getElementById("div_"+item.id).remove();
var uli = document.createElement("ul");
uli.setAttribute("id",r.id);
document.getElementById(item.id).appendChild(uli);
createComment([r],r.id);
}

function deleteComment(id)
{

}

function createComment(obj,id){
console.log(obj);
//obj= JSON.parse(localStorage.getItem("comments"));
  var ul = document.getElementById(id);
  console.log(id);
  obj.forEach((item, i) => {
    var li = document.createElement("li");
    li.setAttribute("id",item.id);
    var p = document.createElement('p');
    p.innerHTML=item.comment;
    li.appendChild(p);
    ul.appendChild(li);
    createButton(item);
    console.log(item.reply.length);
    if(item.reply.length==0){

    }
    else{
      var uli = document.createElement("ul");
      uli.setAttribute("id",item.reply.id);
      li.appendChild(uli);
      var arr= [item.reply];
      createComment(arr,item.reply.id);
    }
});
}


function createButton(item){
  var id= item.id;
  var delBtn = document.createElement("BUTTON");
  delBtn.setAttribute("id",id);
  delBtn.setAttribute("class","btn btn-outline-danger");
  delBtn.innerHTML = "DELETE";
  delBtn.addEventListener("click",function(){
    document.getElementById(id).remove();
    console.log(item);
  });
  document.getElementById(id).appendChild(delBtn);

  var repBtn = document.createElement("BUTTON");
  repBtn.setAttribute("id",id);
  repBtn.innerHTML = "REPLY";
  repBtn.addEventListener("click",function(){
    var div = document.createElement('div');
    div.setAttribute("id","div_"+id);
    div.setAttribute("class","input-group");
    var inp =document.createElement("INPUT");
    inp.setAttribute("class","form-control");
    var addBtn = document.createElement("BUTTON");
    addBtn.innerHTML= "Add";
    addBtn.addEventListener("click",function(){

      return reply(inp.value,item);
    })
    div.appendChild(inp);
    div.appendChild(addBtn);
    document.getElementById(id).appendChild(div);

  });
  document.getElementById(id).appendChild(repBtn);

}


function createHome(){
var div = document.createElement('div');
div.setAttribute("class","input-group");
document.getElementById('container').appendChild(div);

var inp= document.createElement('input');
inp.setAttribute("class","form-control");
inp.setAttribute("id","newComment");
inp.setAttribute("placeholder","Type Here..");
inp.setAttribute("aria-describedby","basic-addon1");
div.appendChild(inp);
var _btnDiv = document.createElement('div');
_btnDiv.setAttribute("class","input-group-append btnp");
div.appendChild(_btnDiv);
var btn= document.createElement('button');
btn.innerHTML= "Comment";

btn.addEventListener("click",function(){
  addComment(newComment.value);
});
_btnDiv.appendChild(btn);


}
