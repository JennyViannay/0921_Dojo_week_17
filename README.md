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


## ALGOS :

Go to `algos/algos.js` to resolve : 

Abbey is always forgetting friend’s birthdays; she wishes to be notified before the event that she must buy a present. She wants the notifications to be relative to how far away the event is.

Given only a unix time in the future, calculate the time an early notification should be sent. The further away the event the more padding should be added. The function should return a notification time 5 minutes and 5% before the event.

Tips:

Read about the Data object!

Optional: Improve your code to support returning multiple notifications at different thresholds. Output the result in a human readable format.

Output should look like this:

If now is 1st January 2019 an 00:00:00 and the event is 1st January 2019 01:00:00, return a notification time of 1st January 2019 00:52:00.

If now is 1st January 2019 an 00:00:00 and the event is 2nd January 2019 01:00:00, return a notification time of 2nd January 2019 00:37:00.

Your times only need to be approximate.

