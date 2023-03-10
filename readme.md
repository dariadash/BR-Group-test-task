# React Boilerplate 

В данном приложении установлен и настроен webpack для продакшн, дев окружения. Стек React/Redux(toolkit)/TS.

## Используемые пакеты

- React 17
- Redux (toolkit)
- Typescript 
- Webpack 5
- Babel  

## Запуск dev среды 

Перед первым запуском проекта создать файл .env и настроить его по примеру из .env.example

npm start

## Билд

npm run build

## Конфигурация

- webpack.dev.config.js - dev среда
- webpack.prod.config.js - prod среда
- webpack.test.config.js - test среда

## Команды 

- `npm run lint` Запуск eslint 
- `npm run lint:fix` Запуск фиксов eslint 
- `npm run test` Запуск тестов через Mocha 
