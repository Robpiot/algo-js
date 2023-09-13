// 6.1

class circle {
    constructor (xPos, yPos, radius) {
        this.xPos = xPos
        this.yPos = yPos
        this.radius = radius
    } 
    move(xOffset, yOffset) {
        this.xPos = xOffset
        this.yPos = yOffset
        
    }
    get surface() {
        return Math.PI*(this.radius*this.radius)
    }
}

let myCircle = new circle (5, 5, 98)
console.log(myCircle.surface);


// 6.2






    class rectangle {
        constructor(x, y, width, height) {
            this.x = x
            this.y = y
            this.width = width
            this.height = height
    } }

      function collides(r1, r2) {
 
    // if rectangle has area 0, no overlap
 
    // If one rectangle is on left side of other
    if (r1.x > r2.x || r2.x > r1.x) {
        return false;
    }

    // If one rectangle is above other
    if (r1.y > r2.y || r2.y > r1.y) {
        return false;
    }

    return true; } 

    let r1 = new rectangle(5, 15, 10, 10)
    let r2 = new rectangle(5, 15, 10, 10)

    
    if (collides( r1, r2)) {
        console.log("Rectangles collides");
    } else {
        console.log("Rectangles Don't collides");
    }


    
    