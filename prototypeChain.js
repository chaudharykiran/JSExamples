// constructor function
var LivingEntity = function(location) {
    this.x = location.x;
    this.y = location.y;
    this.z = location.z;
};

LivingEntity.prototype.moveWest = function() {
    this.x--;
}

LivingEntity.prototype.makeSound = function() {
    console.log('meow')
}

// New instance
var dog = new LivingEntity({
    x: 5,
    y: 0,
    z: 1
})


var Dragon = function(location) {
    /*
     * <Function>.call is a method that executes the defined function,
     * but with the "this" variable pointing to the first argument,
     * and the rest of the arguments being arguments of the function
     * that is being "called". This essentially performs all of
     * LivingEntity's constructor logic on Dragon's "this".
     */
    LivingEntity.call(this, location);
    //canFly is an attribute of the constructed object and not Dragon's prototype
    this.canFly = true;
};

/*
 * Object.create(object) creates an object with a prototype of the
 * passed in object. This example will return an object
 * with a prototype that has the "moveWest" and "makeSound" functions,
 * but not x, y, or z attributes.
 */
Dragon.prototype = Object.create(LivingEntity.prototype);

/*
 * If we didn't reset the prototype's constructor
 * attribute, it would look like any Dragon objects
 * were constructed with a LivingEntity constructor
 */
Dragon.prototype.constructor = Dragon;

/*
 * Now we can assign prototype attributes to Dragon without affecting
 * the prototype of LivingEntity.
 */
Dragon.prototype.fly = function(y){  
    this.y += y;
}

var sparky = new Dragon({  
    x: 0,
    y: 0,
    z: 0
});