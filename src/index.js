// import axios from "axios";
import { ClashRoyaleAPI } from "@varandas/clash-royale-api";

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjRkMjQzZjZlLWQxNTItNGU4ZC05YWFmLTQ0NGJiZWQ0M2NmMSIsImlhdCI6MTYxNTA0NTQ5Mywic3ViIjoiZGV2ZWxvcGVyL2NkODFjNzU3LTgxZmUtOGE1MC1hOTA1LWQyMmM4NGVjMDI2MSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTUuMTguMjkuMTM4Il0sInR5cGUiOiJjbGllbnQifV19.dXLQZ0Y31hUFzxVphGDi5v6QrBBP31o9YbcaMXqk83dEAQrjjr5w1sA5t22XPojW1hZwu_zAXjbR4pS8yKolew';
const api = new ClashRoyaleAPI(token);

api.getCards()
    .then(cards => {
        console.log("cards:", crads);
        // Do something with the cards
    })
    .catch(err => {
        // handle errors
        console.error("err:", err);
    })



































// const baseUrl = 'https://api.clashroyale.com/v1'
// const uri = {
//     Cards: '/cards',
//     Clans: '/clans',
//     WarLog(clanTag) {return `clans/${clanTag}/warlog`},
//     RiverRaceLog(clanTag) { return `/clans/${clanTag}/riverracelog`},
//     CurrentWar(clanTag) {return `/clans/${clanTag}/currentwar`},
//     ClanInfo(clanTag) {return `/clans/${clanTag}`},
//     ListClanMembers(clanTag) {return `/clans/${clanTag}/members`},
//     ClanInfo(clanTag) {return `/clans/${clanTag}`},
//     ClanInfo(clanTag) {return `/clans/${clanTag}`},

// };

// const url = `${baseUrl}${uri.Cards}`;

// const options = {
//     headers: {
//         Accept: 'application/json',
//         authorization: token,
//         cookie: "_ga=GA1.2.2068679650.1614485694; _gid=GA1.2.1233869339.1615022187"
//     }
// };

// fetch(url, options)
//     .then(resp => console.log(resp));


