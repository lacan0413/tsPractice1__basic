# tsPractice1__basic
## Description: 
TypeScript basic pratice <br />
<br />
Tutorial website: <br />
1. https://www.youtube.com/watch?v=ahCwqrYpIuM <br />
2. https://ithelp.ithome.com.tw/articles/10266798 <br />
3. https://ithelp.ithome.com.tw/articles/10267335 <br />
<br />
### Install: 
<br />
npm install typescript -g <br />
tsc -v <br />
<br />
npm install ts-node -g <br />
ts-node -v <br />
<br />
tsc index.ts <br />
<br />
___
<br />
## compiler 1: <br />
create tsconfig.json <br />
```
{
    "compilerOptions": {
        "target": "esnext",
        "watch": true,
        "lib": [
            "dom",
            "ES2017"
        ]
    },
}
```
<br />
tsc (watch) <br />
<br />
___
<br />
## compiler 2: <br />
View>Command Palette (Ctrl + Shift + P) <br />
Configure Default Build Task <br />
tsc:build – tsconfig.json <br />
tasks.json <br />
<br />
1. Run Build Task(Ctrl + Shift + B) <br />
2. Run Code (Ctrl + Alt + N) <br />
<br />
___
<br />
npm i lodash
<br />
