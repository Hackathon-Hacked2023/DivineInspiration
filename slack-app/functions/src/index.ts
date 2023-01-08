import * as functions from "firebase-functions";

export const tonetellerBot = functions.https.onRequest((request, response) => {
    const {challenge} = request.body;
    response.send({challenge});
    });