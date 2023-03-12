FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]