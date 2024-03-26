// How to create a simple event emitter using Map() value:key array
// https://javascript.plainenglish.io/building-a-simple-event-emitter-in-javascript-f82f68c214ad
export class Events {
    constructor() {
        // Array?
        this.eventMaps = new Map();
    }
    on(name, callback) {
        if (!this.eventMaps.has(name)) {
            this.eventMaps.set(name, callback);
        }
    }
    emit(name) {
        if (this.eventMaps.has(name)) {
            // Using setTimeout in Javascript: https://masteringjs.io/tutorials/node/sleep
            setTimeout(() => {
                let callback = this.eventMaps.get(name);
                callback();
            }, 10);
        }
    }
}
//# sourceMappingURL=EventEmitter.js.map