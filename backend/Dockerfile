FROM node:21-alpine3.17


COPY src /app/
COPY package-lock.json /app/
COPY package.json /app/

WORKDIR /app


RUN npm install
EXPOSE 3001

CMD ["node", "server.js"]

