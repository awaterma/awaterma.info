FROM node
RUN apt-get update && apt-get install -y unzip && apt-get install -y vim && mkdir /usr/share/awaterma.net && mkdir /usr/share/awaterma.net/html
ADD awaterma.zip /usr/share/awaterma.net/
ADD scripts /usr/share/awaterma.net
WORKDIR /usr/share/awaterma.net
expose 8080
RUN npm install && cd html && unzip ../awaterma.zip
ENTRYPOINT ./start.sh
