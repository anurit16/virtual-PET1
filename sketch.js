//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);   
  dog = createSprite(250,250,10,10);
 // dog.addImage(dog);
  firebase = firebase.database();

  foodStock = database.ref("Food");
  foodStock.on = ("value",readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here

}


function readStock(data){
  fooodS=data.val();
}


function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
    Food:x
  })
}