
var keyMap;

export class InputKey
{

    constructor()
    {
        document.body.addEventListener('keydown', this.keyPressed);
        document.body.addEventListener('keyup', this.keyReleased);
        keyMap = {};
        this.speed = .05;        
    }



    setSpeed(newSpeed)
    {
        this.speed = newSpeed;
    }
    keyPressed(e)
    {
        keyMap[e.key] = 'keydown';
        e.preventDefault();
    }

    keyReleased(e)
    {   
      delete keyMap[e.key];
      e.preventDefault();
    }




    inputPlayer(object)
    {


        for (var key in keyMap)
        {
            switch(key)
            {
                case "ArrowUp":
                object.translateY(this.speed);
                break;
                case "ArrowDown":
                object.translateY(-this.speed);
                break;
                case "ArrowLeft":
                object.rotateY(this.speed);
                break;
                case "ArrowRight":
                object.rotateY(-this.speed);
                break;
                case "z":
                case "w":
                object.translateZ(-this.speed);
                break;
                case "s":
                object.translateZ(+this.speed);
                break;
                case "a":
                case "q":
                object.translateX(-this.speed);
                break;
                case "d":
                object.translateX(+this.speed);
                break;
            }
        }

    }
}