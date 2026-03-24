// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "config",
        label: "Configuration du site",
        path: "content",
        format: "json",
        match: { include: "config" },
        ui: {
          allowedActions: {
            create: false,
            delete: false
          },
          router: () => "/"
        },
        fields: [
          // ─── ÉTABLISSEMENT ───────────────────────────────────────────────
          {
            type: "object",
            name: "etablissement",
            label: "Informations g\xE9n\xE9rales",
            fields: [
              { type: "string", name: "nom", label: "Nom de l'\xE9tablissement" },
              { type: "string", name: "slogan", label: "Slogan" },
              { type: "string", name: "description1", label: "Description (paragraphe 1)", ui: { component: "textarea" } },
              { type: "string", name: "description2", label: "Description (paragraphe 2)", ui: { component: "textarea" } },
              { type: "string", name: "annee", label: "Ann\xE9e d'ouverture" },
              { type: "string", name: "localisation", label: "Localisation (ex: Paris 9e)" },
              { type: "string", name: "noteGoogle", label: "Note Google (ex: 4.9)" },
              { type: "string", name: "nombreAvis", label: "Nombre d'avis (ex: 300+)" },
              { type: "string", name: "anneesExistence", label: "Ann\xE9es d'existence (ex: 5 ans)" }
            ]
          },
          // ─── CONTACT ─────────────────────────────────────────────────────
          {
            type: "object",
            name: "contact",
            label: "Contact & Localisation",
            fields: [
              { type: "string", name: "adresse", label: "Adresse" },
              { type: "string", name: "telephone", label: "T\xE9l\xE9phone" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "instagram", label: "Instagram (ex: @maisonblend)" },
              { type: "string", name: "facebook", label: "Facebook (URL)" },
              { type: "string", name: "lienReservation", label: "Lien de r\xE9servation (URL)" },
              { type: "string", name: "lienGoogleMaps", label: "Lien Google Maps" },
              { type: "string", name: "metro", label: "Stations de m\xE9tro proches" },
              { type: "string", name: "parking", label: "Informations parking" }
            ]
          },
          // ─── HORAIRES ────────────────────────────────────────────────────
          {
            type: "object",
            name: "horaires",
            label: "Horaires",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.jour })
            },
            fields: [
              { type: "string", name: "jour", label: "Jour" },
              { type: "boolean", name: "ouvert", label: "Ouvert" },
              { type: "string", name: "ouverture", label: "Heure d'ouverture (HH:MM)" },
              { type: "string", name: "fermeture", label: "Heure de fermeture (HH:MM)" }
            ]
          },
          // ─── AVIS ────────────────────────────────────────────────────────
          {
            type: "object",
            name: "avis",
            label: "Avis clients",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.auteur })
            },
            fields: [
              { type: "number", name: "note", label: "Note (1-5)" },
              { type: "string", name: "texte", label: "Texte de l'avis", ui: { component: "textarea" } },
              { type: "string", name: "auteur", label: "Auteur" },
              { type: "string", name: "date", label: "Date affich\xE9e (ex: Il y a 2 semaines)" }
            ]
          },
          // ─── IMAGES ──────────────────────────────────────────────────────
          {
            type: "object",
            name: "images",
            label: "Photos",
            fields: [
              { type: "image", name: "hero", label: "Photo principale (Hero)" },
              { type: "image", name: "aboutPrincipale", label: 'Photo "Notre histoire" principale' },
              { type: "image", name: "aboutSecondaire", label: 'Photo "Notre histoire" secondaire' },
              {
                type: "image",
                name: "galerie",
                label: "Photos de la galerie",
                list: true
              }
            ]
          },
          // ─── STYLE ───────────────────────────────────────────────────────
          {
            type: "object",
            name: "style",
            label: "Style & Couleurs",
            fields: [
              { type: "string", name: "couleurPrincipale", label: "Couleur principale (hex, ex: #B5603E)" },
              { type: "string", name: "couleurSecondaire", label: "Couleur secondaire (hex, ex: #3D2314)" },
              { type: "string", name: "nomDomaine", label: "Nom de domaine (ex: maisonblend.fr)" }
            ]
          }
        ]
      },
      // ─── MENU (fichiers séparés par catégorie) ────────────────────────────
      {
        name: "menuCategorie",
        label: "La carte",
        path: "content/menu",
        format: "json",
        ui: {
          router: () => "/"
        },
        fields: [
          { type: "string", name: "categorie", label: "Cat\xE9gorie" },
          { type: "string", name: "note", label: "Note / Information", ui: { component: "textarea" } },
          {
            type: "object",
            name: "items",
            label: "Plats & Boissons",
            list: true,
            ui: {
              itemProps: (item) => ({ label: `${item?.nom} \u2014 ${item?.prix}` })
            },
            fields: [
              { type: "string", name: "nom", label: "Nom" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "prix", label: "Prix (ex: 4,50 \u20AC)" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
