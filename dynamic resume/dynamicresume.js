// XML http request
function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    // the following line denotes that our data is in json file
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4 && xhr.status===200){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
loadjson("dynamicresume.json",function(text){
    var d = JSON.parse(text);
    console.log(d);
    getdetails(d.block1);
    extradetails(d.block2);
})
main1=document.querySelector(".b1");
main2=document.querySelector(".b2");
var im = document.createElement("img");
im.setAttribute("src","image.png");
main1.appendChild(im);
function getdetails(a){
var l=document.createElement("p");
l.textContent=""
for (let i = 0; i < a.add.length; i++) {
   l.innerHTML=l.innerHTML+a.add[i] + "<br>";  
}

var table=document.createElement("table");
var row="";
row += "<tr><td><b>Name:<b></td><td>"+a.name+"</td></tr>"+
"<tr><td><b>Date of Birth:<b></td><td>"+a.dob+"</td></tr>"+
"<tr><td><b>Phone Number:<b></td><td>"+a.phno+"</td></tr>"+
"<tr><td><b>email:<b></td><td>"+a.mail+"</td></tr>"+
"<tr><td><b>Address:<b></td><td>"+l.innerHTML+"</td></tr>";
table.innerHTML=row;
main1.appendChild(table);
}
function extradetails(b){
    main2.appendChild(document.createElement("hr"));
    var h=document.createElement("h2");
    h.textContent="Career Objective";
    main2.appendChild(h);
    var co=document.createElement("p");
    co.textContent=b.co;
    main2.appendChild(co);
    main2.appendChild(document.createElement("hr"));
    var edq=document.createElement("h2");
    edq.textContent="Educational Qualifications";
    main2.appendChild(edq);
    var table = document.createElement("table");
var row ="";
row="<tr><th>"+"Sno"+"</th><th>"+"Education"+"</th><th>"+"Place of study"+"</th><th>"+"Year of study"+"</th><th>"+"Percentage"+"</th></tr>";
for (var i = 0; i < b.edq.length; i++) {
    row += "<tr><td>"+b.edq[i].sno
    +"</td><td>"+b.edq[i].edu
    +"</td><td>"+b.edq[i].pos
    +"</td><td>"+b.edq[i].yos
    +"</td><td>"+b.edq[i].per+"</td></tr>";
}
table.classList.add("g");
table.innerHTML=row;
main2.appendChild(table);
main2.appendChild(document.createElement("hr"));
var q=document.createElement("h2");
    q.textContent="Technical Skills";
    main2.appendChild(q);
var ul=document.createElement("ul");
for (var i = 0; i < b.tech.length; i++) {
    var li=document.createElement("li");
    li.textContent=b.tech[i];
    ul.appendChild(li);
}
main2.appendChild(ul);
main2.appendChild(document.createElement("hr"));
var h1=document.createElement("h2");
    h1.textContent="Hobbies";
    main2.appendChild(h1);
    var c=document.createElement("p");
    c.textContent=b.Hobbies;
    main2.appendChild(c);
    main2.appendChild(document.createElement("hr")); 
}

