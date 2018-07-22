/*function Loadjson(file,callback){
  var x= new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState === 4 && x.status == "200")
    {
      callback(x.responseText);
    }
  };
  x.send(null);
}
  Loadjson("data.json",function(text)
  {
    var data = JSON.parse(text);
    console.log(data);
    basics(data.details);
    basics1(data.carrer);
    education(data.education);
    keyskills(data.keyskills);
    Achievements(data.Achievements);

  })*/

  function loadjson(file)
  {
    return new Promise((resolve,reject)=>{
      return fetch(file).then(response=>{
        if(response.ok){
          resolve(response.json());
        }else{
          reject(new Error('error'));
        }
      })
    })
  }

  var file=loadjson("data.json");
  file.then(data=>{
    console.log(data);
    basics(data.details);
    basics1(data.carrer);
    education(data.education);
    keyskills(data.keyskills);
  }
  )
  var child1=document.querySelector(".child1");
  var child2=document.querySelector(".child2");
  function basics(det){
    var image= document.createElement("img");
    image.src=det.image;
    child1.appendChild(image);

    var name= document.createElement("h3");
    name.textContent = det.name;
    child1.appendChild(name);

    var phoneno1= document.createElement("h3");
    phoneno1.textContent = det.phoneno;
    child1.appendChild(phoneno1);

    var email= document.createElement("a");
    email.href = "mailto:phani@gmail.com";
    email.textContent=det.email;
    child1.appendChild(email);

    var add= document.createElement("h3");
    add.textContent = "Address";
    child1.appendChild(add);

    var add1= document.createElement("p");
    add1.textContent=det.Address;
    child1.appendChild(add1);

      var hr= document.createElement("hr");
      child1.appendChild(hr);
}
  function basics1(det1){


    var add3= document.createElement("h2");
    add3.textContent = "CarrerObjective";
    child2.appendChild(add3);


    var ca=document.createElement("p");
    ca.textContent=det1.info;
    child2.appendChild(ca);


    var hr1= document.createElement("hr");
    child2.appendChild(hr1);
  }
  function education(edu){
    var edu1=document.createElement("h4");
    edu1.textContent = "Education Qualifications";
    child2.appendChild(edu1);

    var hr2= document.createElement("hr");
    child2.appendChild(hr2);

    for(i=0;i<edu.length;i++){
      var deg=document.createElement("h4");
      deg.textContent=edu[i].degree;
      child2.appendChild(deg);


      var ul=document.createElement("ul");
      var li=document.createElement("li");
      li.textContent=edu[i].institute;
      ul.appendChild(li);
      child2.appendChild(ul);

      var li2=document.createElement("li");
      li2.textContent=edu[i].date;
      ul.appendChild(li2);
      child2.appendChild(ul);
    }
}
  function keyskills(key){
    var key1=document.createElement("h4");
    key1.textContent = "Technical Skills";
    child2.appendChild(key1);

    var hr3= document.createElement("hr");
    child2.appendChild(hr3);


      var tabledata=document.createElement("table");
      tabledata.border="1";
      child2.appendChild(tabledata);

      tabledata1="";

      for(i=0;i<key.length;i++)
      {
        tabledata1+="<tr><td>"+key[i].title+"</td><td>"+key[i].info+"</td></tr>";

      }
      tabledata.innerHTML = tabledata1;

}

function Achievements(ach){
  var key2=document.createElement("h4");
  key2.textContent = "Achievements";
  child2.appendChild(key2);

  var ul=document.createElement("ul");
  var li=document.createElement("li");
  li.textContent=ach.one;
  ul.appendChild(li);

  var li2=document.createElement("li");
  li2.textContent=ach.two;
  ul.appendChild(li2);

  var li3=document.createElement("li");
  li3.textContent=ach.three;
  ul.appendChild(li3);
  child2.appendChild(ul);
}
