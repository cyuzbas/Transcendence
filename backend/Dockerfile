FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install --silent
RUN npm install --silent -g @nestjs/cli

CMD ["npm", "run", "start:dev"]
