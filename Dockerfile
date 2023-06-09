FROM node:14-alipne3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD["npm", "run", "start"]