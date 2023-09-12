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
    constructor(topLeftXPos, topLeftYPos, width, height) {
        this.topLeftXPos = topLeftXPos
        this.topLeftYPos = topLeftYPos
        this.width = width
        this.height = height
    }

    collides(rectBx, rectBy,) {
        if(rectBx > topLeftXPos && rectBx < topLeftXPosX + width && rectBy > topLeftYPos && rectBy < topLeftYPos + height){
	return true
}
    }
    }

    let myRectangle = new rectangle(5, 5, 20, 20)

    console.log(myRectangle.collides);
    
    
    
    