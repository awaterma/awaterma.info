FROM node
RUN apt-get update -y && apt-get install -y unzip vim && useradd worker && mkdir /home/worker && chown -R worker:worker /home/worker && npm install -g http-server
USER worker
WORKDIR /home/worker
CMD /bin/bash 
