const comments={
  author: '',
  timestamp:'',
  comment:'',
  reply:{}
}

var c = Object.create(comments)
c.author="Rahul";
c.timestamp='2020-02-11'


function add()
{
var para=document.getElementById('newComment').value;
console.log(para);
var newComment= document.createElement("P");
console.log(newComment);
newComment.innerHTML=para;
document.getElementById('comments').appendChild(newComment);
addBttn('comments');
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
  document.getElementById(id).appendChild(del);
  var reply = document.createElement("BUTTON");
  reply.innerHTML= "Reply";
  document.getElementById(id).appendChild(reply);
}
