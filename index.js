const comments={
  id:'',
  author: '',
  timestamp:'',
  comment:'',
  reply:{}
}

var totalComments=0;


function add()
{++totalComments;
var c= Object.create(comments);
c.id=totalComments;
c.author="Rahul";
c.comment=document.getElementById('newComment').value;
c.reply={};
console.log(c);
createNewComment(c);
}

function createNewComment(c)
{
  var newComment= document.createElement("P");
  newComment.innerHTML=c.comment;
  document.getElementById('comments').appendChild(newComment);
  addBttn('comments');
  console.log(totalComments);

}

function del()
{
  var elems = document.getElementsByClassName('comments'),
    elem;
while(elems.length){
    elem = elems.item(0);
    elem.parentNode.removeChild(elem);
}
}



function addBttn(id)
{
  var del = document.createElement("BUTTON");
  del.innerHTML="Delete";
  del.addEventListener("click", function(){
    var elems = document.getElementsByClassName('comments'),
      elem;
    while(elems.length){
      elem = elems.item(0);
      elem.parentNode.removeChild(elem);
    }

  });
  document.getElementById(id).appendChild(del);
  var reply = document.createElement("BUTTON");
  reply.innerHTML= "Reply";
  reply.addEventListener("click", function ()
  {
    var replyInput= document.createElement("INPUT");
    document.getElementById(id).appendChild(replyInput);
    this..addBttn(id);
  });
  document.getElementById(id).appendChild(reply);

}
