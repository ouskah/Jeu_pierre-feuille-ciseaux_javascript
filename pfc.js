// Remarque : différences entre .text() et replaceWith() qui n'a pas fonctionné ???


$(document).ready(function() {    
    
    
    // définition des variables
    var winsJoueur = 0; // nb victoires Joueur
    var winsOrdi = 0; // nb victoires Ordi
    var nbTours = 0; // nb de tours joués
    
    
    // appuyer sur le bouton go pour : afficher choix de l'ordi, le résultat et ajouter +1 au compteur du jeu
    $("#btn-go").click(function() {
        
        nbTours ++; // +1 au nb de tours joués
        $("#nb-tours").text(nbTours); // affiche n° de tour actuel (donc le nb de tours effectués)
        
        
        // le joueur fait son choix à partir d'une liste déroulante que l'on récupère pour comparaison
        var choixJoueur = $("#choix-joueur option:selected").text();
        
    
        // choix de l'ordi au hasard
        var choixOrdi = Math.floor((Math.random()*3)+1); // mieux que Math.round((Math.random()*2) + 1)


        // choix de l'ordi au hasard assigné à une option du jeu
        var ordi = function() { // function qui gère choix au hasard de l'ordi dès click sur "GO"


            if(choixOrdi === 1){choixOrdi = "pierre"; $("#choix-ordi").text(choixOrdi);}
            if(choixOrdi === 2){choixOrdi = "feuille"; $("#choix-ordi").text(choixOrdi);}
            if(choixOrdi === 3){choixOrdi = "ciseaux"; $("#choix-ordi").text(choixOrdi);}
        };

    
    // comparer les 9 possibilités : victoires, défaites et nulles

        var compare = function() {
        
            if (choixJoueur === "pierre" && choixOrdi === "pierre") {
                // message : égalité pour le tour
                $("#rt-tour").text("Egalité !");
            }

            if (choixJoueur === "pierre" && choixOrdi === "feuille") {
               // +1 au nb de victoires de l'Ordi
                winsOrdi++;
                // affichage nb victoires
                $("#wins-ordi").text(winsOrdi);    
                // message : vainqueur du tour
                $("#rt-tour").text("Ordi gagne !");
            }

            if (choixJoueur === "pierre" && choixOrdi === "ciseaux") {
               // +1 au nb de victoires du joueur
                winsJoueur++; 
                // affichage nb victoires
                $("#wins-joueur").text(winsJoueur); 
                // message : vainqueur du tour
                $("#rt-tour").text("Joueur gagne !"); 
            }

            if (choixJoueur === "feuille" && choixOrdi === "pierre") {
               // +1 au nb de victoires du joueur
                winsJoueur++; 
                // affichage nb victoires
                $("#wins-joueur").text(winsJoueur); 
                // message : vainqueur du tour
                $("#rt-tour").text("Joueur gagne !"); 
            }

            if (choixJoueur === "feuille" && choixOrdi === "feuille") {
                // message : égalité pour le tour
                $("#rt-tour").text("Egalité !")            }

            if (choixJoueur === "feuille" && choixOrdi === "ciseaux") {
                // +1 au nb de victoires de l'Ordi
                winsOrdi++;
                // affichage nb victoires
                $("#wins-ordi").text(winsOrdi);    
                // message : vainqueur du tour
                $("#rt-tour").text("Ordi gagne !");    
            }

            if (choixJoueur === "ciseaux" && choixOrdi === "pierre") {
                // +1 au nb de victoires de l'Ordi
                winsOrdi++;
                // affichage nb victoires
                $("#wins-ordi").text(winsOrdi);    
                // message : vainqueur du tour
                $("#rt-tour").text("Ordi gagne !");     
            }

            if (choixJoueur === "ciseaux" && choixOrdi === "feuille") {
                // +1 au nb de victoires du joueur
                winsJoueur++; 
                // affichage nb victoires
                $("#wins-joueur").text(winsJoueur); 
                // message : vainqueur du tour
                $("#rt-tour").text("Joueur gagne !");   
            }

            if (choixJoueur === "ciseaux" && choixOrdi === "ciseaux") {
                // message : égalité pour le tour
                $("#rt-tour").text("Egalité !");            
            }

        }; // fin function compare
    
        
        
        ordi(); // lance la fonction ordi

        compare(); // lance la fonction compare

        
    }); // fin click go
    
}); // fin jquery
