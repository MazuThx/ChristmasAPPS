/**
 * Active automatiquement le thème Noël entre le 1er décembre et le 6 janvier
 * À placer juste avant </body> ou en <head> avec defer
 */
(function() {
  'use strict';
  
  const now = new Date();
  const year = now.getFullYear();
  const startDate = new Date(year, 11, 1);   // 1er décembre
  const endDate = new Date(year + 1, 0, 6);  // 6 janvier année suivante
  
  if (now >= startDate && now <= endDate) {
    document.documentElement.setAttribute('data-theme', 'noel');
    console.log('🎄 Thème Noël activé jusqu\'au 6 janvier');
  }
  
  // Option : toggle manuel (debug/prévisualisation)
  // Pour tester : localStorage.setItem('theme-noel', 'true');
  const forceTheme = localStorage.getItem('theme-noel');
  if (forceTheme === 'true') {
    document.documentElement.setAttribute('data-theme', 'noel');
  } else if (forceTheme === 'false') {
    document.documentElement.removeAttribute('data-theme');
  }
})();
