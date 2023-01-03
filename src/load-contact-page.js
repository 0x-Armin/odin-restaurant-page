const contactPage = () => {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerHTML = '';

  const header = document.createElement("h1");
  header.innerHTML = 'Contact';
  contentContainer.appendChild(header);

  const managementTeam = document.createElement("h3");
  managementTeam.innerText = "Management";
  contentContainer.appendChild(managementTeam);

  const managementTeamDeets = document.createElement('p');
  managementTeamDeets.innerHTML = '<a href="mailto:management@sabrosorestaurant.com">management@sabrosorestaurant.com</a>';
  contentContainer.appendChild(managementTeamDeets);

  const reservationTeam = document.createElement('h3');
  reservationTeam.innerText = 'Reservations/Receptionist';
  contentContainer.appendChild(reservationTeam);

  const reservationTeamDeets = document.createElement('p');
  reservationTeamDeets.innerHTML = '<a href="mailto:reservations@sabrosorestaurant.com">reservations@sabrosorestaurant.com</a>';
  contentContainer.appendChild(reservationTeamDeets);
};

export { contactPage };