# How to Ouput in DockerBuild cycles; Run Echo "..."???
# Failure: Did not see any output - is the output internal to the container?
# https://stackoverflow.com/questions/67540930/how-do-you-print-to-console-from-a-docker-file-during-build
#
# How to change Angular ports: --port 8080; set option in package.json
# https://stackoverflow.com/questions/40717449/how-to-change-angular-port-from-4200-to-any-other
#
# Use ng serve --host 0.0.0.0
# https://mherman.org/blog/dockerizing-an-angular-app/
#
# Success on gcloud: After using --port 8080 AND --host 0.0.0.0 setting on the ng serve command!

#FROM node:16.8.0
FROM node:18.13.0

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN echo "Installing Angular CLI..."
RUN npm install -g @angular/cli
RUN echo "Installing NPM..."
RUN npm install

COPY . .

EXPOSE 8080
#CMD ["ng", "serve","--port 8080"]
#CMD ng serve --port 4200
CMD ng serve --port 8080 --host 0.0.0.0
