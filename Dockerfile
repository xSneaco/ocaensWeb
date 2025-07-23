FROM node:latest
LABEL authors="Nico"

ENTRYPOINT ["top", "-b"]

WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]