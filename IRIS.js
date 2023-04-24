const clubFilter = document.getElementById('club-filter');
const events = document.querySelectorAll('.event');

clubFilter.addEventListener('change', () => {
  const selectedClub = clubFilter.value;
  events.forEach(event => {
    const eventClub = event.querySelector('.event-club').textContent;
    if (selectedClub == '' || selectedClub == eventClub) {
      event.style.display = 'block';
    } else {
      event.style.display = 'none';
    }
  });
});





