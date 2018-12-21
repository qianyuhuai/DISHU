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
var One = (function (_super) {
    __extends(One, _super);
    function One() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.loaderGou, _this);
        return _this;
    }
    One.prototype.loaderGou = function (evt) {
        var sky = this.createBitmapByName("back_loading_png");
        this.addChild(sky);
        sky.width = this.stage.stageWidth;
        sky.height = this.stage.stageHeight;
        var tu = this.createBitmapByName("back_s_banner_png");
        this.addChild(tu);
        tu.width = this.stage.width / 2;
        tu.height = 150;
        tu.x = this.stage.width / 2 - tu.width / 2;
        tu.y = 100;
        tu.touchEnabled = true;
        tu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oddTu, this);
    };
    One.prototype.oddTu = function (evt) {
        this.parent.addChild(new Two());
        this.parent.removeChild(this);
    };
    One.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return One;
}(egret.Sprite));
__reflect(One.prototype, "One");
