# Canin Première Langue — Description du projet

## Présentation de l'association

**Canin Première Langue** est une association loi 1901 centrée sur le bien-être des chiens.

L'association considère qu'un chien ne peut être serein que s'il est compris — compris dans ses besoins et dans sa manière de les exprimer. Elle organise des activités collectives et transmet aux maîtres les clés de lecture du langage canin.

Elle s'adresse aux personnes souhaitant s'engager dans une démarche de compréhension, de responsabilité et de cohérence.

## Fonctionnement

- **Ateliers collectifs** : cœur du projet, dans un cadre structuré, sécurisant et respectueux
- **Accompagnement initial** : proposé si nécessaire pour permettre une intégration sereine au collectif
- **Méthode positive non permissive**, toutes races, tous âges (2 mois à 10 ans et +)
- **Secteur Lyon Nord** (Rillieux-la-Pape, Sathonay-Camp, Caluire et Cuire, Neyron, Miribel, Beynost…)

## Contact

- Téléphone : 06.73.33.84.59 (de préférence par SMS)
- Président de l'association joignable via le site

## Stack technique

| Élément    | Technologie             |
|------------|-------------------------|
| Framework  | Vue 3 (Composition API) |
| UI         | Vuetify 3               |
| Routeur    | Vue Router (typed, file-based) |
| Langage    | TypeScript              |
| Build      | Vite                    |
| Conteneur  | Docker                  |
| Registry   | Scaleway (rg.nl-ams.scw.cloud) |
| Serveur    | OVH (SSH via GitHub Actions) |

## Pages

| Route             | Fichier                          | Description          |
|-------------------|----------------------------------|----------------------|
| `/`               | `src/pages/index.vue`            | Page d'accueil       |
| `/notre-demarche` | `src/pages/notre-demarche.vue`   | Notre démarche       |
| `/contact`        | `src/pages/contact.vue`          | Contact              |

## Déploiement

Le pipeline CI/CD est défini dans `.github/workflows/deploy.yaml`.
Il comporte 3 jobs séquentiels : **prepare** → **build-and-push** → **deploy**.

### Recette (environnement `re7`)

- **URL** : https://re7.caninpremierelangue.fr
- Déclenché automatiquement sur un **push** ou une **pull request** vers `main`
- Tag Docker : SHA du commit (`github.sha`)

### Production (environnement `prod`)

- **URL** : https://caninpremierelangue.fr
- Déclenché automatiquement à la **publication d'une release GitHub** (création d'un tag via *Releases* → *Publish release*)
- Tag Docker : nom du tag de la release (`github.event.release.tag_name`)

### Détail du pipeline

1. **prepare** — install (`npm install`), build (`npm run build`), écriture du fichier `version-front.env` avec `DEPLOY_ENV` et `IMAGE_TAG`
2. **build-and-push** — build de l'image Docker et push vers le registry Scaleway
3. **deploy** — récupération des secrets SSH depuis Scaleway, copie des fichiers sur le serveur OVH via SCP, lancement du `docker-compose` via SSH

### Secrets requis

| Secret                    | Usage                              |
|---------------------------|------------------------------------|
| `SCW_SECRET_KEY`          | Auth registry Scaleway + secrets   |
| `SCW_ACCESS_KEY`          | Auth API Scaleway                  |
| `SCW_DEFAULT_PROJECT_ID`  | Projet Scaleway                    |
| `SCW_DEFAULT_ORGANIZATION_ID` | Organisation Scaleway          |
