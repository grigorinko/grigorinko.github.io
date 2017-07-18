var renderer = PIXI.autoDetectRenderer(512, 512, {
	transparent: true,
	resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
	.add("spinner", "images/spinner.svg")
	.load(setup);

var spinner;

function setup() {
	stage.interactive = true;
	spinner = new PIXI.Sprite(
		PIXI.loader.resources["spinner"].texture
	);


	spinner.interactive = true;
	spinner.scale.set(0.05, 0.05);
	spinner.x = renderer.width / 2;
	spinner.y = renderer.height / 2;
	spinner.anchor.set(0.5, 0.5);
	spinner.speed = 1;
	spinner.click = function() {
		spinner.speed += 0.8;
	}

	stage.addChild(spinner);
	animationLoop();
}

function animationLoop() {
	requestAnimationFrame(animationLoop);

	spinner.rotation += 0.1*spinner.speed;
		spinner.speed -= 0.01;
	if (spinner.speed < 0) {
		spinner.speed = 0;
	}
	renderer.render(stage);
}
