# Jeu du morpion

> ctrl+shift+v sur VS Code pour analyser ce fichier markdown

<br>

  Le jeu du morpion consiste à aligner 3 croix(X) ou ronds(O) afin de gagner la partie, à vous de jouer !

<br>

### A. Coder une interface basique
> Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
> Rajoutez un peu de style si besoin est. 
> <br>
> Puis codez les fonctionnalités JavaScript.
> 
<br>

### B. Fonctionnalités JavaScript à coder pour ce projet

1. Commencez par dessiner des X et des O lorsqu'on clique sur le Morpion.
2. Changez le texte pour informer les joueurs sur le tour en cours. (Au tour de X ou O)
3. À chaque clic, éxécutez une fonction qui sert à vérifier si la partie est finie, ou pas.
- Analysez bien le tableau de bonnes combinaisons fourni et tentez de trouver si une bonnes combinaison a été déssinée à chaque clic grâce au tableau "currentGame".
- <details> 
  <summary>Aide :  </summary>
   Les chiffres dans "winningCombinations" correspondent aux index des combinaisons gagnantes dans le tableau "currentGame". <br>
   Exemple : si X est à l'index 0, 1, 2, c'est gagné.<br>
   Vous n'avez plus qu'à vérifier les combinaisons une à une en fonction de ce qu'il y a dans le tableau...
</details>
4. Si une bonne combinaison est présente, informez les joueurs et proposez une nouvelle partie, sinon c'est un match nul.


<br>

### C. Ajoutez du style à l'interface afin de terminer le projet.
