const loginUrl = 'http://localhost:3001/users/login';

async function login(email, password) {
    try {
        const response = await fetch(loginUrl, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ email, password })
        });

        const token = await response.json();

        localStorage.setItem('userToken', `Bearer ${token}`);
    } catch (err) {
        console.log({ err })
        debugger
    }
}

export default login;