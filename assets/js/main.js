console.log("Hello World from main.js!");


window.onload = function() {

	var tl = new TimelineMax({repeat:-1, delay: .5});

	tl.from(".oreo-0", 1, {top: -500});
	tl.from(".oreo-1", 1, {x: 100, y: -270, opacity: 0});
	tl.from(".oreo-2", 1, {x: 0, y: -270, opacity: 0});
	tl.from(".oreo-3", 1, {x: -120, y: -270, opacity: 0});
	tl.to(".oreo-3", .9, {alpha: 0});
	tl.to(".oreo-2", .9, {alpha: 0});
	tl.to(".oreo-1", .9, {alpha: 0});
	tl.to(".wonderfilled", 1.5, {alpha: 1});
	tl.to([".wonderfilled", ".oreo-0"], 1, {alpha: 0});


	var section2MasterTimeline = new TimelineMax({repeat: -1});

	var tl2 = new TimelineMax({delay: .5});

	tl2.to(".oreo-text", .7, {y: 1169, opacity: 1});
	tl2.from(".thins-text", .7, {scale: -.5, opacity: 0, yoyo: true, ease:Quad.ease});
	tl2.from(".thin-twist-text", 1, {x: -700, opacity: 0});
	tl2.to(".twist", 1, {rotation: 360, opacity: 1});

	var tl3 = new TimelineMax({delay: 3});

	// el.setAttribute("src", "assets/img/oreo-in-cup2.png");

	tl3.from(".milk", 2, {x: "+=300", opacity: 0});
	tl3.to(".hand", .5, {opacity: 1, y: 33});
	tl3.to(".hand", .001, {opacity: 0, ease:Quad.ease}, "same1");
	tl3.to(".oreo-in-cup3", .01, {opacity: 1, ease:Quad.ease}, "same1"); 
	tl3.to(".oreo-in-cup3", 1, {opacity: 1, y: -9, delay: .2});
	tl3.to(".oreo-in-cup3", .8, {opacity: 0, y: -4}, "same2");  
	tl3.to(".oreo-dipped3", .6, {opacity: 1, y: -5}, "same2"); 
	
	var tl4 = new TimelineMax();

	tl4.to(".package", 1, {rotation: 2, yoyo: true, repeat: -1});

	section2MasterTimeline.add(tl2, "sametime");
	section2MasterTimeline.add(tl3, "sametime");


	// tl3.to(".package", .5, {x: 100, y: 150, rotation: 360, opacity: 1});

}




