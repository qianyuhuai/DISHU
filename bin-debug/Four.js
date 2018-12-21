var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Four = (function (_super) {
    __extends(Four, _super);
    function Four() {
        var _this = _super.call(this) || this;
        _this._iMotionMode = 50;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.vvv, _this);
        return _this;
    }
    Four.prototype.vvv = function (evt) {
        //创建计时器
        this._timer = new egret.Timer(1000, 20);
        //注册时间侦听器
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this._timer.start();
        // var bmd: egret.BitmapData = evt.currentTarget.data;
        this._tuBox = new Array();
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
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.xxx, this);
    };
    // function vzvz(evt:egret.TouchEvent){
    //         this.addChild(laotou);
    //     }
    //     function xxx(){
    //         egret.Tween.get(laotou).to({visible:true},10);
    //         console.log(evt.stageX)
    //     }
    Four.prototype.xxx = function (evt) {
        var _this = this;
        this.laotou.visible = true;
        this.laotou.x = evt.stageX;
        this.laotou.y = evt.stageY;
        this.laotou.anchorOffsetX = this.laotou.width / 2;
        this.laotou.anchorOffsetY = this.laotou.height / 2;
        egret.Tween.get(this.laotou).to({ rotation: -30 }, 300).to({ rotation: 0 }, 300).call(function () {
            _this.laotou.visible = false;
        });
    };
    Four.prototype.timerFunc = function (evt) {
        var _this = this;
        var j = 0;
        var i = Math.floor(Four.NUM * Math.random());
        console.log(i);
        egret.Tween.get(this._tuBox[this._tuMotion[i]]).to({ x: 0, y: 0 }, 800)
            .call(function () {
            // this._timer.removeEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
            _this._timer.stop();
            _this._tuBox[_this._tuMotion[i]].touchEnabled = true;
            _this._tuBox[_this._tuMotion[i]].addEventListener(egret.TouchEvent.TOUCH_TAP, papapa, _this);
            function papapa() {
                // this._dot.visible = true;
                Four._txNum += 20;
                this._textInfo.text = '';
                this._textInfo.text = Four._txNum.toString();
                this._tuBox[this._tuMotion[i]].removeEventListener(egret.TouchEvent.TOUCH_TAP, papapa, this);
            }
            egret.Tween.get(_this._tuBox[_this._tuMotion[i]]).to({ x: 0, y: 0 }, 1000)
                .to({ x: 0, y: 180 }, 800).call(function () {
                _this._timer.start();
            }).wait(0);
        }).wait(0);
    };
    Four.prototype.timerComFunc = function () {
        console.log('游戏结束!');
        this._timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
    };
    Four.prototype.planRdmMotion = function () {
        this._tuMotion = new Array();
        for (var i = 0; i < Four.NUM; ++i) {
            this._tuMotion.push(i);
        }
        // this._tuMotion.push( Math.floor( Four.NUM * Math.random() ) );
        // this._tuMotion.push( Math.floor( Four.NUM * Math.random() ) );
        // this._tuMotion.push( Math.floor( Four.NUM * Math.random() ) );
    };
    Four.prototype.vcvc = function (evt) {
        // this.bind.texture = RES.getRes("mole_thump4_png");
        // this._tuBox.push(this.bind);
    };
    Four.NUM = 3;
    Four._txNum = 0;
    return Four;
}(egret.Sprite));
__reflect(Four.prototype, "Four");
