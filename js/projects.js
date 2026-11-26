// Data proyek dimuat dari JSON agar konten terpisah dari tampilan.
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.querySelector('#project-list');
  const filters = document.querySelector('#filters');
  if (!container || !filters) return;
  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) throw new Error('Data proyek tidak dapat dimuat.');
    const projects = await response.json();
    container.innerHTML = projects.map((project, index) => `
      <article class="project-card" data-category="${project.category}">
        <div class="project-visual ${project.visual}" style="background-image: linear-gradient(180deg, #10110f10, #10110f88), url('${project.image}');">
          <span>${String(index + 1).padStart(2, '0')}</span><b>${project.artText}</b>
        </div>
        <div class="project-meta"><span>${project.type}</span><span>${project.year}</span></div>
        <h3>${project.title}</h3><p>${project.description}</p>
      </article>`).join('');
    filters.addEventListener('click', event => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      filters.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const selected = button.dataset.filter;
      container.querySelectorAll('.project-card').forEach(card => {
        card.hidden = selected !== 'all' && card.dataset.category !== selected;
      });
    });
  } catch (error) {
    container.innerHTML = `<p class="small-note">Konten proyek belum bisa dimuat. Jalankan website melalui local server, bukan membuka file langsung.</p>`;
    console.error(error);
  }
});
