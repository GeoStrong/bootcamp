// -- choices.js

const multiDefault = () => {
  const elements = document.querySelectorAll('.multi-default');
  elements.forEach((el) => {
    const choices = new Choices(el, {
      searchEnabled: false,
    });
  });
};

multiDefault();

// const api_url = 'https://pcfy.redberryinternship.ge/api/teams';
// async function getTeam() {
//   const request = await fetch(api_url);
//   const response = await request.json();

//   const select = document.getElementById('#select');

//   response.data.forEach((item, i) => {
//     const template = `
//             <option id="_${i}">${item.name}</option>
//         `;
//     select.insertAdjacentHTML('beforeend', template);
//   });
// }

// getTeam();

// const api_url2 = 'https://pcfy.redberryinternship.ge/api/positions';
// async function getPosition() {
//   const request = await fetch(api_url2);
//   const response = await request.json();

//   const select1 = document.getElementById('select1');

//   response.data.forEach((item, i) => {
//     const template = `
//             <option id="_${i}">${item.name}</option>
//         `;
//     select1.insertAdjacentHTML('beforeend', template);
//   });
// }

// getPosition();
