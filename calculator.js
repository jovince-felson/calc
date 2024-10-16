function cancelclick()
{
  location.href="calc.html";
}
function plusclick()
{
var fn=document.getElementById("fn").value
fn=parseInt(fn);


var sn=document.getElementById("sn").value
sn=parseInt(sn);

result.value=fn+sn;
}

function minusclick(){
  var fn=document.getElementById("fn").value
  fn=parseInt(fn);

  var sn=document.getElementById("sn").value
  sn=parseInt(sn);

  result.value=fn-sn;
}
function divclick(){
  var fn=document.getElementById("fn").value
  var fn=parseFloat(fn);

  var sn=document.getElementById("sn").value
  var sn=parseFloat(sn);

  result.value=fn/sn;
}
function modclick(){
  var fn=document.getElementById("fn").value
  var fn=parseFloat(fn);

  var sn=document.getElementById("sn").value
  var sn=parseFloat(sn);

  result.value=fn%sn;
}
