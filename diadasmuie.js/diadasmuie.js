const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageDiv = document.getElementById('message');
const music = document.getElementById('music');
const gif = document.getElementById('gif');
const gif2 = document.getElementById('gif2');

yesBtn.addEventListener('click', () => {
    messageDiv.textContent = 'Feliz dia das mulheres!';

    music.currentTime = 90;
    music.play();

    gif.style.display = 'inline-block';
    gif2.style.display = 'inline-block';

    yesBtn.disabled = true;
    noBtn.disabled = true;

    showBackButton();
});

noBtn.addEventListener('click', () => {
    messageDiv.textContent = 'Então isso não é para você!';

    yesBtn.disabled = true;
    noBtn.disabled = true;

    showBackButton();
});

function showBackButton() {
    const backBtn = document.createElement('button');
    backBtn.textContent = 'Voltar';
    backBtn.style.backgroundColor = '#ccc';
    backBtn.style.color = '#000';

    messageDiv.appendChild(backBtn);

    backBtn.addEventListener('click', () => {
        messageDiv.textContent = '';

        music.pause();
        music.currentTime = 0;

        gif.style.display = 'none';
        gif2.style.display = 'none';

        yesBtn.disabled = false;
        noBtn.disabled = false;

        backBtn.remove();
    });
}