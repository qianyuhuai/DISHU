class Four extends egret.Sprite {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.vvv, this);
    }
    private static NUM: number = 3;
    private _tuBox: Array<egret.Bitmap>;
    private _tuMotion: Array<number>;
    private _iMotionMode: number = 50;
    private _iNom: number;
    private _txInfo: egret.TextField;
    private _shape: egret.Shape;
    private _one: egret.Sprite;
    private _two: egret.Sprite;
    private _three: egret.Sprite;
    private _maskOne: egret.Shape;
    private _timer: egret.Timer;
    private _textInfo: egret.TextField;
    private static _txNum: number = 0;
    private bind:egret.Bitmap;
    private _dot:egret.Bitmap;
    private laotou:LangTou;
    
    
    private vvv(evt: egret.Event): void {
        

        //创建计时器
        this._timer = new egret.Timer(1000, 20);
        //注册时间侦听器
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this._timer.start();

        // var bmd: egret.BitmapData = evt.currentTarget.data;
        this._tuBox = new Array<egret.Bitmap>();
        this._one = new egret.Sprite();
        this._two = new egret.Sprite();
        this._three = new egret.Sprite();
        for (var i = 0; i < Four.NUM; ++i) {
            this.bind = new egret.Bitmap();
            this._shape = new egret.Shape();
            this.bind.texture = RES.getRes("mole_1_png");
            this.bind.width = 100;
            this.bind.height = 180;
            this.bind.touchEnabled = true;
            // this.bind.addEventListener(egret.TouchEvent.TOUCH_TAP, this.vcvc, this);
            this._tuBox.push(this.bind);

            this._shape.graphics.beginFill(0xff0000);
            this._shape.width = 120;
            this._shape.height = 200;
        }
        this.planRdmMotion();
        this._tuBox[this._tuMotion[0]].x = 0;
        this._tuBox[this._tuMotion[0]].y = 180;
        this._tuBox[this._tuMotion[1]].x = 0;
        this._tuBox[this._tuMotion[1]].y = 180;
        this._tuBox[this._tuMotion[2]].x = 0;
        this._tuBox[this._tuMotion[2]].y = 180;

        this._one.width = 100;
        this._one.height = 360;
        this.addChild(this._one);
        this._one.x = 75;
        this._one.y = 420;
        this._maskOne = new egret.Shape();
        this._maskOne.graphics.beginFill(0xff0000);
        this._maskOne.graphics.drawRect(0, 0, 100, 180);
        this._maskOne.graphics.endFill();
        this._one.addChild(this._maskOne);
        this._one.mask = this._maskOne;
        this._one.addChild(this._tuBox[this._tuMotion[0]]);

        this._two.width = 100;
        this._two.height = 360;
        this.addChild(this._two);
        this._two.x = 270;
        this._two.y = 420;
        this._maskOne = new egret.Shape();
        this._maskOne.graphics.beginFill(0xff0000);
        this._maskOne.graphics.drawRect(0, 0, 100, 180);
        this._maskOne.graphics.endFill();
        this._two.addChild(this._maskOne);
        this._two.mask = this._maskOne;
        this._two.addChild(this._tuBox[this._tuMotion[1]]);

        this._three.width = 100;
        this._three.height = 360;
        this.addChild(this._three);
        this._three.x = 460;
        this._three.y = 420;
        this._maskOne = new egret.Shape();
        this._maskOne.graphics.beginFill(0xff0000);
        this._maskOne.graphics.drawRect(0, 0, 100, 180);
        this._maskOne.graphics.endFill();
        this._three.addChild(this._maskOne);
        this._three.mask = this._maskOne;
        this._three.addChild(this._tuBox[this._tuMotion[2]]);

        this._textInfo = new egret.TextField();
        this.addChild(this._textInfo);

        this.laotou = new LangTou();
        this.addChild(this.laotou);
        this.laotou.visible = false;
        
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.xxx,this);
    }

    // function vzvz(evt:egret.TouchEvent){
    //         this.addChild(laotou);
    //     }
    //     function xxx(){
    //         egret.Tween.get(laotou).to({visible:true},10);
    //         console.log(evt.stageX)
    //     }
    private xxx(evt:egret.TouchEvent):void{
        this.laotou.visible = true;
        this.laotou.x = evt.stageX;
        this.laotou.y = evt.stageY;
        this.laotou.anchorOffsetX = this.laotou.width/2;
        this.laotou.anchorOffsetY = this.laotou.height/2;
        egret.Tween.get(this.laotou).to({rotation:-30},300).to({rotation:0},300).call(()=>{
            this.laotou.visible = false;
        });
    }

    private timerFunc(evt:egret.Event):void {
        var j = 0;
        var i = Math.floor(Four.NUM * Math.random());
        console.log(i);
        egret.Tween.get(this._tuBox[this._tuMotion[i]]).to({ x: 0, y: 0 }, 800)
            .call(() => {
                // this._timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
                this._timer.stop();
                this._tuBox[this._tuMotion[i]].touchEnabled = true;
                this._tuBox[this._tuMotion[i]].addEventListener(egret.TouchEvent.TOUCH_TAP, papapa, this);
                function papapa() {
                    // this._dot.visible = true;
                    Four._txNum += 20;
                    this._textInfo.text = '';
                    this._textInfo.text = Four._txNum.toString();
                    this._tuBox[this._tuMotion[i]].removeEventListener(egret.TouchEvent.TOUCH_TAP, papapa, this);
                    
                }
                egret.Tween.get(this._tuBox[this._tuMotion[i]]).to({ x: 0, y: 0 }, 1000)
                    .to({ x: 0, y: 180 }, 800).call(() => {
                        this._timer.start();
                    }).wait(0);
            }).wait(0);
    }

    private timerComFunc() {
        console.log('游戏结束!');
        this._timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    }
    
    private planRdmMotion(): void {
        this._tuMotion = new Array<number>();
        for (var i = 0; i < Four.NUM; ++i) {
            this._tuMotion.push(i);
        }
        // this._tuMotion.push( Math.floor( Four.NUM * Math.random() ) );
        // this._tuMotion.push( Math.floor( Four.NUM * Math.random() ) );
        // this._tuMotion.push( Math.floor( Four.NUM * Math.random() ) );
    }

    private vcvc(evt: egret.TouchEvent): void {
        // this.bind.texture = RES.getRes("mole_thump4_png");
        // this._tuBox.push(this.bind);
    }
}