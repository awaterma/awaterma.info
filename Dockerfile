FROM node
RUN adduser --quiet --home /usr/share/awaterma.net worker && apt-get update && apt-get install -y unzip vim && mkdir /usr/share/awaterma.net/html
ADD awaterma.zip /usr/share/awaterma.net/
ADD scripts /usr/share/awaterma.net
WORKDIR /usr/share/awaterma.net
RUN npm install 
RUN chown -R worker:worker /usr/share/awaterma.net && cd html && unzip ../awaterma.zip
USER worker
ENTRYPOINT ./start.sh
