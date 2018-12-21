class Three extends egret.Sprite{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.bbb,this);
    }
    private timer = 50;
    private txInfo :egret.TextField;
    private spriteOne:egret.Sprite;
    private txTwofo:egret.TextField;
    private txThree:egret.TextField;
    private shp :egret.Shape;
    private one:egret.Sprite;
    private sum:egret.TextField;
    private sumSon=20;
    

    private bbb(evt:egret.Event):void{
        this.ppp();
        this.txInfo = new egret.TextField();
        let s= setInterval(()=>{
            if(this.timer>0){
                this.timer--;
                this.zxc();
                this.txInfo.text = this.timer.toString();
            }else{
                clearInterval(s);
                this.ccc();
                this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.bbb,this);
            }
        },1000);
        this.addChild(this.txInfo);
    }
    private zxc(){
        let aaa = this.createBitmapByName("mole_1_png");
        this.one.addChild(aaa);
        aaa.width = 100;
        aaa.height = 180;
        aaa.y = 120;
        aaa.x =5;
        egret.Tween.get(aaa).to({x:5,y:0},500)
        .call(()=>{
            egret.Tween.get(aaa).to({x:5,y:150},1000);
            aaa.touchEnabled = true;
            aaa.addEventListener(egret.TouchEvent.TOUCH_TAP,sasa,this);
        }).wait(500);
        this.sum = new egret.TextField();
        function sasa(){
            this.sum.text = this.sumSon.toString();
            aaa.removeEventListener(egret.TouchEvent.TOUCH_TAP,sasa,this);
        }
        this.addChild(this.sum);
        this.sum.x = 200;
    }
   
    private ppp(){
        this.one = new egret.Sprite();
        this.one.width = 120;
        this.one.height = 300;
        this.addChild(this.one);
        this.shp = new egret.Shape();
        this.shp.graphics.beginFill(0x0000ff);
        this.shp.graphics.drawRect(0,0,120,300);
        this.shp.graphics.endFill();
        this.shp.alpha = 0;
        this.one.addChild(this.shp);
        this.one.x = 65;
        this.one.y = this.stage.stageHeight/2 -150;
        
        var circle:egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawRect(0,0,120,150);
        circle.graphics.endFill();
        this.one.addChild(circle);
        this.one.mask = circle;

    }

    private ccc(){
        this.spriteOne =new egret.Sprite();
        this.spriteOne.width = egret.MainContext.instance.stage.stageWidth/2;
        this.spriteOne.height = 250;
        this.spriteOne.x = this.stage.stageWidth / 2 - this.spriteOne.width /2;
        this.spriteOne.y = this.stage.stageHeight /2 - this.spriteOne.height/2;
        this.addChild(this.spriteOne);
        var spe : egret.Shape = new egret.Shape();
        spe.graphics.beginFill(0xff00ff);
        spe.graphics.drawRect(0,0,this.spriteOne.width,this.spriteOne.height);
        spe.graphics.endFill();
        spe.alpha = 0.8;
        this.spriteOne.addChild(spe);

        this.txThree = new egret.TextField();
        this.txThree.text = "返回首页";
        this.spriteOne.addChild(this.txThree);
        this.txThree.width =  this.spriteOne.width;
        this.txThree.height = this.spriteOne.height;
        this.txThree.textAlign = egret.HorizontalAlign.CENTER;
        this.txThree.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.txThree.touchEnabled = true;
        this.txThree.addEventListener(egret.TouchEvent.TOUCH_TAP,this.abc,this);
    }
    private abc(evt:egret.TouchEvent):void{
        this.parent.addChild(new Main());
    }
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}