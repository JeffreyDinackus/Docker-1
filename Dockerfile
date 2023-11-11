FROM node:21-alpine3.17


COPY src /app/
COPY package-lock.json /app/
COPY package.json /app/

WORKDIR /app


RUN npm install
EXPOSE 8080

CMD ["node", "server.js"]

