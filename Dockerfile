FROM node:14.17.0-alpine3.13 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# COPY ONLY dist
FROM node:14.17.0-alpine3.13

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 8001

CMD [ "yarn", "start:prod" ]