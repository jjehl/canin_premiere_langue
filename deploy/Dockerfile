# Étape 1 : Construire l'application Vue
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Utiliser nginx pour servir les fichiers statiques
FROM nginx:1.27-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/deploy/nginx-canin.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
