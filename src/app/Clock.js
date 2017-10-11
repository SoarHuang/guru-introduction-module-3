/**
 * A very basic clock that sits on the center of the page
 * @type {[type]}
 */
export default class Clock {
    init() {
        this.ele = document.createElement('h1');
        this.ele.classList.add('clock', 'center');

        // Because the night theme is awesome...
        document.documentElement.classList.add('night');
        document.body.appendChild(this.ele);

        this.tick();
    }

    tick() {
        const d = new Date();
        this.ele.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        setTimeout(this.tick.bind(this), 1000);
    }
}


window.clock = '1'
