function getTeamHTML(team) {
  return `
  <tr>
     <td>${team.promotion}</td>
     <td>${team.members}</td>
     <td>${team.name}</td>
     <td>
     <a href="${team.url}">open</a>
     </td>
     <td>x e</td>
 </tr>`;
}
function displayTeams(teams) {
  // transforma in html
  var teamsHTML = teams.map(getTeamHTML);

  // afisare
  document.querySelector("table tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

function submitForm(e) {
  e.preventDefault();
  var promotion = document.querySelector("input[name=promotion]").value;
  var members = document.querySelector("input[name=members]").value;
  var name = document.querySelector("input[name=name]").value;
  var url = document.querySelector("input[name=url]").value;
  var team = {
    promotion: promotion,
    members: members,
    name: name,
    url: url,
  };
  console.warn("submit", JSON.stringify(team));

  console.warn("submit", promotion, members, name, url);
}

function initEvents() {
  var form = document.getElementById("editForm");

  form.addEventListener("submit", submitForm);
}

loadTeams();
initEvents();
