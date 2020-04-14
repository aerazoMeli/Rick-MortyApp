module.exports = {
    setupFiles: ["./src/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy"
    },
    snapshotSerializers: ["enzyme-to-json/serializer"],
};