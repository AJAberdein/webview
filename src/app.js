const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const axios = require('axios').default;

const clientId = "";
const merchantId = "";
const userId = "";
const urlPath = ""

app.get('/', (req, res) => res.send('Welcome to Mini-Programs!'))

app.get("/app", (req, res) => {
    res.sendFile(path.join(__dirname, "./app.html"));
});

app.get("/health", async (req, res) => {

    const headers = {
        "Content-Type": "application/json",
        "client-id": clientId,
        "request-time": "2022-02-02T09:36:22.501+02:00",
        "signature": `algorithm=RSA256, keyVersion=1, signature=test`,
    };

    const body = {
        clientId: clientId,
        userId: userId,
        scopes: "auth_user,NOTIFICATION_INBOX"
    };


    const options = {
        method: "POST",
        url: urlPath,
        headers,
        data: body,
    };

    let response = null;
    try {
        response = await axios(options);
    } catch (e) {
        console.error("FAILED")
        console.error(e.message);
    }

    res.send("success");
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
