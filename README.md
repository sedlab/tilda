# tilda

Библиотека для копирования z-block с tilda.

## Подготовка

Если не установлен пакет `git`, то ставим по инструкции с сайта `https://git-scm.com/downloads`

Если не установлен пакет `node js`, то ставим по инструкции с сайта `https://nodejs.org/en/download/package-manager`

## Установка

`git clone https://github.com/sedlab/tilda.git`
Переходим в созданный репозиторий, затем устанавливаем npm пакеты
`yarn`
если не стоит yarn то
`npm install —global yarn`
затем
`npm install --save-dev tsconfig-paths`

## Использование

```js
yarn start
```

в корневом файле `index.ts` есть логика поднятия сервера express. Можно взять за основу какого-либо проекта.


## Бонус
Просто вставляется в консоль браузера, под открытой страницей Tilda.

```js
// Скрипт замены цветов в z-block, может упросить кастомизацию готовых блоков.
const replaceColor = (colors) => {
    const httpBuildQuery = (object) => { 
        const params = new URLSearchParams(), 
        paramsGenerator = (parent_key, iterate_object) => { 
            for (let current_key in iterate_object) { 
                let property_path; 
                if (typeof iterate_object[current_key] == "string" || typeof iterate_object[current_key] == "number") { 
                    if (parent_key.length > 0) property_path = parent_key + "[" + current_key + "]"; 
                    else property_path = current_key; 
                    params.append(property_path, iterate_object[current_key]) 
                } else if (typeof iterate_object[current_key] == "object") { 
                    if (parent_key.length > 0) property_path = parent_key + "[" + current_key + "]"; 
                    else property_path = current_key; 
                    paramsGenerator(property_path, iterate_object[current_key]) 
                } 
            } 
        }; 
        paramsGenerator("", object); 
        return params.toString() 
    };
    const html = document.documentElement.outerHTML, idBlocks = [];
    $(html).find("div").toArray().map(i => $(i).attr("data-record-type") === "396" && idBlocks.push($(i)?.attr("id")?.replace("record", "")));
    const pageid = window.pageid;
    idBlocks.forEach(recordid => {
        $.ajax({
            url: "/zero/get/",
            type: "POST",
            data: { comm: "getzerocode", pageid, recordid },
            dataType: "text",
            success: (resp) => {
                const obj = JSON.parse(resp);
                const newObj = Object.assign({}, obj);
                Object.keys(obj).forEach(i1 => {
                    const value = obj[i1];
                    if (value instanceof Object){
                        Object.keys(value).forEach(i2 => {
                            const colorFind = colors.find(c => c.first === value[i2]);
                            if (colorFind)
                                newObj[i1][i2] = colorFind.second;
                        });
                    } else {
                        const colorFind = colors.find(c => c.first === value);
                        if (colorFind)
                            newObj[i1] = colorFind.second;
                    }
                });
                $.ajax({
                    type: "POST",
                    url: "/zero/submit/",
                    data: httpBuildQuery({ 
                        comm: "savezerocode", 
                        pageid, 
                        recordid, 
                        onlythisfield: "code", 
                        fromzero: "yes", 
                        code: JSON.stringify(newObj)
                    }), 
                    dataType: "text", 
                    success: (data) => console.log(recordid)
                });
            }
        });
    });
};

// DEMO
replaceColor([{ first: "#3eb9f7", second: "#EB4549" }, { first: "#112233", second: "#374047" }, { first: "#8bd2f5", second: "#F8F2E2" } ]);
```
