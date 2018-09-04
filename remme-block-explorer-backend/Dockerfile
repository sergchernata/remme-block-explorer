FROM node:8.9-alpine

RUN apk add --update --no-cache \
    python \
    python-dev \
    py-pip \
    bash \
    build-base \
    && pip install --upgrade pip \
    && hash -r pip \
    && pip install virtualenv

WORKDIR /app

COPY ./package.json ./package.json

RUN npm install

COPY ./src ./src
COPY ./.env ./.env
COPY ./build ./build
RUN npm run build

CMD ["node", "dist/index.js"]