# README-NOEL

Ce dossier ajoute un thème saisonnier “Noël” optionnel, accessible et réversible pour le portail ITSM.

## Activation

- **Manuelle** : ajouter l’attribut `data-theme="noel"` sur `<html>`.
- **Automatique (optionnel)** : le script `theme-toggle.js` active le thème du **1er décembre** au **6 janvier**. S’il est bloqué, le thème par défaut reste affiché.

## Fichiers

- `styles.css` : thème par défaut (tokens globaux, composants).
- `theme-noel.css` : overrides et classes saisonnières.
- `theme-toggle.js` : activation automatique non bloquante.
- **Assets à fournir** (placeholders) :
  - `/assets/noel/background-portal.jpg` — fond 16:9 “campus d’hiver”.
  - `/assets/noel/garland-houx.png` — guirlande de houx horizontale (tileable).
  - `/assets/noel/snowflakes.png` — motif flocons semi-transparent.
  - `/assets/noel/icon-user-santa.svg` — pictogramme utilisateur avec bonnet.

> ⚠️ **Accessibilité** : conserver des contrastes AA, focus visibles (`:focus-visible`), et libellés ARIA factuels pour les boutons icône (menu, recherche, notifications, aide, chat).

## Décor & variantes

- **Neige discrète** : ajouter la classe `bg-snowflakes` sur `<body>` (overlay ≤ 10%).
- **Bannière incident festive** : ajouter la classe `banner--incident` sur `.alert` pour utiliser la couleur `--brand-danger` et la frise `garland-houx.png`.
- **Blocs de flash** :
  ```html
  <div class="flash">
    <div class="flash__item flash__item--tips">Astuce : …</div>
    <div class="flash__item flash__item--ok">Tout est opérationnel.</div>
    <div class="flash__item flash__item--sap">Incident impactant : …</div>
  </div>
