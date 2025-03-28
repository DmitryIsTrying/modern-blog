if (typeof structuredClone === "undefined") {
    global.structuredClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
}
