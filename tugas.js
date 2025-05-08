// Ambil elemen
const form = document.getElementById('form-tugas');
const daftarTugas = document.getElementById('daftar-tugas');

// Simpan tugas di array (hanya selama web dibuka)
let tugasList = [];

function renderTugas() {
  daftarTugas.innerHTML = '';
  if (tugasList.length === 0) {
    daftarTugas.innerHTML = '<li style="text-align:center;color:#888;">Belum ada tugas 🎉</li>';
    return;
  }
  tugasList.forEach((tugas, idx) => {
    const li = document.createElement('li');
    const info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = `<strong>${tugas.nama}</strong><span>${tugas.mapel}</span><span class="deadline">Deadline: ${tugas.deadline}</span>`;
    const btn = document.createElement('button');
    btn.textContent = 'Selesai';
    btn.onclick = () => {
      tugasList.splice(idx, 1);
      renderTugas();
    };
    li.appendChild(info);
    li.appendChild(btn);
    daftarTugas.appendChild(li);
  });
}

form.onsubmit = function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama-tugas').value.trim();
  const mapel = document.getElementById('mapel-tugas').value.trim();
  const deadline = document.getElementById('deadline-tugas').value;
  if (!nama || !mapel || !deadline) return;
  tugasList.push({ nama, mapel, deadline });
  renderTugas();
  form.reset();
};

// Render awal
renderTugas(); 