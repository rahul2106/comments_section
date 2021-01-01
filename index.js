const comments={


  id:'',
  author: '',
  timestamp:'',
  comment:'',
  reply:{}
}

var totalComments=0;
var allComments=[];

function addComment()
{
++totalComments;
var c= Object.create(comments);
c.id=Math.random().toString(36).slice(2);
c.author="Rahul";
c.comment=document.getElementById('newComment').value;
c.reply={};
console.log(c);
allComments.push(c);
console.log(allComments);
createNewComment(c);
}

function deleteComment(id)
{
 var c= allComments.find(element=>element.id===id);

allComments.splice(allComments.indexOf(c),1);
document.getElementById(id).remove();
console.log(allComments);
}


function replyComment(id)
{
var c=allComments.find(element=>element.id===id);
console.log(c);
var x;
x=addInput(id,x)

}

function createNewComment(c)
{
  var newComment= document.createElement("P");
  newComment.innerHTML=c.comment;
  newComment.setAttribute("id",c.id);
  document.getElementById('comments').appendChild(newComment);
  addBttn(newComment.id);
}

function addBttn(id)
{
  var del = document.createElement("BUTTON");
  del.innerHTML="Delete";
  del.setAttribute("id",Math.random().toString(36).slice(2));
  del.addEventListener("click", function(){
    return deleteComment(id);
  });
  document.getElementById(id).appendChild(del);
  var reply = document.createElement("BUTTON");
  reply.innerHTML= "Reply";
  reply.setAttribute("id",Math.random().toString(36).slice(2));
  reply.addEventListener("click", function ()
  {
      return replyComment(id);
  });
  document.getElementById(id).appendChild(reply);
}

function addInput(id,r)
{
  var input="<div class=""inputReply""><input type=""text"">"
  document.getElementById(id).appendChild(addBttn);
  return r;

}

function replied(id,input)
{
var x= allComments.find(element=>{
  if(element.id===id)
  {
    var c= Object.create(comments);
    c.id=Math.random().toString(36).slice(2);
    c.comment=input;
    element.reply=c;
    }
    return element;
});
console.log(x.reply);
createNewComment(x.reply);
console.log(allComments);
var element=document.getElementsByClassName("temp");
element.parentNode.removeChild(element);
}
