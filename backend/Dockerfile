 specify the node base image with your desired version node:<version>
FROM node:16

EXPOSE 2414

COPY . /gitfit/backend

WORKDIR /gitfit/backend

RUN apt-get -y update && apt-get install -y npm
RUN npm install
CMD npm start > log.txt
