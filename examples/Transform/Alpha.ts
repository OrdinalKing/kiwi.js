/// <reference path="../../src/Kiwi.ts" />

/**
* This script is a demonstration of how you can make a snake transparent. Strictly not a 'transform' item but still usefuly and you are modifing a sprite. 
* This can be any entity! 
* Meaning it could be a static image or a sprite.  
**/

class Alpha extends Kiwi.State {

    constructor() {
        super('Alpha');
    }

    preload() {
        this.addSpriteSheet('snake', 'assets/spritesheets/snake.png', 150, 117);
    }
    
    snakeA: Kiwi.GameObjects.Sprite;
    snakeB: Kiwi.GameObjects.StaticImage;

    create() {

        /**
        * When you want to scale an entity down you can access the transform property that is located on every entity. 
        * Note: Some entities have the scaleX/scaleY aliased for ease of use.
        **/

        //to see information about animations look at the animation component section
        this.textures.snake.sequences.push(new Kiwi.Animation.Sequence('slither', [1, 2, 3, 4, 5, 6], 0.1, true));

        this.snakeA = new Kiwi.GameObjects.Sprite(this, this.textures.snake, 250, 50);                 
        this.addChild(this.snakeA);
        this.snakeA.alpha = 0.5;

        this.snakeB = new Kiwi.GameObjects.StaticImage(this, this.textures.snake, 400, 200);
        this.addChild(this.snakeB);
        this.snakeB.alpha = 0.25;
    }

}