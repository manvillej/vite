FROM node

# automatically creates the dir and sets it as the current working dir
WORKDIR /usr/src/app
# this will allow us to run vite and other tools directly
# ENV PATH /usr/src/node_modules/.bin:$PATH
RUN apt-get update -y
RUN apt-get install -y iputils-ping

# inject all environment vars we'll need
ARG VITE_BACKEND_URL
# expose the variable to the finished cotainer
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

COPY package.json .

RUN npm config set registry http://registry.npmjs.org/ --global
RUN npm cache clear --force

RUN npm install --loglevel silly

COPY . .

EXPOSE 8080

# CMD [ "npm", "run", "dev" ]
CMD ["tail", "-f", "/dev/null"]