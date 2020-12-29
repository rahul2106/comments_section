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
console.log(c.id);

allComments.splice(id-1,1);
document.getElementById(id).remove();
}

function replyComment(id)
{
 console.log(allComments[id-1]);
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
    var replyInput= document.createElement("INPUT");
    document.getElementById(id).appendChild(replyInput);
    return replyComment(reply.value);
  });
  document.getElementById(id).appendChild(reply);
}
