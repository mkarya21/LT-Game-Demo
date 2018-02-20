var captionBg,homeBtn,restartBtn,audioBtn,resizeBtn,startBtn,langCheckBtn,titleTxt,titleBg1,titleBg2,checked=true,playerCheck=false;
var player1,player2,staticDice,text; 
var StateMain={    
   preload:function()
    {
       //load all images
       StateMain.load.image('bg', 'assets/images/bg.png');
       StateMain.load.image('c_bg', 'assets/images/caption-bg-1.png');
       StateMain.load.image('titleTxt', 'assets/images/subtraction-logo.png');
       StateMain.load.spritesheet('titleBg1', 'assets/images/player-1-blue.png',225,248);
       StateMain.load.spritesheet('titleBg2', 'assets/images/player-2-blue.png',225,248);
       StateMain.load.spritesheet('homeImg', 'assets/images/home.png',100,100);
       StateMain.load.spritesheet('restartImg', 'assets/images/restart.png',100,100);
       StateMain.load.spritesheet('audioImg', 'assets/images/audio.png',100,100);
       StateMain.load.spritesheet('resizeImg', 'assets/images/fullscreen.png',100,100);
       StateMain.load.spritesheet('startImg', 'assets/images/start-red.png',400,112);
       StateMain.load.spritesheet('langImg', 'assets/images/espanol-check.png',300,70);
       StateMain.load.spritesheet('numbers', 'assets/images/block-number-sprite-navy.png',210,200);
       StateMain.load.spritesheet('player1', 'assets/images/computer-avatar.png',181,204);
       StateMain.load.spritesheet('player2', 'assets/images/computer-avatar.png',181,204);
       StateMain.load.spritesheet('staticDice','assets/images/dice-roll-200x200-spritesheet.png',200,200);
    },
    
    create:function()
    {
    	game.add.sprite(0,0,'bg');
    	titleTxt = game.add.sprite(50,50,'titleTxt');
    	titleTxt.scale.setTo(0.5);
    	titleBg1 = game.add.button(game.world.centerX-200,game.world.centerY-100, 'titleBg1',this.singlePlayer,this,1,0,0);
    	titleBg1.scale.setTo(0.5);
    	titleBg2 = game.add.button(game.world.centerX+50,game.world.centerY-100, 'titleBg2',this.twoPlayer,this,1,0,0);
    	titleBg2.scale.setTo(0.5);
    	captionBg = game.add.sprite(-7,0,'c_bg');
    	captionBg.scale.setTo(0.3);
    	homeBtn = game.add.button(0,0, 'homeImg',this.homeClicked,this,1,0,0);
    	homeBtn.scale.setTo(0.5);
    	restartBtn = game.add.button(40,0, 'restartImg',this.restartClicked,this,1,0,0);
    	restartBtn.scale.setTo(0.5);
    	audioBtn = game.add.button(500,0, 'audioImg',this.audioClicked,this,1,0,0);
    	audioBtn.scale.setTo(0.5);
    	resizeBtn = game.add.button(550,0, 'resizeImg',this.resizeClicked,this,1,0,0);
    	resizeBtn.scale.setTo(0.5);
    	startBtn = game.add.button(game.world.centerX - 85,game.world.centerY + 210, 'startImg',this.startClicked,this,1,0,0);
    	startBtn.scale.setTo(0.5);
    	langCheckBtn = game.add.button(game.world.centerX -50,game.world.centerY + 290, 'langImg',this.langChecked,this);
    	langCheckBtn.scale.setTo(0.5);
    	player1 = game.add.sprite(50,100,'player1');
    	player1.scale.setTo(0.5);
    	player1.frame=1;
    	player1.visible=false;
    	player2 = game.add.sprite(450,100,'player2');
    	player2.scale.setTo(0.5);
    	player2.frame=0;
    	player2.visible=false;
    	staticDice = game.add.button(250,50,'staticDice',this.rollDice,this);
    	staticDice.scale.setTo(0.5);
    	staticDice.visible=false;
    	/*two = game.add.button(100,100, 'numbers',this.twoClicked,this);
    	two.frame= 2;
    	two.scale.setTo(0.3);
    	two.visible = false;
    	five = game.add.button(400,100, 'numbers',this.fiveClicked,this);
    	five.frame= 5;
    	five.scale.setTo(0.3);
    	five.visible = false;*/
    },
    
    update:function()
    {       

    },
    startClicked:function(){
    	if(playerCheck){
    		console.log("clicked");
	    	titleTxt.visible = false;
	    	titleBg1.visible = false;
	    	titleBg2.visible = false;
	    	startBtn.visible = false;
	    	langCheckBtn.visible = false;
	    	player1.visible=true;
	    	player2.visible=true;
	    	staticDice.visible=true;
    	}
    	/*two.visible = true;
    	five.visible = true;*/
    },
    homeClicked:function(){
    	console.log("clicked");
    	titleTxt.visible = true;
    	titleBg1.visible = true;
    	titleBg2.visible = true;
    	startBtn.visible = true;
    	langCheckBtn.visible = true;
    	player1.visible=false;
    	player2.visible=false;
    	staticDice.visible=false;
    	/*two.visible = false;
    	five.visible = false;*/
    },
    langChecked:function(){
    	langCheckBtn.frame=(checked) ? 1 : 0;
    	checked=!checked;
    },
    singlePlayer:function () {
    	titleBg2.setFrames(1,0,0);
    	console.log(titleBg1)
    	if(titleBg1.texture.frame.x==0){
    		titleBg1.setFrames(0,2,0);
    		playerCheck=true;
    	}
    	else{
    		titleBg1.setFrames(1,0,0);
    		playerCheck=false;
    	}
    },
    twoPlayer:function(){
    	titleBg1.setFrames(1,0,0);
    	if(titleBg2.frame==0){
    		titleBg2.setFrames(0,2,0);
    		playerCheck=true;
    	}
    	else{
    		titleBg2.setFrames(1,0,0);
    		playerCheck=false;
    	}
    },
    rollDice:function(){
    	var roll = staticDice.animations.add('roll');
    	var myArray = [1, 7, 43, 31, 19, 13]; 
    	var rand = myArray[Math.floor(Math.random() * myArray.length)];
    	//console.log(rand);
	    roll.enableUpdate = true;
	    //roll.onUpdate.add(this.onUpdate, this);
	    staticDice.animations.play('roll', 50, true);
	    //text = game.add.text(300, 264, "Frame 1", { font: "28px Arial", fill: "#ff0044" });
	    setTimeout(function(){
	    	staticDice.animations.stop();
	    	staticDice.frame=rand;
	    },3000);
    }
    /*,
    onUpdate:function(anim, frame) {
    	text.text = 'Frame ' + frame.index;
	}*/
    
}
    	
