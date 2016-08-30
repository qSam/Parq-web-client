FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

#Copy app source to working dir
COPY . /usr/src/app

EXPOSE 8080

CMD npm start
