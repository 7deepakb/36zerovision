# Versions for the docker image

# For Development servers
FROM node:16.16.0 AS development

WORKDIR /deepak/src/app

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm ci
RUN npm run build

EXPOSE 3000

# For Production servers
FROM node:16.16.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /deepak/src/app

COPY --from=development /deepak/src/app/ .

EXPOSE 3000

CMD ["node", "dist/main" ]
