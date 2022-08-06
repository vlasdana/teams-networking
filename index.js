function displayTeams(teams) {
  //   transorma in html
  var teamsHTML = "";
  teams.forEach(function (team) {
    teamsHTML += `
     <tr>
        <td>${team.promotion}</td>
        <td>${team.members}</td>
        <td>${team.name}</td>
        <td>
        <a href="${team.url}">open</a>
        </td>
        <td>x e</td>
    </tr>`;

    // afisare
    document.querySelector("table tbody").innerHTML = teamsHTML;
  });
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

loadTeams();
