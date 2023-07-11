# tilda

Библиотека для копирования z-block с tilda.

## Установка

`npm install sedlab/tilda#latest --save` или `yarn add sedlab/tilda#latest`

## Использование

> ES6

```js
import axios from "axios";
import { Tilda } from "tilda";
```

> ES5

```js
const axios = require("axios").default;
const { Tilda } = require("tilda");
```

## Пример
```ts
import axios from "axios";
import { Tilda } from "tilda";

axios("https://aronima.ru/")
  .then(resp => {
    // console.log(resp)
    // 1. Получение списка блоков.
    // const tilda = new Tilda(resp.data);
    // console.log(tilda.getIdBlocks());

    // 2. Получение блока.
    // const tilda = new Tilda(resp.data, 392649018);
    // console.log(tilda.getCssObjRecordId());
    // console.log(tilda.getAdaptiveAB());
    // console.log(tilda.getElementsRecordId());
    // console.log(tilda.getCode());
    // console.log(tilda.getCodeEncrypted());

    // 3. Получение всех блоков.
    // const tilda = new Tilda(resp.data, undefined, "all");
    // console.log(tilda.getCode());
    // console.log(tilda.getCodeEncrypted());
  })
  .catch(() => {
    throw "Ошибка открытия сайта.";
  });
```