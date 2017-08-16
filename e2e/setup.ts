import { startServer, stopServer } from "nativescript-dev-appium";

before("setup server", async () => {
    return await startServer();
});

after("kill server", async () => {
    return await stopServer();
});