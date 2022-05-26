# specify the node base image with your desired version node:<version>
FROM node:16

# port number to be used in the container
EXPOSE 2414

COPY . /gitfit/backend

WORKDIR /gitfit/backend

RUN apt-get --allow-releaseinfo-change -y update
RUN apt-get -y update && apt-get install -y npm
RUN npm install
RUN npm test
CMD npm start > log.txt
