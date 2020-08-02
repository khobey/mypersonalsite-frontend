FROM node:14-alpine as build-stage
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY ./ /app/
RUN npm run build

FROM node:alpine
COPY --from=build-stage /app/ /var/html/
WORKDIR /var/html/
EXPOSE 5000
CMD ["node", "server.js"]
