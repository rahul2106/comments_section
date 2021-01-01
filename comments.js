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
  delBtn.innerHTML = "DELETE";
  delBtn.addEventListener("click",function(){
    document.getElementById(id).remove();
  });
  document.getElementById(id).appendChild(delBtn);

  var repBtn = document.createElement("BUTTON");
  repBtn.setAttribute("id",id);
  repBtn.innerHTML = "REPLY";
  repBtn.addEventListener("click",function(){
    var div = document.createElement('div');
    div.setAttribute("id","div_"+id);
    var inp =document.createElement("INPUT");
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
