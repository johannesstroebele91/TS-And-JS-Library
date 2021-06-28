# 1) Prerequisites

1. Install TS (https://www.typescriptlang.org/download)
2. `npm install typescript --save-devTypeScript`

# 2) Execution possibilities

## 2.1) Run via Code Runner VS Code extension
1. Press F1
2. Type run by language
3. Type typescript
## 2.1) Run TS files using Quokka
1. Install Quokka extension
2. Set the keyboard shortcut of `Quokka.js: start on current file` to e.g. `option+shift++`
3. Select the file and press shortcut

## 2.2) Run TS files on the go

1. Install npx
2. Compile ts into js files using: Strg+Shift+B - `tsc: build -tsbasics/tsconfig.json`
3. run npx ts-node nameOfTheFile.js (for the JS NOT TS FILE!)

## 2.3) Use VS Extension

1. Create a tsconfig.json to the project (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#using-tsconfigjson-or-jsconfigjson)
   - add "target": "es2020" to the tsconfig.ts
   - add `"include": ["*"],` to add all files in the respective folder as TS files (https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
   - or add the respective ts files that you want to use to the "files" section of the tsconfig.ts
2. Compile the js file
3. Afterwards just select a compiled js file and "run code"

## 2.4) Node.js

1. Create also a tsconfig.json
2. Right click on the code of the respective ts file and choose "Compile TypeScript"
3. Run JS file using the Node interpreter

# 3) Important

- Files share their scope
  -> cannot declare a variable with the same name in different files
