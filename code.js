var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","812c9343-ef49-45ad-847b-337a23717efd","2f0fa7ba-a854-4452-bef1-1f176b392124","8a39374a-5101-4271-bdda-5899bdbd93bc","a822f828-ef37-4216-be7b-cd6149e286d1","18ace3f9-bb17-4567-ba58-731bb8431b26","8845911e-31de-438a-bba7-a7256fb40375","c61ed757-606c-49a5-b50a-1dc88f1af6e8","b0db6cb7-a01e-41cf-84a8-094415d51c2f"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"q1cRVM4x8UGSPC.I4BvsJvlBV0KBZgHv","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"bLwuKbzxIRtebJQOdBQwefmlrIf_mXBZ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"fRTjqeC8LO0r_P_8vfywJAqI25CkmPn8","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"812c9343-ef49-45ad-847b-337a23717efd":{"name":"bird1","sourceUrl":"assets/api/v1/animation-library/gamelab/HFepXchYmOjvFqkoiE9i.SG_WwWhTCu./category_animals/birdside_17.png","frameSize":{"x":396,"y":220},"frameCount":1,"looping":true,"frameDelay":2,"version":"HFepXchYmOjvFqkoiE9i.SG_WwWhTCu.","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":220},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HFepXchYmOjvFqkoiE9i.SG_WwWhTCu./category_animals/birdside_17.png"},"2f0fa7ba-a854-4452-bef1-1f176b392124":{"name":"bird1.2","sourceUrl":null,"frameSize":{"x":396,"y":220},"frameCount":1,"looping":true,"frameDelay":12,"version":"5eZ9QG13qgTSCkmcGO0X6gEvoednY99q","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":220},"rootRelativePath":"assets/2f0fa7ba-a854-4452-bef1-1f176b392124.png"},"8a39374a-5101-4271-bdda-5899bdbd93bc":{"name":"bird2","sourceUrl":null,"frameSize":{"x":394,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":".9VPgzbGwDm_tV_g0RSDq8BRJ9R6lHEc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":200},"rootRelativePath":"assets/8a39374a-5101-4271-bdda-5899bdbd93bc.png"},"a822f828-ef37-4216-be7b-cd6149e286d1":{"name":"bird2.2","sourceUrl":null,"frameSize":{"x":394,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"BtGtoGLUzfu9R47QekJIUpcykKaa8FnJ","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":200},"rootRelativePath":"assets/a822f828-ef37-4216-be7b-cd6149e286d1.png"},"18ace3f9-bb17-4567-ba58-731bb8431b26":{"name":"bird3","sourceUrl":"assets/api/v1/animation-library/gamelab/P4k7UG53cfuc_kjrMU6Zx_Qp8UW.xfnk/category_animals/birdside_10.png","frameSize":{"x":400,"y":194},"frameCount":1,"looping":true,"frameDelay":2,"version":"P4k7UG53cfuc_kjrMU6Zx_Qp8UW.xfnk","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":194},"rootRelativePath":"assets/api/v1/animation-library/gamelab/P4k7UG53cfuc_kjrMU6Zx_Qp8UW.xfnk/category_animals/birdside_10.png"},"8845911e-31de-438a-bba7-a7256fb40375":{"name":"bird3.2","sourceUrl":null,"frameSize":{"x":400,"y":194},"frameCount":1,"looping":true,"frameDelay":12,"version":"79L.tmmJDKrTEhrllBgxj79DSHDor_C2","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":194},"rootRelativePath":"assets/8845911e-31de-438a-bba7-a7256fb40375.png"},"c61ed757-606c-49a5-b50a-1dc88f1af6e8":{"name":"landscape","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":12,"version":"mL2NbsvXFr50gDB1qlXMB4cpe9EtLq1e","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/c61ed757-606c-49a5-b50a-1dc88f1af6e8.png"},"b0db6cb7-a01e-41cf-84a8-094415d51c2f":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"B.id9DNeNDsckHmSlYsrM_lNbyUPVMtW","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b0db6cb7-a01e-41cf-84a8-094415d51c2f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var back = createSprite(200,200);
 back.setAnimation("landscape")
var arrow = createSprite(200,345,200,345)
arrow.shapeColor="brown"

var bird1 = createSprite(200,250,30,30)
bird1.shapeColor="red"

var bird2 = createSprite(200,150,10,10)
bird2.shapeColor="red"

var bird3 = createSprite(200,50,10,10)
bird3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

arrow.setAnimation("arrow");
arrow.scale=.2;
bird1.setAnimation("bird1");
bird1.scale=.1;
bird2.setAnimation("bird2");
bird2.scale=.1;
bird3.setAnimation("bird3");
bird3.scale=.1;

bird1.setVelocity(-10,0);
bird2.setVelocity(10,0);
bird3.setVelocity(-10,0);


function draw() {
  
//fondo(b);

createEdgeSprites()




bird1.bounceOff(edges)
bird2.bounceOff(edges)
bird3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  arrow.y=arrow.y-3
}

if(keyDown(DOWN_ARROW)){
  arrow.y=arrow.y+3
}

if(keyDown(LEFT_ARROW)){
  arrow.x=arrow.x-3
}

if(keyDown(RIGHT_ARROW)){
  arrow.x=arrow.x+3
}

if(arrow.isTouching(bird1)|| arrow.isTouching(bird2)|| arrow.isTouching(bird3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  arrow.x=200
  arrow.y=350
  death = death+1
}
if(arrow.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  arrow.x=200
  arrow.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Goals:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("death:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
