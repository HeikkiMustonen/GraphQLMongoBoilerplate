FROM node:latest

#install vim for config editing
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

RUN mkdir /graphqlserver/

WORKDIR /graphqlserver/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"] 

