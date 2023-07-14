FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

EXPOSE 5173:5173

RUN npm install

CMD [ "npm" , "run", "dev"]