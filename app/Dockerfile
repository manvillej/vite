FROM node

# automatically creates the dir and sets it as the current working dir
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

EXPOSE 5173

CMD [ "yarn", "dev", "--debug" ]