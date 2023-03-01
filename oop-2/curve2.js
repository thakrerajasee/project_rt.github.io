var curve = /** @class */ (function () {
    function curve(x, y, canvas, context) {
        this.amp = 75;
        this.x = x;
        this.y = y;
        this.context = context;
    }
    curve.prototype.draw = function () {
        context.beginPath();
        context.moveTo(this.x, this.y - 75);
        context.lineTo(this.x, this.y + 75);
        context.moveTo(this.x - 75, this.y);
        context.lineTo(this.x + 75, this.y);
        context.lineWidth = 2;
        context.strokeStyle = "black";
        var xo = this.x;
        var yo = this.y;
        context.beginPath();
        // context.lineTo(xo,yo + this.amp *Math.PI/180)
        for (var i = 1; i <= 360; i++) {
            context.lineTo(xo + i, yo + this.amp * Math.sin(Math.PI * i / 180));
        }
        context.lineWidth = 2.5;
        context.strokeStyle = "blue";
        context.stroke();
        context.beginPath();
        for (var i = 1; i <= 360; i++) {
            context.lineTo(xo + i, yo + this.amp * Math.cos(Math.PI * i / 180));
        }
        context.lineWidth = 2.5;
        context.strokeStyle = "red";
        context.stroke();
        context.beginPath();
    };
    return curve;
}());
