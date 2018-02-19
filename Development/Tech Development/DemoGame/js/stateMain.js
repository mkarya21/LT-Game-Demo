var captionBg,homeBtn,restartBtn,audioBtn,resizeBtn,startBtn,langCheckBtn,titleTxt,titleBg,two,three,four,five,six,seven,eight,nine,checked=true;
var StateMain={    
   preload:function()
    {
       //load all images
       StateMain.load.image('bg', 'assets/images/bg.png');
       StateMain.load.image('c_bg', 'assets/images/caption-bg-1.png');
       StateMain.load.image('titleTxt', 'assets/images/bim-logo-420x50.png');
       StateMain.load.image('titleBg', 'assets/images/coming-soon.jpg');
       StateMain.load.spritesheet('homeImg', 'assets/images/home.png',100,100);
       StateMain.load.spritesheet('restartImg', 'assets/images/restart.png',100,100);
       StateMain.load.spritesheet('audioImg', 'assets/images/audio.png',100,100);
       StateMain.load.spritesheet('resizeImg', 'assets/images/fullscreen.png',100,100);
       StateMain.load.spritesheet('startImg', 'assets/images/start-red.png',400,112);
       StateMain.load.spritesheet('langImg', 'assets/images/espanol-check.png',300,70);
       StateMain.load.spritesheet('numbers', 'assets/images/block-number-sprite-navy.png',210,200);
    },
    
    create:function()
    {
    	game.add.sprite(0,0,'bg');
    	titleTxt = game.add.sprite(200,200,'titleTxt');
    	titleTxt.scale.setTo(0.5);
    	titleBg = game.add.sprite(game.world.centerX - 110,game.world.centerY - 110, 'titleBg');
    	titleBg.scale.setTo(0.5);
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
    	two = game.add.button(100,100, 'numbers',this.twoClicked,this);
    	two.frame= 2;
    	two.scale.setTo(0.3);
    	two.visible = false;
    	five = game.add.button(400,100, 'numbers',this.fiveClicked,this);
    	five.frame= 5;
    	five.scale.setTo(0.3);
    	five.visible = false;
    },
    
    update:function()
    {       

    },
    startClicked:function(){
    	console.log("clicked");
    	titleTxt.visible = false;
    	titleBg.visible = false;
    	startBtn.visible = false;
    	langCheckBtn.visible = false;
    	two.visible = true;
    	five.visible = true;
    },
    homeClicked:function(){
    	console.log("clicked");
    	titleTxt.visible = true;
    	titleBg.visible = true;
    	startBtn.visible = true;
    	langCheckBtn.visible = true;
    	two.visible = false;
    	five.visible = false;
    },
    langChecked:function(){
    	langCheckBtn.frame=(checked) ? 1 : 0;
    	checked=!checked;
    }
    
}