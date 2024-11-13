FROM node:16.16.0 AS development

WORKDIR /deepak/frontend/src/app

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 4200