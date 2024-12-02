FROM node:22-alpine

WORKDIR /app/

COPY . /app/

RUN cd /app/ && npm install && npm run build

EXPOSE 8080

ENTRYPOINT ["npm","run","serve"]