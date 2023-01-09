var PLAY = 1
var End = 0
var gameState = 1

var car, car_driving, car_crashed
var ground, invisibleGround, groundImage

var cloudsGroup, cloudImage

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4

var score

var gameOverS
var gameOverImg
var restartS
var restartImg

function preload() {
	car_driving = loadAnimation()
	car_crashed = loadAnimation()

	groundImage = loadImage()

	cloudImage = loadImage()

	gameOverImg = loadImage()
	restartImg = loadImage()

	obstacle1 = loadImage()
	obstacle2 = loadImage()
	obstacle3 = loadImage()
	obstacle4 = loadImage()

}

function setUp() {
	createCanvas(600, 200)
	car = createSprite()
	car.addAnimation("driving", car_driving)
	car.addAnimation("crashed", car_crashed)
	car.scale = 0.5

	ground = createSprite()
	ground.addImage("ground", groundImage)
	ground.x = ground.width / 2

	gameOverS.scale = 0.5
	restartS.scale = 0.5
}

function draw() {

    drawSprites()
}