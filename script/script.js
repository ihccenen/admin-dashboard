function filterProjects(e) {
  const text = searchbar.value.split(' ').join('').toLowerCase();
  const regex = new RegExp('^' + text, 'g');

  projects.forEach((card) => {
    const cardTitle = card.textContent
      .toLowerCase()
      .split('\n')
      .filter((str) => {
        return /\S/.test(str);
      })
      .map((str) => str.trim())
      .splice(0, 1)
      .join('');

    if (regex.test(cardTitle)) {
      card.style.display = 'grid';
    } else {
      card.style.display = 'none';
    }
  });
}

const searchbar = document.querySelector('#search-bar');
const projects = Array.from(document.querySelectorAll('.card'));

searchbar.addEventListener('keyup', filterProjects);
