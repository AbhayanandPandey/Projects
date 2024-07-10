    var a=0,b=0,c=0;
    var prece;
    var one = document.getElementsByClassName("b11");
var two = document.getElementsByClassName("b12");
var three = document.getElementsByClassName("b13");
var four = document.getElementsByClassName("b14");
var five = document.getElementsByClassName("b15");
var six = document.getElementsByClassName("b16");
var seven = document.getElementsByClassName("b17");
var eight = document.getElementsByClassName("b18");
var nine = document.getElementsByClassName("b19");
var zero = document.getElementsByClassName("b10");
var plus = document.getElementsByClassName("b1+");
var minus = document.getElementsByClassName("b1-");
var multiply = document.getElementsByClassName("b1×");
var divide = document.getElementsByClassName("b1÷");
var dot = document.getElementsByClassName("b1.");
var textBox = document.getElementById("#result")
var equals = document.getElementsByClassName("b1=");
var allClear = document.getElementsByClassName("b1A")
var backWord = document.getElementsByClassName("b1b")
var module = document.getElementsByClassName("b1%")
var ans = document.getElementsByClassName("b1AN")
var div = document.getElementById("div1");
function fun1()
{
    div.innerHTML+="1"
}
function fun2()
{
    div.innerHTML+="2"
}
function fun3()
{
    div.innerHTML+="3"
}
function fun4()
{
    div.innerHTML+="4"
}
function fun5()
{
    div.innerHTML+="5"
}
function fun6()
{
    div.innerHTML+="6"
}
function fun7()
{
    div.innerHTML+="7"
}
function fun8()
{
    div.innerHTML+="8"
}
function fun9()
{
    div.innerHTML+="9"
}
function fun0()
{
    div.innerHTML+="0"
}
function funPlus()
{
    a = div.innerText
    div.innerHTML=null
    prece=1
}
function funMinus()
{
    a = div.innerText
    div.innerHTML=null
    prece=2
}
function funMul()
{
    a = div.innerText
    div.innerHTML=null
    prece=3
}
function funDiv()
{
    a = div.innerText
    div.innerHTML=null
    prece=4
}
function funMod()
{
    a = div.innerText
    div.innerHTML=null
    prece=5
}
function fundot()
{
    div.innerHTML+="."
}
function funAns()
{

    b = div.innerText
    if(prece==1)
    {
    c = Number(a)+Number(b)
    }
    if(prece==2)
    {
    c = Number(a)-Number(b)
    }
    if(prece==3)
    {
    c = Number(a)*Number(b)
    }
    if(prece==4)
    {
    c = Number(a)/Number(b)
    }
    if(prece==5)
    {
    c = Number(a)%Number(b)
    }
    div.innerHTML= c;
}
function funAc()
{
    div.innerHTML=""
}function funBa()
{
    div.innerHTML=div.innerHTML.substring(0,div.innerHTML.length-1)
}
function funEqual()
{
    funAns()
}
var d1 = document.getElementById("moon")
var d2 = document.getElementById("sun")

function dark()
{
    d2.style.display="none"
    d1.style.display="block"
}
function light()
{
    d1.style.display="none"
    d2.style.display="block"
}

