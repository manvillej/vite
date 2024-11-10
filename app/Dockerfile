FROM node

# automatically creates the dir and sets it as the current working dir
WORKDIR /usr/src/app

COPY package.json .
RUN yarn
#COPY entrypoint.sh /entrypoint.sh
#RUN chmod +x /entrypoint.sh
#RUN /entrypoint.sh

COPY . .

EXPOSE 8080

CMD [ "yarn", "dev", "--debug" ]