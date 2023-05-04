FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./docker/start.sh

EXPOSE 9000

CMD ["/bin/sh", "./docker/start.sh"]