# v6.9.2 LTS
FROM node:boron

# Create app directory
RUN mkdir -p /usr/boardsession
WORKDIR /usr/boardsession

# Install dependencies
COPY package.json /usr/boardsession
RUN npm install

# Bundle app source inside image
COPY . /usr/boardsession
RUN npm run build:server
RUN npm run build:client

# App binds to port 8080, map to docker daemon
EXPOSE 8080

# Define command to start app
CMD [ "npm", "start" ]
