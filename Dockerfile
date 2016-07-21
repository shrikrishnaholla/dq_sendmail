FROM  node:5-slim
MAINTAINER Shrikrishna Holla <shrikrishna.holla@gmail.com>

COPY  package.json /
RUN   npm install

COPY index.js /
ENTRYPOINT ["node", "index.js"]
