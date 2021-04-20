# Instructions
After installing TS (https://www.typescriptlang.org/download) it can be can be compiled as follows:
```npm
npm install typescript --save-devTypeScript 
```

## 1) Run TS files on the go
1) Install npx
2) Compile ts into js files using: Strg+Shift+B - ```tsc: build -tsbasics/tsconfig.json```
3) run npx ts-node nameOfTheFile.js (for the JS NOT TS FILE!)

## 2) Use VS Extension
1) Create a tsconfig.json to the project (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson)
   * add "target": "es2020" to the tsconfig.ts
   * add `"include": ["*"],` to add all files in the respective folder as TS files (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
   * or add the respective ts files that you want to use to the "files" section of the tsconfig.ts
2) Afterwards just select a compiled js file and "run code"

## 3) Node.js
1) Create also a tsconfig.json
2) Right click on the code of the respective ts file and choose "Compile TypeScript"
3) Run JS file using the Node interpreter

## Important
* Files share their scope 
  -> cannot declare a variable with the same name in different files
