function toggleDetails(infoId) {
    const info = document.getElementById(infoId);
    const details = info.querySelector('.esconder-detalhes');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}