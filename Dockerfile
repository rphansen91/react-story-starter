# base image
FROM node:9.6.1

# set working directory
RUN mkdir -p /app
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app
RUN npm install
COPY . /app
# RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]
