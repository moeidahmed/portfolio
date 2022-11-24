function userdata() {
  let xhttp = new XMLHttpRequest();
  let url = "data.json";
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      let reqdata = data.Info;
      console.log(reqdata);
      document.getElementById("name").innerText = reqdata.name;
      document.getElementById("description").innerText = reqdata.description;
      document.getElementById("views").innerText = reqdata.views;
      document.getElementById("active").innerText = reqdata.active;
      document.getElementById("respond").innerText = reqdata.respond;
      document.getElementById("about").innerText = reqdata.about;
      document.getElementById("image").innerHTML = `<img 
      src="${reqdata.image}"
      class="w-60 h-60 border border-white border-4 rounded-full absolute -bottom-10 left-20"
      />`;
      let skill = reqdata.skills;
      for (let i = 0; i < skill.length; i++) {
        console.log(skill[i]);
        document.getElementById("skill").innerHTML += `<button
        class="bg-gray-600 hover:bg-teal-700 text-white  py-2 px-4 m-1 rounded-full "
        >${skill[i]}</button>`;
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
