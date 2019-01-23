/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding - its usually the default behavior
* 2. implicit binding - left of the period when it is invoked
* 3. explicit binding - lets you use the call or apply function to pass a reference
* 4. new binding - using the new keyword to call the object that was created
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function howManyToes(toes) {
    console.log(this);
    return toes;
}
howManyToes('12');
// Principle 2

// code example for Implicit Binding
const myObj = {
    place: 'Atlanta',
    city: function(state) {
        console.log(`${this.place} is in ${state}`);
        console.log(this);
    }
};
myObj.city('Georgia');

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding