
const express = require('express');
const cors = require('cors');
const BoxSDK = require('box-node-sdk');
const boxConfig = require('./box_config.json');
const sdk = BoxSDK.getPreconfiguredInstance(boxConfig);
const Constants = require('./Constants');
const { EXPLORER_FOLDER_ID, PICKER_FOLDER_ID, RECENTS_USER_ID, UPLOAD_FOLDER_ID, EXPLORER_SCOPES, RECENTS_SCOPES, PICKER_SCOPES, UPLOADER_SCOPES, PREVIEW_SCOPES } = require('./Constants');


console.log('Starting server...')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOrigin = `http://${Constants.REACT_SERVER_HOST}:${Constants.REACT_SERVER_PORT}`;
app.use(cors(corsOrigin));

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Express app listening at http://${host}:${port}`);
});
const client = sdk.getAppAuthClient('enterprise');


app.get('/box/explorer/token-downscope', async (req, res) => {
    try {
        const downscopedToken = await client.exchangeToken(EXPLORER_SCOPES, EXPLORER_FOLDER_ID);
        console.log('Generated token: ', downscopedToken);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/explorer-recents/token-downscope', async (req, res) => {
    try {
        const userClient = sdk.getAppAuthClient('user', RECENTS_USER_ID);
        const currentUser = await userClient.users.get(userClient.CURRENT_USER_ID);
        console.log('Found current users: ', currentUser.name);
        const downscopedToken = await userClient.exchangeToken(RECENTS_SCOPES)
        console.log('Generated token: ', downscopedToken);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/picker/token-downscope', async (req, res) => {
    try {
        const downscopedToken = await client.exchangeToken(PICKER_SCOPES, PICKER_FOLDER_ID)
        console.log('Generated token: ', downscopedToken);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/uploader/token-downscope', async (req, res) => {
    try {
        const downscopedToken = await client.exchangeToken(UPLOADER_SCOPES, UPLOAD_FOLDER_ID)
        console.log('Generated token: ', downscopedToken);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})

app.get('/box/preview/token-downscope', async (req, res) => {
    try {
        const downscopedToken = await client.exchangeToken(PREVIEW_SCOPES)
        console.log('Generated token: ', downscopedToken);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(downscopedToken);
    }
    catch(error) {
        console.log('Failed to get downscoped token: ', error)
        res.status(500).send({ error: error.mesage });
    }
})