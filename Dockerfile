FROM node:latest

#install vim for config editing
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]

#install psmisc and net-tools for finding / killing ports etc
RUN ["apt-get","install","net-tools"]
RUN ["apt-get","install","psmisc"]

#You can setup your environmental variables here
#ENV PORT=4000
#ENV MONGOCONNECTIONSTRING=

RUN mkdir /graphqlserver/

WORKDIR /graphqlserver/

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm","start"] 

