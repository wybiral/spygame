function shuffle(rng, lst) {
    let i = lst.length;
    while (--i > 0) {
        const j = (rng.quick() * (i + 1)) | 0;
        const x = lst[j];
        lst[j] = lst[i];
        lst[i] = x;
    }
}

function stat() {
    const rng = new Math.seedrandom(1234);
    const n = 16;
    const lst = [];
    for (let i = 0; i < n; i++) {
        lst.push(0);
    }
    for (let i = 0; i < 1000000; i++) {
        lst[(rng.quick() * n) | 0] += 1;
    }
    console.log(lst);
}

class App {
    constructor(players, magic, player) {
        this.players = players;
        this.magic = magic;
        this.rng = new Math.seedrandom(magic);
        this.player = player;
        this.game = 0;
        this.main = document.querySelector('main');
    }
    newGame() {
        this.game += 1;
        document.querySelector('#game-number').innerText = this.game;
        shuffle(this.rng, LOCATIONS);
        const locations = LOCATIONS.slice(0, 16);
        const location = locations[0];
        shuffle(this.rng, locations);
        shuffle(this.rng, location.roles);
        const roles = location.roles.slice(0, this.players - 1);
        roles.push('Spy');
        shuffle(this.rng, roles);
        const role = roles[this.player - 1];
        document.querySelectorAll('main > section').forEach(x => {
            x.style.display = 'none';
        });
        let el;
        if (role == 'Spy') {
            el = document.querySelector('main > #spy');
        } else {
            el = document.querySelector('main > #player');
            document.querySelector('#player-role').innerText = role;
            document.querySelector('#player-location').innerText = location.location;
        }
        const locEl = el.querySelector('.locations');
        locEl.innerHTML = '';
        for (let i = 0; i < locations.length; i++) {
            const e = document.createElement('div');
            const e2 = document.createElement('div');
            e.appendChild(e2)
            e2.innerText = locations[i].location;
            locEl.appendChild(e);
        }
        el.style.display = 'inline';
    }
}

window.onload = () => {
    const setup = document.querySelector('#setup');
    const setupStart = document.querySelector('#setup-start');
    const setupPlayers = document.querySelector('#setup-players');
    const setupMagic = document.querySelector('#setup-magic');
    const setupPlayer = document.querySelector('#setup-player');
    setupStart.onclick = evt => {
        const players = setupPlayers.value;
        const magic = setupMagic.value;
        const player = setupPlayer.value;
        const app = new App(players, magic, player);
        // TODO: validate inputs
        document.querySelector('#next-game').onclick = evt => {
            app.newGame();
        };
        document.querySelector('footer').style.display = 'block';
        app.newGame();
    };
};