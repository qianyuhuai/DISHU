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
var Three = (function (_super) {
    __extends(Three, _super);
    function Three() {
        var _this = _super.call(this) || this;
        _this.timer = 50;
        _this.sumSon = 20;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.bbb, _this);
        return _this;
    }
    Three.prototype.bbb = function (evt) {
        var _this = this;
        this.ppp();
        this.txInfo = new egret.TextField();
        var s = setInterval(function () {
            if (_this.timer > 0) {
                _this.timer--;
                _this.zxc();
                _this.txInfo.text = _this.timer.toString();
            }
            else {
                clearInterval(s);
                _this.ccc();
                _this.removeEventListener(egret.Event.ADDED_TO_STAGE, _this.bbb, _this);
            }
        }, 1000);
        this.addChild(this.txInfo);
    };
    Three.prototype.zxc = function () {
        var _this = this;
        var aaa = this.createBitmapByName("mole_1_png");
        this.one.addChild(aaa);
        aaa.width = 100;
        aaa.height = 180;
        aaa.y = 120;
        aaa.x = 5;
        egret.Tween.get(aaa).to({ x: 5, y: 0 }, 500)
            .call(function () {
            egret.Tween.get(aaa).to({ x: 5, y: 150 }, 1000);
            aaa.touchEnabled = true;
            aaa.addEventListener(egret.TouchEvent.TOUCH_TAP, sasa, _this);
        }).wait(500);
        this.sum = new egret.TextField();
        function sasa() {
            this.sum.text = this.sumSon.toString();
            aaa.removeEventListener(egret.TouchEvent.TOUCH_TAP, sasa, this);
        }
        this.addChild(this.sum);
        this.sum.x = 200;
    };
    Three.prototype.ppp = function () {
        this.one = new egret.Sprite();
        this.one.width = 120;
        this.one.height = 300;
        this.addChild(this.one);
        this.shp = new egret.Shape();
        this.shp.graphics.beginFill(0x0000ff);
        this.shp.graphics.drawRect(0, 0, 120, 300);
        this.shp.graphics.endFill();
        this.shp.alpha = 0;
        this.one.addChild(this.shp);
        this.one.x = 65;
        this.one.y = this.stage.stageHeight / 2 - 150;
        var circle = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawRect(0, 0, 120, 150);
        circle.graphics.endFill();
        this.one.addChild(circle);
        this.one.mask = circle;
    };
    Three.prototype.ccc = function () {
        this.spriteOne = new egret.Sprite();
        this.spriteOne.width = egret.MainContext.instance.stage.stageWidth / 2;
        this.spriteOne.height = 250;
        this.spriteOne.x = this.stage.stageWidth / 2 - this.spriteOne.width / 2;
        this.spriteOne.y = this.stage.stageHeight / 2 - this.spriteOne.height / 2;
        this.addChild(this.spriteOne);
        var spe = new egret.Shape();
        spe.graphics.beginFill(0xff00ff);
        spe.graphics.drawRect(0, 0, this.spriteOne.width, this.spriteOne.height);
        spe.graphics.endFill();
        spe.alpha = 0.8;
        this.spriteOne.addChild(spe);
        this.txThree = new egret.TextField();
        this.txThree.text = "返回首页";
        this.spriteOne.addChild(this.txThree);
        this.txThree.width = this.spriteOne.width;
        this.txThree.height = this.spriteOne.height;
        this.txThree.textAlign = egret.HorizontalAlign.CENTER;
        this.txThree.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.txThree.touchEnabled = true;
        this.txThree.addEventListener(egret.TouchEvent.TOUCH_TAP, this.abc, this);
    };
    Three.prototype.abc = function (evt) {
        this.parent.addChild(new Main());
    };
    Three.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Three;
}(egret.Sprite));
__reflect(Three.prototype, "Three");
