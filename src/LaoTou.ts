class LangTou extends egret.Sprite{
    public constructor(){
        super();
        this.mbmb();
    }
    private lt:egret.Bitmap;
    private mbmb(){
        this.lt = new egret.Bitmap();
        this.lt.texture = RES.getRes("1_jpg");
        this.addChild(this.lt);
        this.lt.width = 80;
        this.lt.height = 120;
        egret.Tween.get(this.lt).to({rorarion:30},1000);//.call(()=>{this.lt.visible = false})
    }
}