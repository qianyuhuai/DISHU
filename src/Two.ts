class Two extends egret.Sprite{
    public constructor(){
        super();
        // this.aaa();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.aaa,this);
    }
    private aaa(){
        let shang = this.createBitmapByName("grass_upper_png");
        this.addChild(shang);
        shang.width = egret.MainContext.instance.stage.stageWidth;
        shang.height = egret.MainContext.instance.stage.stageHeight/2;
        shang.x = 0;
        shang.y = 0;

        let xia = this.createBitmapByName("grass_lower_png");
        this.addChild(xia);
        xia.width = egret.MainContext.instance.stage.stageWidth;
        xia.height = egret.MainContext.instance.stage.stageHeight/2;
        xia.x = 0;
        xia.y = egret.MainContext.instance.stage.stageHeight/2;

        // var three : Three = new Three();
        // this.addChild(three);

        //Timer事件
        var four: Four = new Four();
        this.addChild(four);

        //帧事件
        // var five :Five = new Five();
        // this.addChild(five);
    }


    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}