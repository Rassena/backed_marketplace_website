FROM node:10

RUN mkdir -p /opt/app
WORKDIR /opt/app
VOLUME /tmp

COPY . .

RUN npm install -f

EXPOSE 3000

CMD [ "npm", "start" ]