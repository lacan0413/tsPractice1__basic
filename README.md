# TypeScript basic pratice 1
**Description:**<br>
<br>
Tutorial website:<br>
1. https://www.youtube.com/watch?v=ahCwqrYpIuM <br>
2. https://ithelp.ithome.com.tw/articles/10266798 <br>
3. https://ithelp.ithome.com.tw/articles/10267335 <br>
___
**Command:**<br>
<br>
npm install typescript -g <br>
tsc -v <br>
<br>
<br>
npm install ts-node -g <br>
ts-node -v <br>
<br>
<br>
tsc index.ts <br>
___
**Way of compiling ONE:**<br>
<br>

1. create tsconfig.json <br>
```javascript
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

2. tsc (watch) <br>
___
**Way of compiling TWO:**<br>
<br>

1. View>Command Palette (Ctrl + Shift + P) <br>
2. Configure Default Build Task <br>
3. tsc:build – tsconfig.json <br>
4. tasks.json <br>

5. Run Build Task (Ctrl + Shift + B) <br>
6. Run Code (Ctrl + Alt + N) <br>
<br>

___
**Using lodash:**<br>
<br>
+ npm i lodash <br>
<br>
