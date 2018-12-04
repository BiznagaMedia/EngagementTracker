(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._300x600bg = function() {
	this.initialize(img._300x600bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg300x250 = function() {
	this.initialize(img.bg300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,52);


(lib.doza1300x600 = function() {
	this.initialize(img.doza1300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,134);


(lib.doza2300x600 = function() {
	this.initialize(img.doza2300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,134);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,83);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_slika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg300x250();
	this.instance.parent = this;
	this.instance.setTransform(-181.1,-150.9,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_slika, new cjs.Rectangle(-181.1,-150.9,362.3,301.9), null);


(lib.mc_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-63,-3,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_shadow, new cjs.Rectangle(-63,-3,125.2,34.7), null);


(lib.mc_napis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBQQgGgGAAgIQAAgJAGgFQAFgFAHAAQAIAAAGAFQAFAFAAAJQAAAIgFAGQgGAFgIAAQgHAAgFgFgAgJAeIgEggQgBgRAAgUIAAgtIAeAAIAAAtQAAAUgCARIgDAgg");
	this.shape.setTransform(80.9,427.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBWIgPgDIgLgEIgIgEIAJgZIASAIQALADAPAAQAQAAAHgFQAIgGAAgKQAAgGgDgFIgHgHQgFgEgHgDIgOgGIgRgHQgIgCgGgGQgGgFgEgIQgEgIAAgLQAAgWAQgNQAQgNAaAAQAPAAAMADQANAEAHAEIgKAZQgIgFgKgCQgJgDgLAAQgLAAgHAFQgHAFAAAJQAAAGACAEIAHAHIAKAGIALAFIAVAJQAKAEAGAFQAGAGAEAJQADAIAAAMQAAAXgQAMQgQAMgeAAQgKAAgJgBg");
	this.shape_1.setTransform(70.7,427.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBQQgMgEgIgJQgIgJgEgMQgEgNAAgOIAAhnIAfAAIAABkQAAALACAJQADAIAEAFQAFAFAHACQAGADAHAAQAIAAAGgDQAHgCAFgFQAEgFADgIQACgJAAgLIAAhkIAfAAIAABnQAAAOgEANQgEAMgIAJQgIAJgNAEQgMAFgRAAQgRAAgMgFg");
	this.shape_2.setTransform(55.7,427.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA9QgNgFgHgIQgIgJgEgMQgEgNAAgOQAAgPAFgNQAFgMAIgIQAJgJAKgEQALgEAJAAQAaAAAPAQQAPAQAAAgIgBAFIAAAFIhSAAQABAPAKAIQAKAJAQAAQALAAAJgCIAOgEIAEAYIgHACIgJACIgNADIgMAAQgQAAgMgFgAAbgMQABgFgCgGQgCgFgDgEQgDgFgFgCQgFgCgGAAQgGAAgFACQgFADgEAFQgDADgCAGIgDAKIA1AAIAAAAg");
	this.shape_3.setTransform(34.8,429.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBeIAAhDIgBgRQgBgHgDgEQgDgEgFgCQgFgCgHAAIgMABIgIACIAABkIgeAAIAAi1IAegGIAAA/IALgDIALgBQAPgBAKAFQAKAEAGAIQAHAHACALQADAKAAAMIAABIg");
	this.shape_4.setTransform(21,426.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBQQgIgEgGgGQgFgHgCgKQgCgKAAgNIAAhsIAdgEIAAAmIAsAAIAAAYIgsAAIAAAyQAAAQAEAGQAFAHALgBQAIAAAGgCIAKgCIAEAWIgNAFQgIADgLgBQgNABgJgEg");
	this.shape_5.setTransform(9.5,427.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBBIAAhCIgBgRQgBgHgDgFQgDgEgFgCQgGgCgGAAIgMAAIgIACIAABlIgeAAIAAh6IAWgEQAOgCAQAAQAPgBAKAFQAKAEAGAIQAHAHACALQADALAAAMIAABHg");
	this.shape_6.setTransform(-8.7,429.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBbIAAh9IAcAAIAAB9gAgMg7QgFgFAAgHQAAgJAFgFQAGgEAHAAQAGAAAGAEQAFAFAAAJQAAAHgFAFQgGAGgGAAQgHAAgGgGg");
	this.shape_7.setTransform(-19.1,426.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA/IgNgmIgMgoIgLAoIgMAmIgZAAIgKgZIgKgfIgLghIgLgkIAgAAIAEAWIAGAXIAHAXIAHAVIAHgWIAGgXIAHgXIAEgVIAWAAIAEAVIAHAXIAGAXIAHAWIAGgVIAHgXIAHgXIAEgWIAeAAIgKAkIgLAhIgKAfIgKAZg");
	this.shape_8.setTransform(-37.4,429.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYA9QgLgEgIgJQgHgJgFgMQgEgNgBgOQABgOAEgNQAFgMAHgIQAJgJALgFQALgEAMAAQANAAAMAEQAKAFAJAJQAHAIAFAMQAFANAAAOQAAAOgFANQgEAMgIAJQgIAJgLAEQgMAFgNAAQgNAAgLgFgAgWgdQgHALAAASQAAATAHALQAIALAOAAQAPAAAHgLQAIgLAAgTQAAgSgIgLQgHgLgPAAQgOAAgIALg");
	this.shape_9.setTransform(-54,429.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXBBIAAhCIgBgRQgBgHgDgFQgDgEgFgCQgGgCgGAAIgMAAIgIACIAABlIgeAAIAAh6IAWgEQAOgCAQAAQAPgBAKAFQAKAEAGAIQAHAHACALQADALAAAMIAABHg");
	this.shape_10.setTransform(-68.2,429.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBBIAAhCIgBgRQgBgHgDgFQgDgEgFgCQgGgCgGAAIgMAAIgIACIAABlIgeAAIAAh5IAWgFQAOgCAQgBQAPABAKAEQAKAEAGAIQAHAHACALQADALAAANIAABGg");
	this.shape_11.setTransform(83.2,400.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA9QgMgEgJgKQgHgJgEgLQgEgMAAgPQAAgPAFgMQAFgNAIgIQAJgJAKgEQAKgEAKAAQAbAAAOAQQAPAQAAAgIgBAEIAAAGIhSAAQABAPAKAJQAJAIARAAQALAAAJgCIAOgEIADAYIgGACIgKACIgMACIgMABQgPAAgNgFgAAcgLQgBgHgBgFQgCgGgDgEQgDgDgFgCQgFgDgGAAQgGAAgFADQgFACgDAEQgEAFgCAEIgCAMIA1AAIAAAAg");
	this.shape_12.setTransform(69.2,401);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBeIgKgQIgMgQIgMgPIgNgMIAAA7IgeAAIAAi2IAegEIAABtIALgNIANgMIAKgNIAJgKIAjAAIgaAcIgaAbIAPAOIAPASIAOAUIALASg");
	this.shape_13.setTransform(56.5,398);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNA9QgMgEgHgKQgIgIgEgNQgEgLAAgPQAAgNAFgMQADgMAJgJQAIgJALgFQAMgFANAAQASAAAQAGIgGAYIgLgDQgHgCgHAAQgQAAgJALQgJAKAAATQAAATAIALQAJALATAAQAIAAAGgCIANgDIAEAYQgFACgKACQgJACgLAAQgOAAgNgFg");
	this.shape_14.setTransform(43.8,401);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNBbIAAh9IAcAAIAAB9gAgLg6QgGgFAAgJQAAgIAGgFQAFgEAGgBQAIABAFAEQAFAFAAAIQAAAJgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_15.setTransform(34.4,398.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXBeIAAhDIgBgRQgBgHgDgEQgDgEgFgCQgFgCgHAAIgMABIgIACIAABkIgeAAIAAi2IAegEIAAA+IALgDIALgCQAPABAKAEQAKAEAGAIQAHAHACALQADAJAAAOIAABHg");
	this.shape_16.setTransform(24.2,398);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBSQgPgGgKgLQgLgMgFgQQgGgQAAgVQABgUAFgQQAHgQALgLQALgMAPgFQAPgGAQAAQAKAAAJABIAOAEIALAEIAGADIgJAZQgGgEgLgDQgLgDgMAAQgKAAgJAEQgKADgGAIQgHAHgEAMQgEALAAAOQAAANADALQADALAGAIQAGAJAKAEQAJAEAOAAQAQAAAKgDIAPgGIAIAZIgIAEIgLADIgPADIgSABQgSAAgPgFg");
	this.shape_17.setTransform(9.8,398.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTBAQgKgCgHgFQgGgFgEgIQgEgHAAgMQAAgLAFgHQADgHAIgEQAHgFAJgCQAKgCAJAAIAKABIAMACIAAgFIgCgKQgBgFgDgDQgDgDgFgCQgEgCgHAAQgKAAgIABIgOADIgEgXIARgEQAKgCALAAQAPAAAKAEQAJADAGAHQAGAGACAKQADAJAAALIAABLIgVAEQgNACgRAAQgLAAgIgCgAgDAIQgFAAgEACQgEACgCAEQgCADAAAFQgBALAHAEQAHAEAJAAQAOAAAHgCIAAggIgHgBIgKgBg");
	this.shape_18.setTransform(-10.7,401);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPBQQgIgEgGgHQgFgGgCgLQgCgJAAgNIAAhsIAdgFIAAAnIAsAAIAAAYIgsAAIAAAyQAAAQAEAGQAFAGALAAQAIAAAGgBIAKgDIAEAWIgMAFQgJACgLABQgMgBgKgDg");
	this.shape_19.setTransform(-21.2,399.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUA9QgNgEgHgKQgIgJgEgLQgEgMAAgPQAAgPAFgMQAFgNAIgIQAIgJALgEQALgEAKAAQAaAAAOAQQAPAQAAAgIAAAEIAAAGIhTAAQACAPAJAJQAJAIASAAQAKAAAJgCIAOgEIAEAYIgHACIgKACIgLACIgNABQgPAAgNgFgAAcgLQAAgHgCgFQgCgGgDgEQgDgDgFgCQgEgDgHAAQgGAAgFADQgFACgEAEQgDAFgCAEIgCAMIA1AAIAAAAg");
	this.shape_20.setTransform(-33.7,401);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBVIgUgFIAFgZQAIADAJACQAKACALAAQAQAAAIgHQAHgHAAgOIAAgFIgLAEQgHACgIAAQgMAAgKgEQgKgDgHgIQgHgHgFgMQgEgKAAgPQABgNAEgMQAEgLAIgJQAIgIAMgEQALgFAOAAQAPAAAMACIAVAFIAABsQAAAegOAOQgQAOgfAAQgLAAgLgCgAgQgzQgJAKAAARQABATAHAIQAJAIAMAAQAHAAAFgCIAKgEIAAhBIgHgBIgMgBQgPAAgIALg");
	this.shape_21.setTransform(-48,403.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmBBIAAh4IAVgFQANgEAOAAIAHABIAIABIAIACIAGABIgGAYIgJgCIgQgBIgJABIgHABIAABlg");
	this.shape_22.setTransform(-58.7,400.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAwBUIgHgUIgGgUIhGAAIgHAUIgHAUIgfAAIASgyIAQgqIAQgnIAQgjIAcAAIARAjIAQAnIARAqIASAygAAbATIgPgnIgMgeIgNAfIgOAmIA2AAg");
	this.shape_23.setTransform(-72.6,399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_napis, new cjs.Rectangle(-82.1,383.7,173.5,57.7), null);


(lib.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkCDLQhYg8gvh2IgnAAIAAAtQAAA1ACAMIhOAAQAEgjgBhJIAAiVIhGADQABgggDgcIBFAAIBkgDQBDgBAmAbQAkAagBAsQgBA+g9AdQAqBlBJAzQBBAvBQgBQA7AAA4gZIATAyQhIAchHAAQhkAAhPg1gAmwh8IAABjIAkAAQAaAAAPgPQAPgOAAgWQAAgxg+ABgAi6BhQgtguAAhBQAAhLAygwQAygyBOAAQA+AAArAdIgUA8QgmgbgsAAQgvAAgfAeQgeAdAAArQAAAxAeAdQAbAbArABQAcgBAVgIIgBg+IgXgBQgbAAgVACQACgbgBgbQAjACAZAAQAnAAAogCQgEAVAABVIAAAtQg2AihFAAQhHAAgvgvgALjBDIh2AAIgcBEIhLAAIBnjmQAfhDAGgTIAtgFIBmDlQAaA5ASAjIhPAEgALQAQIgohkIgoBkIBQAAgAp4BDIh2AAIgcBEIhMAAIBojmIAag5QgJgSgKgJQgOgMgWgEIAbg8QA5AIAaA5IBnDpQAYA2ATAmIhOAEgAqLAQIgphkIgoBkIBRAAgADZCHQhDAAgnADQADgdAAhRIAAhlQAAhSgDgcQBLADCbAAQCDAABogDQgEAkAAAeIhfgCIgBC9QAAA1ACAMIhPAAQADgeAAhOIgBiSIjWgBIAABBIBtAAIgBA2IhsAAIAABNIAqABQA0AAAsgCIgEA/QgkgDhEAAgAMah9QgLgLAAgOQAAgPALgKQAKgKAPAAQAPAAAKAKQALAKAAAPQAAAOgLALQgKALgPAAQgPAAgKgLgAMeirQgIAJAAAMQAAAMAIAIQAIAKANgBQAMABAJgKQAIgIAAgMQAAgNgIgIQgJgJgMAAQgNAAgIAJgAMziQIgEAAIAAALIgKAAIAAgjIAMAAQARAAAAALQAAAHgHADIAKAOIgLABgAMvigIAAAJIADAAQAGAAAAgFQAAgFgFAAg");
	this.shape.setTransform(0.4,0.1,1.221,1.221);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(-104,-31.1,208.8,62.6), null);


(lib.mc_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE5501").s().p("AgIA2QgEgEAAgFQAAgGAEgEQADgDAFAAQAFAAAEADQAEAEAAAGQAAAFgEAEQgEADgFAAQgFAAgDgDgAgGAUIgDgVIgBgZIAAgeIAVAAIAAAeIgCAZIgCAVg");
	this.shape.setTransform(52.1,273.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE5501").s().p("AgOAqQgHgEgGgGQgFgGgDgIQgCgIAAgJQAAgLACgIQAEgJAFgFQAGgGAHgDQAIgDAGAAQARAAAKALQALALgBAWIAAACIAAAEIg3AAQABAKAGAGQAHAGALAAQAHAAAGgCIAJgCIADAQIgFACIgGABIgIABIgJABQgKAAgJgDgAASgHIAAgIQgCgEgCgCQgCgDgDgCQgDgBgFAAQgEAAgDABIgFAFIgFAGIgBAIIAjAAIAAAAg");
	this.shape_1.setTransform(45,274.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE5501").s().p("AgZArIAAhQIAOgEQAJgBAKAAIAEAAIAFABIAFAAIAEABIgEARIgGgCIgKgBIgGABIgFABIAABDg");
	this.shape_2.setTransform(37.6,274.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE5501").s().p("AgQApQgIgCgEgHQgGgFgDgJQgDgIAAgKQAAgJADgJQADgIAGgFQAFgGAHgEQAIgDAIAAQAJAAAIADQAHAEAFAGQAGAFADAIQADAJAAAJQAAAKgDAIQgDAJgGAFQgFAHgHACQgIAEgJAAQgJAAgHgEgAgPgUQgFAIAAAMQAAANAFAHQAGAIAJAAQAJAAAGgIQAGgHgBgNQABgMgGgIQgGgHgJAAQgJAAgGAHg");
	this.shape_3.setTransform(28.9,275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE5501").s().p("AAnArIAAgsQAAgNgDgGQgDgFgKgBIgJACIgGADIACAJIAAAJIAAAuIgTAAIAAgsQAAgNgDgGQgDgFgKgBIgHABIgFABIAABDIgVAAIAAhRIAPgDQAKgBAKAAQAJAAAGACQAFACADADIAEgCIAHgDIAHgCIAIAAQAJAAAHACQAGADAEAFQAEAGABAGIABARIAAAug");
	this.shape_4.setTransform(17,274.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE5501").s().p("AgZArIAAhQIAOgEQAJgBAKAAIAEAAIAFABIAFAAIAEABIgEARIgGgCIgKgBIgGABIgFABIAABDg");
	this.shape_5.setTransform(3.4,274.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BE5501").s().p("AgQApQgIgCgEgHQgGgFgDgJQgDgIAAgKQAAgJADgJQADgIAGgFQAFgGAHgEQAIgDAIAAQAJAAAIADQAHAEAFAGQAGAFADAIQADAJAAAJQAAAKgDAIQgDAJgGAFQgFAHgHACQgIAEgJAAQgJAAgHgEgAgPgUQgFAIAAAMQAAANAFAHQAGAIAJAAQAJAAAGgIQAGgHgBgNQABgMgGgIQgGgHgJAAQgJAAgGAHg");
	this.shape_6.setTransform(-5.3,275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BE5501").s().p("AgbA/IAAhaQAAgRAJgJQAJgJAQAAIAMABIAIACIgDAQIgHgCIgIgBQgFAAgDACIgEAEIgDAGIgBAHIAAAGIAfAAIAAAQIgfAAIAABEg");
	this.shape_7.setTransform(-12.8,272.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BE5501").s().p("AAPA/IgHgKIgIgLIgIgKIgJgIIAAAnIgUAAIAAh6IAUgDIAABJIAIgIIAIgIIAHgJIAGgHIAYAAIgRATIgTASIALAKIAKAMIAKANIAHAMg");
	this.shape_8.setTransform(-24.6,272.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BE5501").s().p("AgJAqQgIgEgFgGQgFgGgDgIQgCgIAAgKQAAgIADgJQACgIAGgGQAFgGAIgDQAIgEAJAAQAMAAALAFIgFAQIgHgDIgKgBQgKAAgGAIQgGAHAAAMQAAANAGAHQAFAIANAAIAKgBIAIgDIADARIgKADIgNABQgKAAgJgDg");
	this.shape_9.setTransform(-33.1,274.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BE5501").s().p("AgIA9IAAhUIASAAIAABUgAgHgnQgEgEAAgFQAAgGAEgDQADgDAEAAQAFAAAEADQADADAAAGQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_10.setTransform(-39.5,273.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BE5501").s().p("AAAA+QgGgCgDgDQgEgDgBgFIgBgMIAAhhIASgDIAABgIABAHIACAEIAEACIAGACIgDAQQgIAAgFgCg");
	this.shape_11.setTransform(-43.7,273);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BE5501").s().p("AgNA3QgKgEgHgHQgHgIgEgLQgDgLAAgOQAAgOAEgLQAEgKAIgIQAIgIAJgDQAKgEAMAAIAMABIAKACIAHADIAEACIgGARIgLgFQgIgCgIAAQgIAAgFADQgGACgFAFQgFAFgCAIQgCAHgBAKQAAAJACAHQACAHAEAGQAFAFAGADQAGADAJAAQALAAAHgCIAKgDIAGAQIgFADIgIACIgLACIgLABQgMAAgLgEg");
	this.shape_12.setTransform(-51.5,273.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(-79,251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cta, new cjs.Rectangle(-79,251,154,52), null);


(lib.mc_argeta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.doza1300x600();
	this.instance.parent = this;
	this.instance.setTransform(-68,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_argeta2, new cjs.Rectangle(-68,-67,133,134), null);


(lib.mc_argeta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.doza2300x600();
	this.instance.parent = this;
	this.instance.setTransform(-68,-67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_argeta, new cjs.Rectangle(-68,-67,133,134), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_233 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(233).call(this.frame_233).wait(1));

	// logo
	this.instance = new lib.mc_logo();
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).to({alpha:1},20).wait(33));

	// CTA
	this.instance_1 = new lib.mc_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.6,205.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(216).to({_off:false},0).to({alpha:1},15).wait(3));

	// napis
	this.instance_2 = new lib.mc_napis();
	this.instance_2.parent = this;
	this.instance_2.setTransform(145.3,65.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},25,cjs.Ease.cubicInOut).wait(138).to({alpha:0},20).to({_off:true},1).wait(50));

	// doza-2
	this.instance_3 = new lib.mc_argeta2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(448,300.1,1,1,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({rotation:-10,x:178},48,cjs.Ease.quadInOut).to({rotation:0,x:198},20,cjs.Ease.quadInOut).wait(139));

	// shadow
	this.instance_4 = new lib.mc_shadow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(449.9,359.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({x:177.9},48,cjs.Ease.quadInOut).to({x:200.9},20,cjs.Ease.quadInOut).wait(139));

	// doza-1
	this.instance_5 = new lib.mc_argeta();
	this.instance_5.parent = this;
	this.instance_5.setTransform(390.6,300.1,1,1,176);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({rotation:-15,x:85.5},48,cjs.Ease.quadInOut).to({rotation:0,x:101.5},20,cjs.Ease.quadInOut).wait(160));

	// shadow
	this.instance_6 = new lib.mc_shadow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(392.4,359.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({x:85.9},48,cjs.Ease.quadInOut).to({x:97.9},20,cjs.Ease.quadInOut).wait(160));

	// Layer_1
	this.instance_7 = new lib.mc_slika();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.2,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(163).to({alpha:0},20).to({_off:true},1).wait(50));

	// bg
	this.instance_8 = new lib._300x600bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(118,299,362.3,601);
// library properties:
lib.properties = {
	id: 'B89C76B29F3E4DAFA8823BAB352F373F',
	width: 300,
	height: 600,
	fps: 36,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_300x600bg.jpg?1518714201994", id:"_300x600bg"},
		{src:"images/bg300x250.jpg?1518714201994", id:"bg300x250"},
		{src:"images/cta.png?1518714201994", id:"cta"},
		{src:"images/doza1300x600.png?1518714201994", id:"doza1300x600"},
		{src:"images/doza2300x600.png?1518714201994", id:"doza2300x600"},
		{src:"images/shadow.png?1518714201994", id:"shadow"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B89C76B29F3E4DAFA8823BAB352F373F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;