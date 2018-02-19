var game;
var useLandscape=false;

window.onload = function () {

var isMobile=navigator.userAgent.indexOf("Mobile");
if (isMobile>-1)
     {
        isMobile=true;
     }
     else
     {
        isMobile=false;
     }

    if (isMobile==false) {
        //desktop laptop
        if (useLandscape == true) {
            game = new Phaser.Game(800, 600, Phaser.AUTO, "ph_game");
        } else {

            game = new Phaser.Game(600, 800, Phaser.AUTO, "ph_game");
        }

    } else {
        //mobile device
        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
    }
    //game.antialias=false;
    game.state.add("StateMain",StateMain);
    game.state.start("StateMain");
}