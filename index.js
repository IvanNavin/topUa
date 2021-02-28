// const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImMxNGNkMDU2LTA1Y2YtNDdjMi1iMmZlLTQ5MGE0OGU4NDJlYiIsImlhdCI6MTYxNDQ4NjUyMCwic3ViIjoiZGV2ZWxvcGVyL2NkODFjNzU3LTgxZmUtOGE1MC1hOTA1LWQyMmM4NGVjMDI2MSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ny44Ny40MS4xNjAiLCI3Ny44Ny40MS4xODEiXSwidHlwZSI6ImNsaWVudCJ9XX0.Y5UzyLVmae4u-UW8cvqof-rRSTK-78hJ30MYpshlWt3oUH4LupfPGfo3SvheeOB2QKWHAHZQN1T5lEueZs7oLw';
// async function fn () {
//     const url = 'https://api.clashroyale.com/v1/cards';
//     const options = {
//         headers: {
//             Accept: 'application/json',
//             authorization: token
//         }
//     };
//     fetch(url, options)
//         .then(response => response.json())
//         .then(resp => console.log(resp));
// }
//
// fn();
// Import the package
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZhMGZiM2Y2LWNkY2MtNGIyZS1hNWRlLTg4YmQ3NTJkNDU0ZSIsImlhdCI6MTYxNDUwODEzMSwic3ViIjoiZGV2ZWxvcGVyL2NkODFjNzU3LTgxZmUtOGE1MC1hOTA1LWQyMmM4NGVjMDI2MSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3Ny44Ny40MS4zMSIsIjc3Ljg3LjQxLjE2MCIsIjc3Ljg3LjQxLjE4MSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.myZDxNIpTUOXd53hq86aF7nSthJWlTqlhqz9ZlHW84xDvK_Fbut_C6ZBGo6WOVNaF3rrO-UjE7rc7ZFyVJoCCQ';
const { ClashRoyaleAPI } = require('@varandas/clash-royale-api')

// Initialize the api
const api = new ClashRoyaleAPI(token)

// Use the api to get cards
api.getCards()
    .then(cards => {
        console.log('cards:', cards);
        // Do something with the cards
    })
    .catch(err => {
        // handle errors
    })
