export class NodeEventGenerator {
    constructor() {
        this.nodeEvents = {};
        this.nodeTriggers = {};
    }
    connect(nodeEvent, origin, callback) {
        if (!(nodeEvent in this.nodeEvents))
            this.nodeEvents[nodeEvent] = [];
        if (this.nodeEvents[nodeEvent].indexOf(origin) == -1) {
            this.nodeEvents[nodeEvent].push(origin);
        }
        if (!(nodeEvent in origin.nodeTriggers))
            origin.nodeTriggers[nodeEvent] = [];
        origin.nodeTriggers[nodeEvent].push(callback);
    }
    trigger(nodeEvent, data = {}) {
        if (nodeEvent in this.nodeEvents) {
            for (let origin of this.nodeEvents[nodeEvent]) {
                if (nodeEvent in origin.nodeTriggers) {
                    for (let callback of origin.nodeTriggers[nodeEvent]) {
                        callback(origin, data);
                    }
                }
            }
        }
    }
}
//# sourceMappingURL=nodeEventGenerator.js.map