FROM node:alpine
WORKDIR /start
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev