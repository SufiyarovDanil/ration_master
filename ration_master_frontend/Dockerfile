FROM node:22-alpine3.18

RUN mkdir /ration_master_frontend

WORKDIR /ration_master_frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD npm start
