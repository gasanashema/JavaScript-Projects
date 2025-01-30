/**The problem:
Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now !
Your mission:
So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

Examples:
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ? */

function NamedOne(first, last) {
    // -- SHOULD be changed --
        this._firstName = first;
        this._lastName = last;
        this._fullName = this._firstName + ' ' + this._fullName;

        Object.defineProperty(this,'firstName',{
            get: function(){
                return this._firstName;
            },
            set:function(newName){
                if (typeof(newName) !== 'string') {
                    return 'First name must be a string.';
                }
                this._firstName = newName;
            }
        });

        Object.defineProperty(this,'lastName',{
            get: function(){
                return this._lastName;
            },
            set:function(newName){
                if (typeof(newName) !== 'string') {
                    return 'Last name must be a string.';
                }
                this._lastName = newName;
            }
        });

        Object.defineProperty(this,'fullName',{
            get: function(){
                return this._fullName;
            },
            set:function(newName){
                let validate = newName.split()
                if (typeof(newName) !== 'string') {
                    return 'Last name must be a string.';
                }
                this._lastName = newName;
            }
        });

        

    }
    