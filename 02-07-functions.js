var demo_02_07;
(function (demo_02_07) {
    var squareItSimple = function (h, w) {
        return h * w;
    };
    var squareItSimplest = function (h, w) { return h * w; };
    var helloWorld;
    helloWorld = function (name) {
        console.log('Hello ' + (name || ' unknown'));
    };
    //helloWorld();
    //helloWorld('don');
    var squareIt;
    var rectA = { h: 7 };
    var rectB = { h: 7, w: 12 };
    squareIt = function (rect) {
        if (rect.w === undefined) {
            return rect.h * rect.h;
        }
        return rect.h * rect.w;
    };
    console.log(squareIt(rectA));
    console.log(squareIt(rectB));
})(demo_02_07 || (demo_02_07 = {}));
//# sourceMappingURL=02-07-functions.js.map