# Utiliser une image Node officielle
FROM node:22

# Créer un dossier pour l’app
WORKDIR /app

# Copier package.json
COPY package.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . /app

# Exposer le port utilisé par ton serveur (ex: 3000)
EXPOSE 3000

# Commande de lancement
CMD ["npm", "start"]
