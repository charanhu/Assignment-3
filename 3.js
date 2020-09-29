var grow=true;
function fnts()
{
fntsize=document.getElementById("p1").style.fontSize;
document.getElementById("p1").style.color="red";
ifntsize=parseInt(fntsize);
window.setTimeout(fntGS,100,ifntsize);
}
function fntGS(ifs)
{
if(grow)
{
ifs=ifs+1;
if(ifs<=50)
{
document.getElementById("p1").style.fontSize=ifs+"pt";
}
else
{
grow=false;
document.getElementById("p1").style.color="blue";
document.getElementById("p1").innerHTML="TEXT-SHRINKING";
}
}
else
{
ifs=ifs-1;
if(ifs<5)
return;
document.getElementById("p1").style.fontSize=ifs+"pt";
}
window.setTimeout(fntGS,100,ifs);
}