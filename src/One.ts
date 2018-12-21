class One extends egret.Sprite{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.loaderGou,this);
    }
    private loaderGou(evt:egret.Event):void{
        let sky = this.createBitmapByName("back_loading_png");
        this.addChild(sky);
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;

        let tu = this.createBitmapByName("back_s_banner_png");
        this.addChild(tu);
        tu.width = this.stage.width / 2;
        tu.height = 150;
        tu.x = this.stage.width / 2 - tu.width / 2;
        tu.y = 100;
        tu.touchEnabled = true;
        tu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.oddTu,this);
    }
    private oddTu(evt:egret.TouchEvent):void{
        this.parent.addChild(new Two());
        this.parent.removeChild(this);
    }
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}