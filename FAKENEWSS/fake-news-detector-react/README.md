# Fake News Detector - Application React

Ce projet est une application web React pour la détection de fausses nouvelles, avec une interface moderne et responsive, un thème clair/sombre, des animations et une navigation entre les pages.

## Structure du Projet

```
fake-news-detector-react/
├── public/
├── src/
│   ├── assets/                 # Images (logos, arrière-plan)
│   ├── components/             # Composants réutilisables (Header, Footer, Hero, etc.)
│   ├── contexts/               # Contextes React (ThemeContext)
│   ├── pages/                  # Pages de l'application (HomePage, AnalysisPage, etc.)
│   ├── App.css                 # Styles globaux de l'application et variables de thème
│   ├── App.tsx                 # Composant racine de l'application et gestion des routes
│   └── index.tsx               # Point d'entrée de l'application
├── package.json
├── README.md                 # Ce fichier
└── ... autres fichiers de configuration ...
```

## Lancer l'Application

Suivez ces étapes pour lancer l'application en mode développement :

1.  **Naviguez vers le dossier du projet :**
    ```bash
    cd C:\FAKENEWSS\fake-news-detector-react
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Lancez l'application :**
    ```bash
    npx react-scripts start
    ```

    L'application devrait s'ouvrir automatiquement dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Fonctionnalités

*   **Interface Responsive :** S'adapte aux différentes tailles d'écran.
*   **Thème Clair/Sombre :** Basculez entre les modes clair et sombre.
*   **Navigation :** Liens de navigation et bouton de retour fonctionnels.
*   **Animations :** Effets visuels modernes pour l'apparition des sections et les interactions.
*   **Détection de Fausses Nouvelles :** (Simulée pour l'instant, future intégration API).

## Images

Les images utilisées dans ce projet doivent se trouver dans le dossier `src/assets/`.
Actuellement, les images suivantes sont utilisées :
*   `background1.png` : Image de fond globale de l'application.
*   `logoclair1.png` : Logo pour le mode clair.
*   `logodark1.png` : Logo pour le mode sombre.

## Problèmes connus & Dépannage

Si vous rencontrez des problèmes, essayez les étapes suivantes :

1.  **Problèmes de port occupé (port 3000) :**
    *   Identifiez le processus : `netstat -ano | findstr :3000`
    *   Terminez le processus (remplacez PID par le numéro trouvé) : `taskkill /PID VOTRE_PID /F`
2.  **Problèmes de Module Not Found ou de compilation :**
    *   Nettoyez le cache npm : `npm cache clean --force`
    *   Supprimez les dossiers `node_modules` et `package-lock.json` :
        ```bash
        Remove-Item -Recurse -Force node_modules
        Remove-Item package-lock.json
        ```
    *   Réinstallez les dépendances : `npm install`
    *   Relancez l'application : `npx react-scripts start`

## Crédits

Développé par MENOUAR CHAIMA, AMINE ESSOUAQI et TARIK BOUKAIDI.
