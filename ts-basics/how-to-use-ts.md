# Instructions
TypeScript can be run with Node as follows:
1) Install TS (https://www.typescriptlang.org/download)
```npm
npm install typescript --save-dev
```
2) Create a tsconfig.json to the project (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson)
3) 3) Add "target": "es2020" to the tsconfig.ts
   * add `"include": ["*"],` to add all files in the respective folder as TS files (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
   * or add the respective ts files that you want to use to the "files" section of the tsconfig.ts
4) Right click on the code of the respective ts file and choose "Compile TypeScript"
4) Run JS file using the Node interpreter

## Important
* Files share their scope 
  -> cannot declare a variable with the same name in different files
