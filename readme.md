# TP 5 : projet 2 "React"

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp5` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).

  1. Dans le dossier `tp5/` exécutez
```bash  	  
tp5$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp5$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

Expliquez ici comment exécuter votre projet. Vous pouvez également ajouter toute précision utile sur votre travail.

# Application React — Boutique de Peluches

Une application web de e-commerce développée avec React permettant de consulter un catalogue de produits, d'ajouter des articles à un panier et de gérer les commandes en temps réel.

---

##  Démarrage rapide

### 1. Récupérer le projet

- Cloner le dépôt avec la commande :
```bash
git clone git@gitlab-etu.fil.univ-lille.fr:yanni.moutchou.etu/tp-js-s4-25-26.git
```

- Accéder au dossier :
```bash
cd tp5
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet

```bash
npm run build
npm run dev-server
```

---

##  Structure du projet

```
src/
├── assets/
│   ├── images/
│   │   ├── panier.jpg
│   │   └── poubelle.jpg
│   └── style/
│       ├── main.css
│       ├── catalog.css
│       ├── searchbar.css
│       └── cart-panel.css
├── components/
│   ├── app.component.jsx
│   ├── Catalog.component.jsx
│   ├── SearchBar.component.jsx
│   ├── ItemCard.component.jsx
│   ├── CartPanel.component.jsx
│   └── CartEntry.component.jsx
├── data/
│   ├── images/
│   │   └── *.jpg
│   └── products.js
├── scripts/
│   └── main.js
├── style/
│   └── style.css
└── index.html
```

---

##  Fonctionnalités

### Catalogue produits
- Affichage de l'ensemble des articles avec nom, description, image, poids, prix et stock.
- Barre de recherche avec filtrage instantané par nom (insensible à la casse).

### Panier
- Ajout d'un article via le bouton dédié sur chaque carte produit.
- Si l'article est déjà présent, la quantité s'incrémente automatiquement.
- La quantité est plafonnée au stock disponible.

### Gestion des quantités
- Champ numérique éditable directement dans le panier.
- Valeur contrainte entre `1` et le stock maximum.
- Mise à jour en temps réel du prix et du poids total.

### Suppression
- Suppression d'un article via l'icône corbeille.

### Totaux
- **Poids total** en grammes, recalculé selon les quantités.
- **Prix total** en euros, recalculé selon les quantités.

---

##  Architecture des composants

```
Root
├── Catalog
│   ├── SearchBar       →  barre de recherche / filtre
│   └── ItemCard[]      →  carte article (× N)
└── CartPanel
    └── CartEntry[]     →  ligne article dans le panier
```

---
