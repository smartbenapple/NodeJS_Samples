#FROM node:16.8.0
FROM node:18.13.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
#RUN npm install amqplib axios express express-jwt jsonwebtoken request uuid
COPY . .
EXPOSE 8080
CMD ["node", "index.js"]