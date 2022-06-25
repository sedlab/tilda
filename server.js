import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import needle from "needle";
import Tilda from "./script/index.js";

// needle('https://aronima.ru/')
//     .then(resp => {
//         // console.log(resp)
//         // 1. Получение списка блоков.
//         const tilda = new Tilda(resp.body);
//         console.log(tilda.getIdBlocks());

//         // 2. Получение блока.
//         // const tilda = new Tilda(resp.body, 392630764);
//         // console.log(tilda.getCssObjRecordId());
//         // console.log(tilda.getAdaptiveAB());
//         // console.log(tilda.getElementsRecordId());
//         // console.log(tilda.getCode());
//         // console.log(tilda.getCodeEncrypted());

//         // 3. Получение всех блоков.
//         // const tilda = new Tilda(resp.body, undefined, "all");
//         // console.log(tilda.getCode());
//         // console.log(tilda.getCodeEncrypted());

//     })
//     .catch(err => {
//         throw "Ошибка открытия сайта", err;
//     });

// console.log(`eval(decodeURIComponent(escape(window.atob('${Buffer.from(`function request(body){console.clear();console.log('%cВыполняется запрос на сервер...','color:#fff;background-color:#fa8669;font-size:large');fetch('http://localhost:9999/tilda',{"headers":{"accept":"text/plain, */*; q=0.01","accept-language":"ru","content-type":"application/x-www-form-urlencoded; charset=UTF-8","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},"referrer":"https://tilda.cc/","referrerPolicy":"strict-origin-when-cross-origin","body":JSON.stringify(body),"method":"POST","mode":"cors","credentials":"omit"}).then(res=>res.json()).then(data=>{console.clear();console.log('%cРасшифровка данных полученных с сервера...','color:#fff;background-color:#fa8669;font-size:large;');eval(decodeURIComponent(escape(window.atob(data.src))));}).catch(error=>fetch('http://localhost:9999/tilda',{"headers":{"accept":"text/plain, */*; q=0.01","accept-language":"ru","content-type":"application/x-www-form-urlencoded; charset=UTF-8","sec-ch-ua-mobile":"?0","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},"referrer":"https://tilda.cc/","referrerPolicy":"strict-origin-when-cross-origin","body":JSON.stringify(body),"method":"POST","mode":"no-cors","credentials":"omit"}).then(res=>{console.log(res.json());return res.json();}).then(data=>{console.clear();console.log('%cРасшифровка данных полученных с сервера...','color: #fff;background-color:#fa8669;font-size:large;');eval(decodeURIComponent(escape(window.atob(data.src))));}).catch(error=>{console.clear();console.log('%cОшибка выполнения запроса на сервер =(','color:#fff;background-color:#fa8669;font-size:large')}))};request({ url: "https://aronima.ru/", id: "", mode: "all" });`).toString('base64')}'))));`);

const app = express();
const port = 9999;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

try {
    app.post('/tilda', async (req, response) => {
        const parse = JSON.parse(Object.keys(req?.body)[0]);

        const URL = parse.url,
            ID = parse.id,
            MODE = parse.mode;

        // Получение содержимого сайта.
        needle(URL)
            .then(resp => {
                let tilda;
                if (MODE === 'all')
                    tilda = new Tilda(resp.body, undefined, "all");
                else
                    tilda = new Tilda(resp.body, ID);
                return response.json({ src: tilda.getCodeEncrypted() });
            })
            .catch(err => {
                throw "Ошибка открытия сайта", err;
            });
    });
} catch (err) {
    console.log(err);
}

app.listen(port, () => console.log(`Listening on port ${port}`));