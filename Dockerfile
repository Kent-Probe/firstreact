# FROM node:lts-bullseye
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Generando la carpeta dist con los archivos compilados
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
