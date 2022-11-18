FROM node:10

WORKDIR /catchy_ts

COPY package.json ./
COPY tsconfig.json ./

COPY src ./src
RUN ls -a
RUN npm install

EXPOSE 3000

CMD ["npm","run","dev"]