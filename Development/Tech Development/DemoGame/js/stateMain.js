var captionBg,homeBtn,restartBtn,audioBtn,resizeBtn,startBtn,langCheckBtn,titleTxt,titleBg1,titleBg2,checked=true,turn=true,problemSelected,tileName,tileFrame,isScaled=false;
var player1,player2,staticDice,text,multiplayer=false,p2Random; 
var p1D1,p1D2,p1D3,p1D4,p1D5,p1D6;
var p1D=["p1D1","p1D2","p1D3","p1D4","p1D5","p1D6"];
var p2D1,p2D2,p2D3,p2D4,p2D5,p2D6;
var p2D=["p2D1","p2D2","p2D3","p2D4","p2D5","p2D6"];
var ans=["ans1","ans2","ans3","ans4","ans5","ans6","ans7","ans8","ans9"];
var ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9;
var table=["r1c1","r1c2","r1c3","r1c4","r1c5","r1c6",
			"r2c1","r2c2","r2c3","r2c4","r2c5","r2c6",
			"r3c1","r3c2","r3c3","r3c4","r3c5","r3c6",
			"r4c1","r4c2","r4c3","r4c4","r4c5","r4c6",
			"r5c1","r5c2","r5c3","r5c4","r5c5","r5c6",
			"r6c1","r6c2","r6c3","r6c4","r6c5","r6c6"];
var tableValue=[6,2,4,3,1,5,
				4,6,9,5,8,2,
				4,7,6,3,5,2,
				4,2,5,3,6,8,
				7,2,4,8,6,5,
				3,7,2,6,4,5];
