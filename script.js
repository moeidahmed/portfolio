function userdata() {
  let xhttp = new XMLHttpRequest();
  let url = "data.json";
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      var reqdata = data.Info;
      document.getElementById("name").innerText = reqdata.name;
      document.getElementById("description").innerText = reqdata.description;
      document.getElementById("about").innerText = reqdata.about;
      document.getElementById("image").innerHTML = `<img 
      src="${reqdata.image}"
      class="w-48 h-48  border border-white border-4 rounded-full absolute -bottom-10 left-20"
      />`;
      let edu = reqdata.education;
      for (let i = 0; i < edu.length; i++) {
        const element = edu[i];
        console.log(element);
        let education = (document.getElementById(
          "edu"
        ).innerHTML += `<div><div><b>${element.degree}</b></div>
        <div>${element.organization}</div>
        <div >${element.year}</div></div><br>`);
      }
      let skill = reqdata.skills;
      for (let i = 0; i < skill.length; i++) {
        let name = skill[i].name;
        let more = skill[i].more;
        document.getElementById(
          "skill"
        ).innerHTML += `<button onclick="moreInfo('${name}','${more}')"
        class="bg-blue-700 hover:bg-blue-900 text-white  py-2 px-4 m-1 rounded-full "
        >${name}</button>`;
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function moreInfo(n, a) {
  document.getElementById("more").innerHTML = `<b>${n}</b><br> ${a}`;
}
