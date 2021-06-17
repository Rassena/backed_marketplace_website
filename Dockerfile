FROM node:10

RUN mkdir -p /opt/app
WORKDIR /opt/app
VOLUME /tmp

COPY . .


RUN npm install
RUN npm install -g nodemon

EXPOSE 3000

CMD [ "git", "pull", "https://github.com/Rassena/nodejs-express-mysql.git" ]
CMD [ "npm", "start" ]