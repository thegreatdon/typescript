
///<reference path = "typings/knockout-2.2.dts>"
declare var ko: KnockoutStatic;

module demo_02_04{

    var name = ko.observable('Don Espanol');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };

    var value: string = guy.fullName();
    console.log(value);

}
