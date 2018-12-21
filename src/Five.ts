class Five extends egret.Sprite{
    public constructor(){
        super();
        this.once(egret.Event.ADDED_TO_STAGE,this.onLoad,this);
    }
    private star:egret.Bitmap;
    private speed:number = 0.05;
    private timeOnEnterFrame = 0;
    private onLoad(evt:egret.Event):void{
        var star:egret.Bitmap = new egret.Bitmap(RES.getRes('egret_icon_png'));
        this.addChild(star);
        this.star = star;
        this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
        this.timeOnEnterFrame = egret.getTimer();
    }
    private onEnterFrame(e:egret.Event){
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.timeOnEnterFrame = egret.getTimer();
        // console.log("onEnterFrame: ", (1000 / pass).toFixed(5));

        this.star.x += this.speed*pass;
        this.timeOnEnterFrame = egret.getTimer();

        if(this.star.x > 300)
            this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
    }
}