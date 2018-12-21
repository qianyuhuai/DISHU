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
var Five = (function (_super) {
    __extends(Five, _super);
    function Five() {
        var _this = _super.call(this) || this;
        _this.speed = 0.05;
        _this.timeOnEnterFrame = 0;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
        return _this;
    }
    Five.prototype.onLoad = function (evt) {
        var star = new egret.Bitmap(RES.getRes('egret_icon_png'));
        this.addChild(star);
        this.star = star;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        this.timeOnEnterFrame = egret.getTimer();
    };
    Five.prototype.onEnterFrame = function (e) {
        var now = egret.getTimer();
        var time = this.timeOnEnterFrame;
        var pass = now - time;
        this.timeOnEnterFrame = egret.getTimer();
        // console.log("onEnterFrame: ", (1000 / pass).toFixed(5));
        this.star.x += this.speed * pass;
        this.timeOnEnterFrame = egret.getTimer();
        if (this.star.x > 300)
            this.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    return Five;
}(egret.Sprite));
__reflect(Five.prototype, "Five");
