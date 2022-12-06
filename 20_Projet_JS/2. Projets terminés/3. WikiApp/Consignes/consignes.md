# Coder une récherche Wikipedia

> ctrl+shift+v sur VS Code pour analyser ce fichier markdown

<br>

Le but de ce projet est de coder un système de recherche grâce à l'API de Wikipedia.<br>
L'utilisateur peut effectuer une recherche et voir s'afficher des résultats sur lesquelles il pourra cliquer si il veut se déplacer sur la page de l'article en question. <br> 
⚠️Ce projet est assez populaire et vous pouvez trouver des exemples déjà réalisés sur le web, mais essayez d'abord de le **faire tout seul**.

<br>

### A. Coder une interface basique
> Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
> Rajoutez un peu de style si besoin est. 
> <br>
> Puis codez les fonctionnalités JavaScript.
> 
<br>

### B. Fonctionnalités JavaScript à coder pour ce projet

1. Gérez l'entrée de la recherche grâce au formulaire et à l'input.
2. Utilisez l'API de Wikipedia afin d'obtenir les résultats de cette recherche.<br>
Je vous donne l'endpoint(URL) car c'est un des premiers projets et que la doc n'est pas très claire :

https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}

- Utilisez l'api à l'aide de la méthode fetch() en y incluant le contenu de la recherche ici : ${searchInput}.

2. Ajoutez un loader pendant le chargement.
3. Affichez les résultats en dessous de l'input.
4. Faites en sorte qu'on puisse éffectuer autant de recherches qu'on le souhaite.
5. Bonus : Gérez les erreurs possibles avec la méthode fetch()

<br>

### C. Ajoutez du style à l'interface afin de terminer le projet.
