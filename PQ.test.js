const PQ = require('./PQ.js');


class PQNode
{
    constructor(priority, data) {
        this.priorityLevel = priority;
        this.data = data;
    }
}