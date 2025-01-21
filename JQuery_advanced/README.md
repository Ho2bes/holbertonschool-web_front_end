# JQuery Advanced Project

## Description
Ce projet explore les fonctionnalités avancées de jQuery pour la manipulation dynamique du DOM et les interactions AJAX. Il couvre la création d'éléments DOM, l'ajout d'interactions utilisateur, et la communication avec un serveur backend via des requêtes HTTP. Chaque tâche du projet introduit une nouvelle fonctionnalité ou une méthode spécifique de jQuery.

---

## Table des matières
1. [Prérequis](#prérequis)
2. [Installation](#installation)
3. [Structure du Projet](#structure-du-projet)
4. [Fonctionnalités](#fonctionnalités)
5. [Tâches](#tâches)
6. [Commandes JSON Server](#commandes-json-server)
7. [Auteurs](#auteurs)

---

## Prérequis
- **Éditeurs supportés** : vi, vim, emacs, Visual Studio Code
- **Navigateurs compatibles** : Tous les navigateurs modernes supportant JavaScript
- **Modules requis** :
  - jQuery (via un CDN)
  - json-server (installé localement pour les tâches finales)

---

## Installation
1. Clonez le dépôt GitHub :
   ```bash
   git clone https://github.com/holbertonschool-web_front_end
   ```
2. Naviguez vers le répertoire du projet :
   ```bash
   cd JQuery_advanced
   ```
3. Installez les dépendances :
   ```bash
   npm install json-server --save-dev
   ```
4. Démarrez le serveur JSON Server :
   ```bash
   node_modules/.bin/json-server --watch db.json
   ```

---

## Structure du Projet
```
JQuery_advanced/
|-- 0-index.html
|-- 1-index.html
|-- 2-index.html
|-- 3-index.html
|-- 4-index.html
|-- 5-index.html
|-- 6-index.html
|-- 7-index.html
|-- 8-index.html
|-- 9-index.html
|-- 10-index.html
|-- 11-index.html
|-- 12-index.html
|-- db.json
|-- README.md
```

---

## Fonctionnalités
- Charger jQuery depuis un CDN
- Créer et manipuler dynamiquement des éléments DOM
- Gérer les événements utilisateur (clic, soumission de formulaire, etc.)
- Envoyer des requêtes AJAX (GET, POST, DELETE)
- Ajouter une pagination dynamique
- Intégrer un état de chargement visuel avec jQuery
- Connecter une application frontend à un backend JSON Server

---

## Tâches
### **Tâche 0 : Configuration de l'environnement**
- Charger jQuery via le CDN et vérifier son chargement dans la console.

### **Tâche 1 : Création d'un élément DOM**
- Créer dynamiquement un paragraphe avec du texte lorem ipsum et l'ajouter à la page.

### **Tâche 2 : Création de plusieurs éléments DOM**
- Générer un tableau HTML complet à partir d'une chaîne de caractères.

### **Tâche 3 : Chaîner des éléments DOM**
- Créer chaque élément de tableau individuellement et les ajouter en utilisant des méthodes de chaînage.

### **Tâche 4 : Fonction HTML**
- Remplacer dynamiquement le contenu du tableau HTML avec `.html()`.

### **Tâche 5 : Attribut Click et fonction Remove**
- Ajouter des lignes dynamiquement au tableau avec un bouton pour les supprimer.

### **Tâche 6 : Val, Before, et Prepend**
- Ajouter un formulaire permettant d'insérer des lignes en haut ou en bas du tableau.

### **Tâche 7 : Requêtes Ajax**
- Implémenter une recherche utilisant l'API de Wikipédia.

### **Tâche 8 : Pagination**
- Ajouter une pagination avec affichage dynamique des résultats par page.

### **Tâche 9 : Wrap/Unwrap**
- Afficher un état de chargement visuel en entourant les résultats avec une classe CSS.

### **Tâche 10 : Requête GET sur JSON Server**
- Afficher dynamiquement les articles récupérés depuis le serveur JSON Server.

### **Tâche 11 : Requête POST**
- Ajouter un formulaire pour soumettre de nouveaux articles au serveur.

### **Tâche 12 : Requête DELETE**
- Ajouter un bouton pour supprimer dynamiquement des articles du serveur.

---

## Commandes JSON Server
- **Démarrer le serveur** :
  ```bash
  node_modules/.bin/json-server --watch db.json
  ```
- **URL de base** :
  - Posts : `http://localhost:3000/posts`
  - Comments : `http://localhost:3000/comments`
  - Profile : `http://localhost:3000/profile`

---