var r1c1,r1c2,r1c3,r1c4,r1c5,r1c6;
var r2c1,r2c2,r2c3,r2c4,r2c5,r2c6;
var r3c1,r3c2,r3c3,r3c4,r3c5,r3c6;
var r4c1,r4c2,r4c3,r4c4,r4c5,r4c6;
var r5c1,r5c2,r5c3,r5c4,r5c5,r5c6;
var r6c1,r6c2,r6c3,r6c4,r6c5,r6c6;
var i,j,k=0;
var p1DLeft=50,p1DTop=200;
var p2DLeft=450,p2DTop=200;
var ansLeft=150,ansTop=150;
var rowLeft=150,rowTop=220;
var diceImgArray = [1, 7, 43, 31, 19, 13];
var music,isPlaying=false;
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
       StateMain.load.spritesheet('p1D','assets/images/dice-roll-200x200-spritesheet.png',200,200);
       StateMain.load.spritesheet('topBarNumber','assets/images/blank-space-number-sprite.png',64,64);
       StateMain.load.spritesheet('tableRow','assets/images/tile-number-sprite.png',100,100);
       StateMain.load.spritesheet('tile','assets/images/tile-sprite-new',100,100);
       StateMain.load.spritesheet('tile2','assets/images/tile-color-sprite',100,100);
       StateMain.load.audio('guitar', ['assets/audio/guitar-maracas.mp3', 'assets/audio/guitar-maracas.ogg']);
    },
    
    create:function()
    {
    	// Stretch to fill
	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	    // Keep original size
	    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

	    // Maintain aspect ratio
	    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	game.add.sprite(0,0,'bg');
    	titleTxt = game.add.sprite(50,50,'titleTxt');
    	titleTxt.scale.setTo(0.5);
    	titleBg1 = game.add.button(game.world.centerX-200,game.world.centerY-100, 'titleBg1',this.singlePlayer,this,1,0,0);
    	titleBg1.scale.setTo(0.5);
    	titleBg2 = game.add.button(game.world.centerX+50,game.world.centerY-100, 'titleBg2',this.twoPlayer,this,1,0,0);
    	titleBg2.scale.setTo(0.5);
    	titleBg2.game.canvas.style.cursor = "cursor";
    	captionBg = game.add.sprite(-7,0,'c_bg');
    	captionBg.scale.setTo(0.3);
    	homeBtn = game.add.button(0,0, 'homeImg',this.homeClicked,this,1,0,0);
    	homeBtn.scale.setTo(0.5);
    	homeBtn.game.canvas.style.cursor = "cursor";
    	restartBtn = game.add.button(40,0, 'restartImg',this.restartClicked,this,1,0,0);
    	restartBtn.scale.setTo(0.5);
    	restartBtn.inputEnabled=false;
    	restartBtn.game.canvas.style.cursor = "default";
    	audioBtn = game.add.button(500,0, 'audioImg',this.audioClicked,this,1,0,0);
    	audioBtn.scale.setTo(0.5);
    	resizeBtn = game.add.button(550,0, 'resizeImg',this.resizeClicked,this,1,0,0);
    	resizeBtn.scale.setTo(0.5);
    	startBtn = game.add.button(game.world.centerX - 85,game.world.centerY + 210, 'startImg',this.startClicked,this,1,0,0);
    	startBtn.scale.setTo(0.5);
    	startBtn.inputEnabled=false;
    	startBtn.game.canvas.style.cursor = "default";
    	langCheckBtn = game.add.button(game.world.centerX -50,game.world.centerY + 290, 'langImg',this.langChecked,this);
    	langCheckBtn.scale.setTo(0.5);
    	langCheckBtn.game.canvas.style.cursor = "cursor";
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
    	for(i=0;i<p1D.length;i++){
    		var name=p1D[i];
    		p1D[i]=game.add.button(p1DLeft,p1DTop,'p1D',this.selectRow,this);
    		p1D[i].animations.add(name);
    		p1DTop+=100;
    		p1D[i].scale.setTo(0.5);
    		p1D[i].frame=diceImgArray[i];
    		p1D[i].visible=false;
    		p1D[i].inputEnabled=false;
    		p1D[i].game.canvas.style.cursor = "default";
    		p1D[i].alpha=0.5;
    	}
    	for(i=0;i<p2D.length;i++){
    		var name=p2D[i];
    		p2D[i]=game.add.button(p2DLeft,p2DTop,'p1D',this.selectRow,this);
    		p2D[i].animations.add(name);
    		p2DTop+=100;
    		p2D[i].scale.setTo(0.5);
    		p2D[i].frame=diceImgArray[i];
    		p2D[i].visible=false;
    		p2D[i].inputEnabled=false;
    		p2D[i].game.canvas.style.cursor = "default";
    		p2D[i].alpha=0.5;
    	}
    	for(i=0;i<ans.length;i++){
    		var name=ans[i];
    		ans[i]=game.add.button(ansLeft,ansTop,'topBarNumber',this.checkAnswer,this);
    		ans[i].animations.add(name);
    		ansLeft+=30;
    		ans[i].scale.setTo(0.5);
    		ans[i].frame=i+1;
    		ans[i].visible=false;
    		ans[i].inputEnabled=false;
    		ans[i].game.canvas.style.cursor = "default";
    		ans[i].alpha=0.5;
    	}
    	for(i=0;i<p1D.length;i++){
    		for(j=0;j<p1D.length;j++){
    			var row="r"+(i+1)+"c"+(j+1);
    			table[k]=row;
    			table[k] = game.add.button(rowLeft,rowTop,'tableRow',this.selectProblem,this);
		    	table[k].scale.setTo(0.5);
		    	table[k].animations.add(tableValue[k]);
		    	table[k].frame=tableValue[k];
		    	table[k].visible=false;
		    	table[k].inputEnabled=false;
    			table[k].game.canvas.style.cursor = "default";
    			table[k].alpha=0.5;
		    	rowLeft+=50;
		    	k++;
    		}
    		rowTop+=100;
    		rowLeft=150;
    	}
    	music = game.add.audio('guitar');
    	music.play();
    	music.onStop.add(this.musicStopped, this);
    	isPlaying=true;
    },
    render:function() {
    	//game.debug.soundInfo(music, 20, 32);
	},
    update:function()
    {       

    },
    audioClicked:function(){
    	if(isPlaying)
    		audioBtn.setFrames(3,2,0);
    	else
    		audioBtn.setFrames(1,0,0);
    	music.mute = isPlaying;
    	isPlaying=!isPlaying;
    },
    musicStopped:function(){
    	music.restart();
    },
    resizeClicked:function(){
    	if(isScaled){
    		resizeBtn.setFrames(1,0,0);
    		game.scale.stopFullScreen();
    	}
    	else{
    		resizeBtn.setFrames(3,2,0);
    		game.scale.startFullScreen(false);
    	}
    	isScaled=!isScaled;
    },
    startClicked:function(){
	    titleTxt.visible = false;
	    titleBg1.visible = false;
	    titleBg2.visible = false;
	    startBtn.visible = false;
	    langCheckBtn.visible = false;
	    player1.visible=true;
	    player2.visible=true;
	    staticDice.visible=true;
	    for(i=0;i<p1D.length;i++){
	    	p1D[i].visible=true;
    	}
	    for(i=0;i<p2D.length;i++){
	    	p2D[i].visible=true;
    	}
	    for(i=0;i<ans.length;i++){
	    	ans[i].visible=true;
    	}
    	for(i=0;i<table.length;i++){
	    	table[i].visible=true;
    	}
    },
    homeClicked:function(){
    	//console.log("Homeclicked");
    	titleTxt.visible = true;
    	titleBg1.visible = true;
    	titleBg1.setFrames(1,0,0);
    	titleBg2.visible = true;
    	titleBg2.setFrames(1,0,0);
    	startBtn.visible = true;
    	langCheckBtn.visible = true;
    	player1.visible=false;
    	player2.visible=false;
    	staticDice.visible=false;
    	for(i=0;i<p1D.length;i++){
	    	p1D[i].visible=false;
    	}
	    for(i=0;i<p2D.length;i++){
	    	p2D[i].visible=false;
    	}
	    for(i=0;i<ans.length;i++){
	    	ans[i].visible=false;
    	}
    	for(i=0;i<table.length;i++){
	    	table[i].visible=false;
    	}
    	startBtn.inputEnabled=false;
    	startBtn.game.canvas.style.cursor = "default";
    	music.restart();
    },
    langChecked:function(){
    	langCheckBtn.frame=(checked) ? 1 : 0;
    	checked=!checked;
    },
    singlePlayer:function () {
    	multiplayer=false;
    	console.log("multiplayer",multiplayer);
    	titleBg2.setFrames(1,0,0);
    	if(titleBg1.texture.frame.x==0){
    		titleBg1.setFrames(0,2,0);
    	}
    	else{
    		titleBg1.setFrames(1,0,0);
    	}
    	startBtn.inputEnabled=true;
    	startBtn.game.canvas.style.cursor = "cursor";
    },
    twoPlayer:function(){
    	multiplayer=true;
    	console.log("multiplayer",multiplayer);
    	titleBg1.setFrames(1,0,0);
    	if(titleBg2.frame==0){
    		titleBg2.setFrames(0,2,0);
    	}
    	else{
    		titleBg2.setFrames(1,0,0);
    	}
    	startBtn.inputEnabled=true;
    	startBtn.game.canvas.style.cursor = "cursor";
    },
    rollDice:function(){
    	var activeDice;
    	staticDice.inputEnabled=false;
    	this.game.canvas.style.cursor = "default";
    	var roll = staticDice.animations.add('roll');
    	var diceNumber=Math.floor(Math.random() * diceImgArray.length);
    	var rand = diceImgArray[diceNumber];
	    staticDice.animations.play('roll', 50, true);
	    setTimeout(function(){
	    	staticDice.animations.stop();
	    	staticDice.frame=rand;
	    	if(turn){
	    		activeDice=p1D;
	    		tileName='tile';
	    		tileFrame=0;
	    	}
	    	else{
	    		activeDice=p2D;
	    		tileName='tile2';
	    		tileFrame=3;
	    	}
	    	StateMain.activePlayerColumn(activeDice,diceNumber);
	    },3000);
    },
    selectRow:function(playerDice){
    	playerDice.inputEnabled=false;
    	playerDice.game.canvas.style.cursor = "default";
    	playerDice.alpha=0.5;
    	var element=playerDice.animations.currentAnim.name;
    	element = parseInt(element.slice(-1));
    	element = (element-1)*p1D.length;
    		for(j=0;j<p1D.length;j++){
		    	table[element].inputEnabled=true;
    			table[element].game.canvas.style.cursor = "cursor";
    			table[element].alpha=1;
		    	element++;
    		}
    },
    activePlayerColumn:function(player,diceNumber){
	    	if(turn || multiplayer){
	    		player[diceNumber].inputEnabled=true;
    			player[diceNumber].game.canvas.style.cursor = "cursor";
    		}
    		else{
    			var rangeMin= diceNumber*6;
    			var rangeMax = rangeMin+5;
    			p2Random = Math.floor(Math.random()*(rangeMax-rangeMin+1)+rangeMin);
    			console.log("random=",p2Random);
    			StateMain.selectProblem(table[p2Random]);
    		}
    		player[diceNumber].alpha=1;
    },
    selectProblem:function(problemSelector){
    	for(i=0;i<table.length;i++){
	    	table[i].alpha=0.5;
    	}
    	problemSelector.alpha=1;
    	problemSelected=problemSelector;
    	for(i=0;i<ans.length;i++){
    		ans[i].alpha=0.5;
	    	if(turn || multiplayer){
	    		ans[i].inputEnabled=true;
    			ans[i].game.canvas.style.cursor = "cursor";
    		}
    		else{
    			var userAns=parseInt(tableValue[p2Random])-1;
    			StateMain.checkAnswer(ans[userAns]);
    		}
    	}
    },checkAnswer:function(userAns){
    		var problem=problemSelected.animations.currentAnim.name;
    		var userAnswer=userAns.animations.currentAnim.name;
    		userAnswer=parseInt(userAnswer.slice(-1));
    		if(problem==userAnswer){
    			turn=!turn;
    			userAns.alpha=1;
    			problemSelected.loadTexture(tileName,tileFrame);
    			problemSelected.inputEnabled=false;
    			problemSelected.game.canvas.style.cursor = "default";
    			setTimeout(function() {
    				player1.frame=turn ? 1 : 0;
    				player2.frame=!turn ? 1 : 0;
    				for(i=0;i<ans.length;i++){
	    				ans[i].alpha=0.5;
    				}
    				if(turn || multiplayer){
    					staticDice.inputEnabled=true;
    					staticDice.game.canvas.style.cursor = "cursor";
    				}
    				else{
    					if(!turn)
    						StateMain.rollDice();
    				}
    				for(i=0;i<p2D.length;i++){
	    				p2D[i].alpha=0.5;
    				}
    			},1000);
    		}
    		else
    			userAns.alpha=0.1;
    }    
}
    	
