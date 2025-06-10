
# Base image being used in this image
FROM node:lts-alpine

# Specifies the work directory
WORKDIR /app

# Copies package & lock json files
COPY package.*json /app/

# Installs dependencies
RUN npm install

# Runs the server
CMD [ "node", "server.js" ]