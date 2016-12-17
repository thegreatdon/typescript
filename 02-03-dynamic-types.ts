module demo_02_03{
    var person: string;
    person = 'Don Espanol';
    console.log(person.substring(1,4));

    person2 = {
        name: 'Beric',
        age: 29
    };
    console.log(person2.name.substring(1,4));
}