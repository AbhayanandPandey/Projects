const getQut = async ()=>
{
const API = "https://type.fit/api/quotes"
try {
    var ran = Math.floor((Math.random()*15)-1)
    var x11 = document.getElementById("editTxt")
    var x12 = document.getElementById("editAut")
    let data  = await fetch(API);
    let reldata = await data.json();
    let  txtt = reldata[ran].text
    let reldata1 = reldata[ran].author;
    let au = reldata1.length;
    let awjcjd =(reldata1).split("",au -10)
    let autt = awjcjd.join("");
    x11.innerHTML=txtt;
    x12.innerHTML="By: "+autt
} catch (error) {
    console.log(error)
}
}
getQut();
document.getElementById("btnn").addEventListener('click',()=>
{
    getQut()
}
)