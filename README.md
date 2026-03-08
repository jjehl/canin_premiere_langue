# Canin Première Langue

Site web de l'association **Canin Première Langue** — loi 1901 dédiée au bien-être des chiens et à la transmission du langage canin.

Pour une description complète du projet, des pages et du pipeline de déploiement, voir [la documentation](doc/description.md).

---

# Lancer le projet en local

Copier `.env.conf` en `.env` et renseigner les variables, puis :

    cd docker
    ./docker-compose.sh

L'application est accessible sur http://localhost:8000

# Déploiement

- **Recette** : automatique sur push ou pull request vers `main`
- **Production** : automatique à la publication d'une release GitHub (tag)