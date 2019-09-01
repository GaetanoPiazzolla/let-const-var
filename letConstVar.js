/**
        var VS let VS const

 var:
     function scoped (function a)
     undefined when accessing a variable before it's declared (function b)

 let:
     block scoped (function a)
     ReferenceError when accessing a variable before it's declared (function b)

 const:
     block scoped but once you've assigned a value you can't reassign it to a new value (function c)
     ReferenceError when accessing a variable before it's declared
     the object isn't immutable; only un-reassignable (function d)

 */

function a() {

    try {

        if (true === true) {
            var myVar = 'isDefined';
            let myLet = 'isDefined';
        }

        console.log('myVar is:' + myVar);
        console.log('myLet is' + myLet);

    } catch (e) {
        console.log(e);
    }

}


function b() {

    try {

        console.log('myVar is:' + myVar);
        console.log('myLet is' + myLet);

        var myVar = 'isDefined';
        let myLet = 'isDefined';

    } catch (e) {
        console.log(e);
    }

}

function c() {
    try {
        const myConst = 'ciao';
        let myLet = 'ciao';

        myConst = 'hello';
        myLet = 'hello';

    } catch (e) {
        console.log(e);
    }

}

function d() {
    try {

        const myConst = {'ciao': 'bello'};
        myConst.ciao = 'brutto';
        console.log('myConst.ciao is:' + myConst.ciao)

    } catch (e) {
        console.log(e);
    }
}

b();
a();
c();
d();




