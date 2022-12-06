# Validation de données côté Front ✨

> ctrl+shift+v sur VS Code pour analyser ce fichier markdown

<br>

  Valider les données côté Front permet de soulager le travail du serveur tout en créant une bonne expérience pour l'utilisateur.<br>
  Plongez dans la doc MDN et amusez-vous avec les inputs d'un formulaire.

<br>

### A. Coder une interface basique
> Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
> Rajoutez un peu de style si besoin est. 
> <br>
> Puis codez les fonctionnalités JavaScript.
> 
<br>

### B. Fonctionnalités JavaScript à coder pour ce projet

1. Gérer l'input "utilisateur", faites-en sorte qu'il passe la validation lorsque le pseudo fait plus de 3 caractères.
2. Paramètrez le second input afin qu'il reçoive un email, et qu'il montre un message d'alerte si la chaîne rentrée n'est pas au bon format, le tout à l'aide d'un regex.
3. Le mot de passe doit contenir au moins un symbole, une lettre minuscule et un chiffre.
4. Montrez la "force" du mot de passe en fonction de ce que l'on rentre dans l'input.
- Si la longueur du mot de passe est entre [0 et 6] affichez : faible + 1barre.
- Si la longueur est supérieure à ]6 et inférieure à 9] et qu'elle contient au moins un symbole ou  un chiffre, affichez : moyen + 2barres.
- Si la longueur est supérieur à 9 et que'lle contient au moins un symbole et un chiffre affichez : fort + 3barres.
- Gérez la confirmation de mot de passe.
- Enfin envoyez un .alert("données envoyées") si on appuie sur le bouton "Création du compte" en ayant passé tous les tets.
  


<br>

### C. Ajoutez du style à l'interface afin de terminer le projet.
