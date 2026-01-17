# Imagen base Node (LTS)
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json primero
COPY package*.json ./

# Instalamos SOLO dependencias de producción
RUN npm install --omit=dev

# Copiamos todo el código
COPY . .

# Exponemos el puerto de la app
EXPOSE 3000

# Comando para iniciar el backend
CMD ["npm", "start"]
