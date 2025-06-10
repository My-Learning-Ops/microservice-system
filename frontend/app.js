
const URL = '/api/';
const form = document.getElementById('messageForm');
const messages = document.getElementById('messages');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const msg = document.getElementById('message').value;

    await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, message: msg })
    });

    form.reset();
    loadMessages();
});

const loadMessages = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    messages.innerHTML = '';
    data.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = `<strong>${msg.user}</strong><p>${msg.message}</p>`;
        messages.appendChild(div);
    });
}

loadMessages();