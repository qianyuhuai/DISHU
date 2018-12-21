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
var Two = (function (_super) {
    __extends(Two, _super);
    function Two() {
        var _this = _super.call(this) || this;
        // this.aaa();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.aaa, _this);
        return _this;
    }
    Two.prototype.aaa = function () {
        var shang = this.createBitmapByName("grass_upper_png");
        this.addChild(shang);
        shang.width = egret.MainContext.instance.stage.stageWidth;
        shang.height = egret.MainContext.instance.stage.stageHeight / 2;
        shang.x = 0;
        shang.y = 0;
        var xia = this.createBitmapByName("grass_lower_png");
        this.addChild(xia);
        xia.width = egret.MainContext.instance.stage.stageWidth;
        xia.height = egret.MainContext.instance.stage.stageHeight / 2;
        xia.x = 0;
        xia.y = egret.MainContext.instance.stage.stageHeight / 2;
        // var three : Three = new Three();
        // this.addChild(three);
        //Timer事件
        var four = new Four();
        this.addChild(four);
        //帧事件
        // var five :Five = new Five();
        // this.addChild(five);
    };
    Two.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Two;
}(egret.Sprite));
__reflect(Two.prototype, "Two");
