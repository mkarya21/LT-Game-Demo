var captionBg,homeBtn,restartBtn,audioBtn,resizeBtn,startBtn,langCheckBtn,titleTxt,titleBg1,titleBg2,checked=true,playerCheck=false;
var player1,player2,staticDice,text; 
var p1D1,p1D2,p1D3,p1D4,p1D5,p1D6;
var p1D=["p1D1","p1D2","p1D3","p1D4","p1D5","p1D6"];
var ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9;
var r1c1,r1c2,r1c3,r1c4,r1c5,r1c6;
var r2c1,r2c2,r2c3,r2c4,r2c5,r2c6;
var i;
var p1DLeft=50,p1DTop=200;
var diceImgArray = [1, 7, 43, 31, 19, 13]; 
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
    	for(i=0;i<p1D.length;i++){
    		var name=p1D[i];
    		p1D[i]=game.add.button(p1DLeft,p1DTop,'p1D',this.selectRow,this);
    		p1D[i].animations.add(name);
    		p1DTop+=100;
    		p1D[i].scale.setTo(0.5);
    		p1D[i].frame=diceImgArray[i];
    		p1D[i].visible=false;
    	}
    	/*p1D1 = game.add.button(50,200,'p1D',this.selectRow,this);
    	p1D1.scale.setTo(0.5);
    	p1D1.frame=1;
    	p1D1.visible=false;
    	p1D2 = game.add.button(50,300,'p1D',this.selectRow,this);
    	p1D2.scale.setTo(0.5);
    	p1D2.frame=7;
    	p1D2.visible=false;
    	p1D3 = game.add.button(50,400,'p1D',this.selectRow,this);
    	p1D3.scale.setTo(0.5);
    	p1D3.frame=43;
    	p1D3.visible=false;
    	p1D4 = game.add.button(50,500,'p1D',this.selectRow,this);
    	p1D4.scale.setTo(0.5);
    	p1D4.frame=31;
    	p1D4.visible=false;
    	p1D5 = game.add.button(50,600,'p1D',this.selectRow,this);
    	p1D5.scale.setTo(0.5);
    	p1D5.frame=19;
    	p1D5.visible=false;
    	p1D6 = game.add.button(50,700,'p1D',this.selectRow,this);
    	p1D6.scale.setTo(0.5);
    	p1D6.frame=13;
    	p1D6.visible=false;*/
    	p2D1 = game.add.button(450,200,'p1D',this.selectRow,this);
    	p2D1.scale.setTo(0.5);
    	p2D1.frame=1;
    	p2D1.visible=false;
    	p2D2 = game.add.button(450,300,'p1D',this.selectRow,this);
    	p2D2.scale.setTo(0.5);
    	p2D2.frame=7;
    	p2D2.visible=false;
    	p2D3 = game.add.button(450,400,'p1D',this.selectRow,this);
    	p2D3.scale.setTo(0.5);
    	p2D3.frame=43;
    	p2D3.visible=false;
    	p2D4 = game.add.button(450,500,'p1D',this.selectRow,this);
    	p2D4.scale.setTo(0.5);
    	p2D4.frame=31;
    	p2D4.visible=false;
    	p2D5 = game.add.button(450,600,'p1D',this.selectRow,this);
    	p2D5.scale.setTo(0.5);
    	p2D5.frame=19;
    	p2D5.visible=false;
    	p2D6 = game.add.button(450,700,'p1D',this.selectRow,this);
    	p2D6.scale.setTo(0.5);
    	p2D6.frame=13;
    	p2D6.visible=false;
    	ans1 = game.add.button(150,150,'topBarNumber',this.ansRow,this);
    	ans1.scale.setTo(0.5);
    	ans1.frame=1;
    	ans1.visible=false;
    	ans2 = game.add.button(180,150,'topBarNumber',this.ansRow,this);
    	ans2.scale.setTo(0.5);
    	ans2.frame=2;
    	ans2.visible=false;
    	ans3 = game.add.button(210,150,'topBarNumber',this.ansRow,this);
    	ans3.scale.setTo(0.5);
    	ans3.frame=3;
    	ans3.visible=false;
    	ans4 = game.add.button(240,150,'topBarNumber',this.ansRow,this);
    	ans4.scale.setTo(0.5);
    	ans4.frame=4;
    	ans4.visible=false;
    	ans5 = game.add.button(270,150,'topBarNumber',this.ansRow,this);
    	ans5.scale.setTo(0.5);
    	ans5.frame=5;
    	ans5.visible=false;
    	ans6 = game.add.button(300,150,'topBarNumber',this.ansRow,this);
    	ans6.scale.setTo(0.5);
    	ans6.frame=6;
    	ans6.visible=false;
    	ans7 = game.add.button(330,150,'topBarNumber',this.ansRow,this);
    	ans7.scale.setTo(0.5);
    	ans7.frame=7;
    	ans7.visible=false;
    	ans8 = game.add.button(360,150,'topBarNumber',this.ansRow,this);
    	ans8.scale.setTo(0.5);
    	ans8.frame=8;
    	ans8.visible=false;
    	ans9 = game.add.button(390,150,'topBarNumber',this.ansRow,this);
    	ans9.scale.setTo(0.5);
    	ans9.frame=9;
    	ans9.visible=false;
    	r1c1 = game.add.button(150,220,'tableRow',this.selectProblem,this);
    	r1c1.scale.setTo(0.5);
    	r1c1.frame=6;
    	r1c1.visible=false;
    	r1c2 = game.add.button(200,220,'tableRow',this.selectProblem,this);
    	r1c2.scale.setTo(0.5);
    	r1c2.frame=2;
    	r1c2.visible=false;
    	r1c3 = game.add.button(250,220,'tableRow',this.selectProblem,this);
    	r1c3.scale.setTo(0.5);
    	r1c3.frame=4;
    	r1c3.visible=false;
    	r1c4 = game.add.button(300,220,'tableRow',this.selectProblem,this);
    	r1c4.scale.setTo(0.5);
    	r1c4.frame=3;
    	r1c4.visible=false;
    	r1c5 = game.add.button(350,220,'tableRow',this.selectProblem,this);
    	r1c5.scale.setTo(0.5);
    	r1c5.frame=1;
    	r1c5.visible=false;
    	r1c6 = game.add.button(400,220,'tableRow',this.selectProblem,this);
    	r1c6.scale.setTo(0.5);
    	r1c6.frame=5;
    	r1c6.visible=false;
    	r2c1 = game.add.button(150,320,'tableRow',this.selectProblem,this);
    	r2c1.scale.setTo(0.5);
    	r2c1.frame=4;
    	r2c1.visible=false;
    	r2c2 = game.add.button(200,320,'tableRow',this.selectProblem,this);
    	r2c2.scale.setTo(0.5);
    	r2c2.frame=6;
    	r2c2.visible=false;
    	r2c3 = game.add.button(250,320,'tableRow',this.selectProblem,this);
    	r2c3.scale.setTo(0.5);
    	r2c3.frame=9;
    	r2c3.visible=false;
    	r2c4 = game.add.button(300,320,'tableRow',this.selectProblem,this);
    	r2c4.scale.setTo(0.5);
    	r2c4.frame=5;
    	r2c4.visible=false;
    	r2c5 = game.add.button(350,320,'tableRow',this.selectProblem,this);
    	r2c5.scale.setTo(0.5);
    	r2c5.frame=8;
    	r2c5.visible=false;
    	r2c6 = game.add.button(400,320,'tableRow',this.selectProblem,this);
    	r2c6.scale.setTo(0.5);
    	r2c6.frame=2;
    	r2c6.visible=false;
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
	    	for(i=0;i<p1D.length;i++){
	    		p1D[i].visible=true;
    		}
	    	/*p1D1.visible=true;
	    	p1D2.visible=true;
	    	p1D3.visible=true;
	    	p1D4.visible=true;
	    	p1D5.visible=true;
	    	p1D6.visible=true;*/
	    	p2D1.visible=true;
	    	p2D2.visible=true;
	    	p2D3.visible=true;
	    	p2D4.visible=true;
	    	p2D5.visible=true;
	    	p2D6.visible=true;
	    	ans1.visible=true;
	    	ans2.visible=true;
	    	ans3.visible=true;
	    	ans4.visible=true;
	    	ans5.visible=true;
	    	ans6.visible=true;
	    	ans7.visible=true;
	    	ans8.visible=true;
	    	ans9.visible=true;
	    	r1c1.visible=true;
	    	r1c2.visible=true;
	    	r1c3.visible=true;
	    	r1c4.visible=true;
	    	r1c5.visible=true;
	    	r1c6.visible=true;
	    	r2c1.visible=true;
	    	r2c2.visible=true;
	    	r2c3.visible=true;
	    	r2c4.visible=true;
	    	r2c5.visible=true;
	    	r2c6.visible=true;
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
    	for(i=0;i<p1D.length;i++){
	    		p1D[i].visible=false;
    		}
    	/*p1D1.visible=false;
	    p1D2.visible=false;
	    p1D3.visible=false;
	    p1D4.visible=false;
	    p1D5.visible=false;
	    p1D6.visible=false;*/
	    p2D1.visible=false;
	    p2D2.visible=false;
	    p2D3.visible=false;
	    p2D4.visible=false;
	    p2D5.visible=false;
	    p2D6.visible=false;
	    ans1.visible=false;
	    ans2.visible=false;
	    ans3.visible=false;
	    ans4.visible=false;
	    ans5.visible=false;
	    ans6.visible=false;
	    ans7.visible=false;
	    ans8.visible=false;
	    ans9.visible=false;
	    r1c1.visible=false;
	    r1c2.visible=false;
	    r1c3.visible=false;
	    r1c4.visible=false;
	    r1c5.visible=false;
	    r1c6.visible=false;
	    r2c1.visible=false;
	    r2c2.visible=false;
	    r2c3.visible=false;
	    r2c4.visible=false;
	    r2c5.visible=false;
	    r2c6.visible=false;
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
    	var rand = diceImgArray[Math.floor(Math.random() * diceImgArray.length)];
    	//console.log(rand);
	    roll.enableUpdate = true;
	    //roll.onUpdate.add(this.onUpdate, this);
	    staticDice.animations.play('roll', 50, true);
	    //text = game.add.text(300, 264, "Frame 1", { font: "28px Arial", fill: "#ff0044" });
	    setTimeout(function(){
	    	staticDice.animations.stop();
	    	staticDice.frame=rand;
	    },3000);
    },
    selectRow:function(anim){
    	console.log(anim.animations.currentAnim.name)
    	anim.inputEnabled = false;
    	this.game.canvas.style.cursor = "default";
    }
    /*,
    onUpdate:function(anim, frame) {
    	text.text = 'Frame ' + frame.index;
	}*/
    
}
    	
