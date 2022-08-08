import express from "express";
import cors from "cors";
import axios from "axios";
import { Tilda } from "./dist";

const app = express();
const port = 9999;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const BASE = `http://localhost:${port}/tilda`, URL = "http://calypso-academy.tilda.ws/", ID = "459505728", MODE = "", BODY = JSON.stringify({ url: URL, id: ID, mode: MODE });

console.log(`eval(decodeURIComponent(escape(window.atob('${Buffer.from(`const log=(message="")=>{console.clear();console.log("%c"+message,"color:#fff;background-color:#fa8669;font-size:large;")};const request=(BASE="",BODY="")=>{const init={headers:{accept:"text/plain,*/*;q=0.01","accept-language":"ru","content-type":"application/json;charset=UTF-8"},referrer:"https://tilda.cc/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify(BODY),method:"POST",credentials:"omit"},initCors=Object.assign(init,{mode:"cors"});log("Выполняется запрос на сервер...");fetch(BASE,initCors).then(res=>res.json()).then(data=>{log("Расшифровка данных полученных с сервера...");eval(decodeURIComponent(escape(window.atob(data.src))));}).catch(()=>fetch(BASE,init).then(res=>res.json()).then(data=>{log("Расшифровка данных полученных с сервера...");eval(decodeURIComponent(escape(window.atob(data.src))))}).catch(()=>log("Ошибка выполнения запроса на сервер")))};request("${BASE}",${BODY});`).toString('base64')}'))));`);

try {
    app.post("/tilda", async (req, response) => {
        const parse = req?.body;

        const URL = parse.url,
            ID = parse.id,
            MODE = parse.mode;

        // Получение содержимого сайта.
        axios(URL)
            .then(resp => {
                let tilda: any;
                if (MODE === "all")
                    tilda = new Tilda(resp.data, undefined, "all");
                else
                    tilda = new Tilda(resp.data, ID);
                return response.json({ src: tilda.getCodeEncrypted() });
            })
            .catch((err) => {
                console.log(err);
                throw "Ошибка открытия сайта.";
            });
    });
} catch (err) {
    console.log(err);
}

app.listen(port, () => console.log(`Listening on port ${port}`));