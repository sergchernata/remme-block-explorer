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

COPY ./remme-block-explorer-backend/package.json ./package.json

RUN npm install

COPY ./remme-block-explorer-backend/src ./src
RUN npm run build

COPY ./remme-block-explorer-backend/.env ./.env

CMD ["node", "dist/index.js"]