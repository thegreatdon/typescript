module demo_02_05{
    //any
    var data: any;
    var info;
    var doSomething = function (arg){
        return arg;
    }
    //var x = doSomething(5);

    //primitives
    var age: number = 21;
    var score: number = 34.56;
    var rating = 99.99;

    var hasData: bool = true;
    var isReady = true;
    var isBald = function() {return 'yes';}
    var hasHair = !!isBald();

    var firstName: string = 'Don';
    var lastName = 'Espanol';

    //string array
    function getArrayLength(x:string[]){
        var len:number = x.length;
        return len;
    }
    
    var names: string[] = ['Feanor','Fingolfin','Finarfin','Curufinwe'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity: number;
    var company = undefined;
    console.log('undefined examples');
    console.log(quantity);
    console.log(company);

}