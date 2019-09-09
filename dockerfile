FROM node:latest
WORKDIR express
COPY package.json .
RUN ls
RUN npm install
COPY . .
RUN ls
CMD ["npm","run","serve"]