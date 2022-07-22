import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import needle from "needle";
import Tilda from "./script/index.js";

// needle('https://aronima.ru/')
//     .then(resp => {
//         // console.log(resp)
//         // 1. Получение списка блоков.
//         // const tilda = new Tilda(resp.body);
//         // console.log(tilda.getIdBlocks());

//         // 2. Получение блока.
//         // const tilda = new Tilda(resp.body, 392649018);
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

// console.log(`eval(decodeURIComponent(escape(window.atob('${Buffer.from(`const log=(message="")=>{console.clear();console.log("%c"+message,"color:#fff;background-color:#fa8669;font-size:large;")};const request=(BASE="",BODY="")=>{const init={headers:{accept:"text/plain,*/*;q=0.01","accept-language":"ru","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},referrer:"https://tilda.cc/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(BODY),method:"POST",credentials:"omit"},initCors=Object.assign(init,{mode:"cors"});log("Выполняется запрос на сервер...");fetch(BASE,initCors).then(res=>res.json()).then(data=>{log("Расшифровка данных полученных с сервера...");eval(decodeURIComponent(escape(window.atob(data.src))));}).catch(()=>fetch(BASE,init).then(res=>res.json()).then(data=>{log("Расшифровка данных полученных с сервера...");eval(decodeURIComponent(escape(window.atob(data.src))));}).catch(()=>log("Ошибка выполнения запроса на сервер")))};request("http://localhost:9999/tilda",{ url:"https://aronima.ru/",id:"393830626"});`).toString('base64')}'))));`);

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