let level1;

function initLevel1 () {
    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new smallChicken(1),
            new smallChicken(2.6),
            new smallChicken(3.5),
            new smallChicken(3.8),
            new smallChicken(2.7),
            new Endboss(),
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
        ],
        [
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], -719),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/2.png'], -719),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/2.png'], -719),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/2.png'], -719),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 0),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/1.png'], 0),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/1.png'], 0),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/1.png'], 0),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/2.png'], 719),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/2.png'], 719),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/2.png'], 719),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719 * 2),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/1.png'], 719 * 2),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/1.png'], 719 * 2),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/1.png'], 719 * 2),
            
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719 * 3),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/2.png'], 719 * 3),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/2.png'], 719 * 3),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/2.png'], 719 * 3),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719 * 4),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/1.png'], 719 * 4),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/1.png'], 719 * 4),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/1.png'], 719 * 4),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719 * 5),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/2.png'], 719 * 5),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/2.png'], 719 * 5),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/2.png'], 719 * 5),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719 * 6),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/1.png'], 719 * 6),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/1.png'], 719 * 6),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/1.png'], 719 * 6),
    
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/air.png'], 719 * 7),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/3_third_layer/2.png'], 719 * 7),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/2_second_layer/2.png'], 719 * 7),
            new BackgroundObject(backgroundImagesCache['img/5_background/layers/1_first_layer/2.png'], 719 * 7),
        ],
        [
            new Bottle(1, bottleImagesCache['img/6_salsa_bottle/1_salsa_bottle_on_ground.png']), 
            new Bottle(1, bottleImagesCache['img/6_salsa_bottle/1_salsa_bottle_on_ground.png']), 
            new Bottle(1, bottleImagesCache['img/6_salsa_bottle/1_salsa_bottle_on_ground.png']), 
            new Bottle(1, bottleImagesCache['img/6_salsa_bottle/1_salsa_bottle_on_ground.png']), 
            new Bottle(1, bottleImagesCache['img/6_salsa_bottle/1_salsa_bottle_on_ground.png']), 
            new Bottle(1, bottleImagesCache['img/6_salsa_bottle/1_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
            new Bottle(2, bottleImagesCache['img/6_salsa_bottle/2_salsa_bottle_on_ground.png']), 
        ],
        [
            new Coin(3200, 90),
            new Coin(3250, 70),
            new Coin(3300, 50),
            new Coin(3350, 30),
            new Coin(3400, 50),
            new Coin(3450, 70),
            new Coin(3500, 90),
            new Coin(1500, 30),
            new Coin(1500, 60),
            new Coin(1500, 90),
            new Coin(1500, 120),
            new Coin(1500, 150),
            new Coin(1500, 180),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
        ]
    );
} 