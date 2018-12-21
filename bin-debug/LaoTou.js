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
var LangTou = (function (_super) {
    __extends(LangTou, _super);
    function LangTou() {
        var _this = _super.call(this) || this;
        _this.mbmb();
        return _this;
    }
    LangTou.prototype.mbmb = function () {
        this.lt = new egret.Bitmap();
        this.lt.texture = RES.getRes("1_jpg");
        this.addChild(this.lt);
        this.lt.width = 80;
        this.lt.height = 120;
        egret.Tween.get(this.lt).to({ rorarion: 30 }, 1000); //.call(()=>{this.lt.visible = false})
    };
    return LangTou;
}(egret.Sprite));
__reflect(LangTou.prototype, "LangTou");
