# Coder une calculatrice en JavaScript

> ctrl+shift+v sur VS Code pour analyser ce fichier markdown

<br>

  Voilà un exercice solide en JavaScript, la calculatrice !<br>
  Il existe beaucoup de manières de résoudre celui-ci, alors faites-vous plaisir.<br>
  Je rappelle que l'important est de se creuser les méninges, de tenter des choses et de faire beaucoup de recherches.<br>
  Inspirez-vous de la calculette de google en tapant "calcultor" sur Google.<br>
  Il y aussi celle de windows, apple, etc ...

<br>

### A. Coder une interface basique
> Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
> Rajoutez un peu de style si besoin est. 
> <br>
> Puis codez les fonctionnalités JavaScript.
> 
<br>

### B. Fonctionnalités JavaScript à coder pour ce projet

1. Gérez le pavé numérique et les symboles, on doit voir les chiffres et symboles que l'on presse dans "l'écran" de la calculette.
2. Gérez l'ajout d'une virgule (2.59 + 784.47).
3. Créez une fonction de calcul qui va permettre d'afficher le résultat.<br> Attention, on peut avoir envie d'utiliser la méthode "eval()", mais celle-ci est à éviter. <br>
Il va donc falloir créer votre propre fonciton d'évaluation qui va analyser une chaîne et en retourner le résultat du calcul qu'elle contient.
Exemple: "250+96*10" = "1210".
Pensez à la précédence des multiplications et divisions.
4. Afficher le calcul en lui-même en plus petit au-dessus du résultat.
5. Il faut permettre aux utilisateurs d'enchaîner les calculs, en effectuant un "reset" sur le précedent si on en commence un nouveau. (comme la calculette de Google)
6. Gérez le retrait d'un caractère quand on appuie sur "CE" (clear entry)
7. Mettez en place le reset total avec la touche "C" (clear)
8. Interdisez le fait de terminer un calcul par un symbole (exemple: "55*3+") ainsi que par un point.
9. Bon courage.
<br>

### C. Ajoutez du style à l'interface afin de terminer le projet.
