# # Utiliza la imagen oficial de Node.js como base
# FROM node:18-alpine as builder

# # Crea el directorio de trabajo en /root/src
# RUN mkdir -p /root

# # Establece el directorio de trabajo en /root/src
# WORKDIR /root

# # Copia los archivos de configuración
# COPY ["package.json", "package-lock.json", "./"]

# # Instala las dependencias del proyecto
# RUN npm install

# # Copia los archivos de tu proyecto al directorio de trabajo
# COPY . ./

# # Inicia la aplicación cuando se ejecute el contenedor
# CMD ["npm", "run", "dev"]



# Use an official Node.js runtime as a base image
FROM node:21.2.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port on which your app will run
EXPOSE 5173

# Define the command to run your application
CMD ["npm", "run", "dev"]