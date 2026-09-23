# Congo Clean

Site web officiel de **Congo Clean**, organisation environnementale engagée en République démocratique du Congo.

## Stack

- Angular 21 (standalone components)
- Tailwind CSS v4
- Lucide icons (`@lucide/angular`)
- Thème clair / sombre

## Architecture

```
src/app/
  core/           # Layout (header, footer, shell) + services (thème)
  shared/         # Composants réutilisables, models, contenu
  pages/          # Vues : Accueil, À propos, Actions, Contact
```

## Démarrer

```bash
npm install --legacy-peer-deps
npm start
```

Ouvrir [http://localhost:4200](http://localhost:4200).

## Pages

| Route        | Contenu                          |
| ------------ | -------------------------------- |
| `/`          | Accueil                          |
| `/a-propos`  | Mission et identité              |
| `/actions`   | Sensibilisation, assainissement, recyclage |
| `/contact`   | Formulaire et coordonnées        |
