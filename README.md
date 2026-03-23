# Maison Blend — Site Web Coffee Shop

Site vitrine **Next.js 14 + Tina CMS** pour coffee shop / restaurant.
Déployable sur Vercel, avec interface d'administration visuelle incluse.

---

## Stack technique

| Technologie | Rôle |
|---|---|
| Next.js 14 (App Router) | Framework web |
| Tina CMS | Interface admin + stockage JSON |
| Tailwind CSS | Styles |
| TypeScript | Typage |
| Vercel | Hébergement |

---

## Commandes

```bash
# Installer les dépendances
npm install

# Lancer en développement (avec l'admin Tina)
npm run dev

# Build de production
npm run build

# Lancer en production (après build)
npm start
```

> L'interface admin Tina est accessible sur **http://localhost:3000/admin** en développement.

---

## Déploiement sur Vercel

### 1. Préparer le repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/votre-user/votre-repo.git
git push -u origin main
```

### 2. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Cliquez **"New Project"** → importez votre repository GitHub
3. Vercel détecte automatiquement Next.js — cliquez **"Deploy"**
4. Votre site est en ligne ! Notez l'URL de déploiement.

### 3. Variables d'environnement sur Vercel

Dans **Settings > Environment Variables** de votre projet Vercel, ajoutez :

| Variable | Valeur |
|---|---|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Votre Client ID Tina Cloud |
| `TINA_TOKEN` | Votre token Tina Cloud |
| `GITHUB_BRANCH` | `main` (ou votre branche principale) |

---

## Connecter Tina Cloud (interface admin en production)

Tina Cloud permet d'accéder à l'interface admin en production (sur Vercel) avec authentification.

### Étapes :

1. Créez un compte sur [app.tina.io](https://app.tina.io)

2. Créez un **nouveau projet** :
   - Connectez votre repository GitHub
   - Renseignez l'URL de votre site Vercel

3. Récupérez les identifiants :
   - **Client ID** → dans les settings du projet Tina
   - **Token** → dans "Tokens" → créez un token avec accès Read/Write

4. Ajoutez ces valeurs dans :
   - Votre fichier `.env.local` (développement local)
   - Les variables d'environnement Vercel (production)

5. Redéployez sur Vercel après avoir ajouté les variables.

6. L'admin est accessible sur `https://votre-site.vercel.app/admin`

---

## Ajouter les photos du client

### En local

Placez simplement les photos dans le dossier `/public/images/` :

```
public/
└── images/
    ├── hero.jpg           ← Photo principale (plein écran)
    ├── about-main.jpg     ← Photo "Notre histoire" grande
    ├── about-float.jpg    ← Photo "Notre histoire" flottante
    ├── gallery-1.jpg      ← Galerie (grande image gauche)
    ├── gallery-2.jpg      ← Galerie
    ├── gallery-3.jpg      ← Galerie
    ├── gallery-4.jpg      ← Galerie
    └── gallery-5.jpg      ← Galerie
```

**Formats recommandés :** JPG ou WebP
**Résolutions recommandées :**
- `hero.jpg` : 1920×1080 minimum
- `about-main.jpg` : 800×1066 (ratio 3/4)
- `gallery-*.jpg` : 800×600 minimum

### Via l'interface admin (Tina CMS)

Une fois connecté à l'admin sur `/admin` :
1. Allez dans **"Configuration du site"**
2. Section **"Photos"**
3. Cliquez sur chaque emplacement pour uploader directement

---

## Personnaliser le contenu

Tout le contenu du site est dans **`content/config.json`**.

Vous pouvez le modifier :
- **Directement** dans le fichier JSON
- **Via l'interface admin** sur `/admin` (recommandé)

---

## Structure du projet

```
├── app/
│   ├── page.tsx              ← Page principale
│   ├── layout.tsx            ← Layout global + fonts
│   ├── globals.css           ← Styles globaux + animations
│   └── admin/                ← Route admin (redirect vers Tina)
├── components/
│   ├── Nav.tsx               ← Barre de navigation
│   ├── Hero.tsx              ← Section plein écran
│   ├── About.tsx             ← Notre histoire
│   ├── Menu.tsx              ← La carte (avec onglets)
│   ├── Gallery.tsx           ← Galerie photos
│   ├── Hours.tsx             ← Horaires + contact
│   ├── Reviews.tsx           ← Avis clients
│   ├── MapSection.tsx        ← Carte Google Maps
│   ├── Footer.tsx            ← Pied de page
│   └── ScrollReveal.tsx      ← Animations au scroll
├── content/
│   └── config.json           ← Données du site
├── public/
│   └── images/               ← Photos
├── tina/
│   └── config.ts             ← Configuration Tina CMS
└── tailwind.config.ts
```
