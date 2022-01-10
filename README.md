# DOJO WEEK 17 : 
## WebSocket forum simple avec MySQL

- Cloner le repository

### REACT APP

- À la racine du projet, nous nous trouvons dans React App, installer les dépendances et lancer l'application : 
> ``` npm install``` <br>
> ``` npm start```

** TOUT LE CODE PRÉSENT DANS REACT APP EST **FONCTIONNEL** ET **NE DOIT PAS ÊTRE MODIFIÉ**.

### BASE DE DONNÉES

- Créer une base de données nommée `websocket_messenger`
- Créer une table `message` qui aura pour attributs `id` (auto_increment, primary key not null), `author` (varchar 255, not null), `text` (text | longtext not null)
- Insérer un premier message (author: "server", text: "Welcome on WebSocket Chat")
- Ajouter un fichier .env à la racine du dossier `server` et y ajouter vos accès à la base de données `websocket_messenger`.
  
### SERVEUR NODE/EXPRESS

- Se placer dans le dossier `server`, installer les dépendences et démarrer le serveur :
> ``` npm install``` <br>
> ``` npm start```
  
- L'application est "prête" à fonctionner, **suivre les instructions ***::TODO*** du fichier index.js** pour compléter les fonctionnalités du serveur.
