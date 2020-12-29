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
c.id=totalComments;
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
var list = document.getElementsByClassName('comments');
console.log(list);
list.removeChild(list.childNode[id]);
allComments.splice(id-1,1);
console.log(allComments);

}

function replyComment(id)
{
console.log(allComments[id-1]);
}

function createNewComment(c)
{
  var newComment= document.createElement("P");
  newComment.innerHTML=c.comment;
  newComment.class=totalComments;
  document.getElementById('comments').appendChild(newComment);

  console.log(totalComments);
}

function addBttn(id)
{
  var del = document.createElement("BUTTON");
  del.innerHTML="Delete";
  del.value=totalComments;
  del.addEventListener("click", function(){
    return deleteComment(del.value);
  });
  document.getElementById(id).appendChild(del);
  var reply = document.createElement("BUTTON");
  reply.innerHTML= "Reply";
  reply.value=totalComments;
  reply.addEventListener("click", function ()
  {
    var replyInput= document.createElement("INPUT");
    document.getElementById(id).appendChild(replyInput);

   return replyComment(reply.value);
  });
  document.getElementById(id).appendChild(reply);
}
