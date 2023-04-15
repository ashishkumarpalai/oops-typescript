# oops-typescript

npm init -y 

npm i typescript
npm i tsc -d
tsc --init


in the tsconfig.json file 
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "baseUrl": "./", 
    "outDir": "DIst",
    "esModuleInterop": true, 
    "forceConsistentCasingInFileNames": true, 
    "strict": true, 
    "skipLibCheck": true 
  }
}