(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._300x250bg = function() {
	this.initialize(img._300x250bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg300x250 = function() {
	this.initialize(img.bg300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,270);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,52);


(lib.doza1300x250 = function() {
	this.initialize(img.doza1300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


(lib.doza2300x250 = function() {
	this.initialize(img.doza2300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,118);


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
	this.instance.setTransform(-300,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_slika, new cjs.Rectangle(-300,-250,500,270), null);


(lib.mc_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.parent = this;
	this.instance.setTransform(-56,-1,0.375,0.375);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_shadow, new cjs.Rectangle(-56,-1,112.7,31.2), null);


(lib.mc_napis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBQQgGgGAAgIQAAgIAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAIQAAAIgFAGQgGAFgIAAQgHAAgFgFgAgJAeIgEggQgBgSAAgTIAAgtIAeAAIAAAtQAAAUgCARIgDAgg");
	this.shape.setTransform(79.8,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXBWIgPgDIgLgEIgIgEIAJgZIASAIQALADAPAAQAQAAAHgFQAIgGAAgKQAAgGgDgFIgHgHQgFgEgHgDIgOgGIgRgHQgIgCgGgGQgGgFgEgIQgEgIAAgLQAAgWAQgNQAQgNAaAAQAPAAAMADQANAEAHAEIgKAZQgIgFgKgCQgJgDgLAAQgLAAgHAFQgHAFAAAJQAAAGACAEIAHAHIAKAGIALAFIAVAJQAKAEAGAFQAGAGAEAJQADAIAAAMQAAAXgQAMQgQAMgeAAQgKAAgJgBg");
	this.shape_1.setTransform(69.7,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdBQQgMgEgIgJQgIgJgEgMQgEgNAAgOIAAhnIAfAAIAABkQAAALACAJQADAIAEAFQAFAFAHACQAGADAHAAQAIAAAGgDQAHgCAFgFQAEgFADgIQACgJAAgLIAAhkIAfAAIAABnQAAAOgEANQgEAMgIAJQgIAJgNAEQgMAFgRAAQgRAAgMgFg");
	this.shape_2.setTransform(54.7,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA9QgNgEgHgKQgIgJgEgLQgEgMAAgPQAAgPAFgMQAFgNAIgIQAIgJALgEQALgEAKAAQAaAAAOAQQAPAQAAAgIAAAEIAAAGIhTAAQACAPAJAJQAJAIASAAQAKAAAJgCIAOgEIAEAYIgHACIgKACIgLACIgNABQgPAAgNgFgAAcgLQAAgHgCgFQgCgGgDgEQgDgDgFgCQgEgDgHAAQgGAAgFADQgFACgEAEQgDAFgCAEIgCAMIA1AAIAAAAg");
	this.shape_3.setTransform(33.8,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXBeIAAhDIgBgRQgBgHgDgEQgDgEgFgCQgFgCgHAAIgMABIgIACIAABkIgeAAIAAi2IAegEIAAA+IALgDIALgCQAPABAKAEQAKAEAGAIQAHAHACALQADAJAAAOIAABHg");
	this.shape_4.setTransform(20,22.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBQQgKgEgFgHQgFgGgCgLQgCgJAAgNIAAhsIAdgFIAAAnIArAAIAAAYIgrAAIAAAyQAAAQAFAGQAEAGALAAQAIAAAGgBIAKgDIAFAWIgOAFQgIACgLABQgNgBgIgDg");
	this.shape_5.setTransform(8.5,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXBBIAAhCIgBgRQgBgHgDgFQgDgEgFgCQgGgCgGAAIgMAAIgIACIAABlIgeAAIAAh5IAWgFQAOgCAQgBQAPABAKAEQAKAEAGAIQAHAHACALQADALAAANIAABGg");
	this.shape_6.setTransform(-9.7,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNBbIAAh9IAcAAIAAB9gAgLg6QgGgFAAgJQAAgIAGgFQAFgEAGgBQAIABAFAEQAFAFAAAIQAAAJgFAFQgFAEgIAAQgGAAgFgEg");
	this.shape_7.setTransform(-20.2,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA/IgNgmIgMgpIgLApIgNAmIgYAAIgKgaIgLgdIgKgiIgKgkIAeAAIAGAVIAFAYIAHAYIAHAUIAHgWIAGgXIAGgXIAGgVIAVAAIAFAVIAFAXIAHAXIAHAWIAGgUIAHgYIAHgYIAEgVIAfAAIgKAkIgMAiIgKAdIgLAag");
	this.shape_8.setTransform(-38.5,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA9QgLgEgJgJQgHgJgFgMQgFgNABgOQgBgOAFgNQAFgMAHgIQAIgJAMgFQALgEAMAAQANAAALAEQAMAFAHAJQAJAIAEAMQAEANAAAOQAAAOgDANQgFAMgIAJQgIAJgMAEQgLAFgNAAQgNAAgKgFgAgVgdQgJALABASQgBATAJALQAHALAOAAQAOAAAJgLQAHgLABgTQgBgSgHgLQgJgLgOAAQgOAAgHALg");
	this.shape_9.setTransform(-55.1,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXBBIAAhCIgBgRQgBgHgDgFQgDgEgFgCQgGgCgGAAIgMAAIgIACIAABlIgeAAIAAh5IAWgFQAOgCAQgBQAPABAKAEQAKAEAGAIQAHAHACALQADALAAANIAABGg");
	this.shape_10.setTransform(-69.3,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBAIAAhBIgBgRQgBgHgDgEQgDgFgFgCQgGgCgGAAIgMABIgIABIAABkIgeAAIAAh4IAWgFQAOgDAQABQAPAAAKAEQAKAEAGAIQAHAHACALQADALAAAMIAABGg");
	this.shape_11.setTransform(82.1,-3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA9QgNgEgHgKQgIgJgEgLQgEgNAAgNQAAgQAFgMQAFgNAIgJQAJgIAKgEQALgEAJAAQAaAAAPAQQAPAQAAAgIgBAEIAAAGIhSAAQABAPAKAIQAKAJAQAAQALAAAJgCIAOgEIAEAXIgHADIgJADIgNABIgMABQgQAAgMgFgAAbgMQABgFgCgGQgCgGgDgEQgDgEgFgCQgFgCgGAAQgGAAgFACQgFADgEAEQgDAEgCAFIgDALIA1AAIAAAAg");
	this.shape_12.setTransform(68.1,-2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWBdIgKgPIgMgQIgMgPIgNgLIAAA5IgeAAIAAi1IAegFIAABuIALgNIANgMIAKgNIAJgLIAjAAIgaAcIgaAbIAPAPIAPASIAOATIALASg");
	this.shape_13.setTransform(55.4,-6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNA9QgLgEgJgKQgHgIgEgMQgEgNAAgOQAAgNAEgMQAEgMAJgJQAIgJAMgFQALgFANAAQATAAAPAGIgGAYIgMgEQgGgBgHAAQgQAAgJALQgJALAAASQAAATAJALQAIALATAAQAHAAAIgCIAMgDIAEAYQgEACgKACQgKACgKAAQgQAAgMgFg");
	this.shape_14.setTransform(42.7,-2.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNBaIAAh9IAcAAIAAB9gAgMg6QgFgGAAgIQAAgIAFgEQAGgGAHAAQAGAAAGAGQAFAEAAAIQAAAIgFAGQgGAEgGAAQgHAAgGgEg");
	this.shape_15.setTransform(33.3,-5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAXBdIAAhCIgBgRQgBgHgDgDQgDgFgFgCQgFgCgHAAIgMABIgIACIAABjIgeAAIAAi1IAegFIAAA/IALgDIALgBQAPAAAKAEQAKAEAGAIQAHAHACALQADAJAAANIAABHg");
	this.shape_16.setTransform(23.1,-6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBSQgPgGgLgLQgKgMgFgQQgGgQABgVQAAgUAFgQQAHgQALgLQALgMAPgFQAPgGAQAAQALAAAIABIAPAEIAKAEIAGADIgJAZQgGgEgKgDQgMgDgMAAQgKAAgJAEQgJADgHAIQgHAHgEAMQgEALAAAOQAAANADALQADALAHAIQAGAJAJAEQAJAEANAAQAQAAALgDIAQgGIAIAZIgIAEIgMADIgPADIgSABQgSAAgPgFg");
	this.shape_17.setTransform(8.7,-5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUBAQgJgCgHgFQgGgFgEgIQgEgHAAgMQAAgLAEgHQAFgHAHgEQAHgFAJgCQAKgCAKAAIAKABIALACIAAgFIgBgKQgBgFgEgDQgCgDgGgCQgFgCgGAAQgKAAgJABIgNADIgEgXIARgEQAKgCALAAQAOAAAKAEQAKADAGAHQAGAGADAKQACAJAAALIAABLIgUAEQgOACgRAAQgKAAgKgCgAgDAIQgFAAgEACQgEACgDAEQgCADAAAFQABALAGAEQAHAEAKAAQANAAAHgCIAAggIgHgBIgKgBg");
	this.shape_18.setTransform(-11.8,-3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOBQQgJgEgGgGQgFgIgCgKQgDgJABgMIAAhtIAdgFIAAAmIArAAIAAAZIgrAAIAAAyQAAAPAFAHQAEAGALABQAIAAAGgCIAKgEIAFAYIgOAEQgIADgLAAQgNAAgIgEg");
	this.shape_19.setTransform(-22.2,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUA9QgMgEgJgKQgHgJgEgLQgEgNAAgNQAAgQAFgMQAFgNAIgJQAJgIAKgEQAKgEAKAAQAbAAAOAQQAPAQAAAgIgBAEIAAAGIhSAAQABAPAKAIQAJAJARAAQALAAAJgCIAOgEIADAXIgGADIgKADIgMABIgMABQgPAAgNgFgAAcgMQgBgFgBgGQgCgGgDgEQgDgEgFgCQgFgCgGAAQgGAAgFACQgFADgDAEQgEAEgCAFIgCALIA1AAIAAAAg");
	this.shape_20.setTransform(-34.8,-2.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBVIgUgFIAGgZQAHADAKACQAJACALAAQARAAAHgHQAIgHgBgOIAAgFIgLAEQgHACgIAAQgMAAgKgEQgKgDgIgIQgHgHgDgMQgFgKAAgPQAAgNAFgMQAEgLAIgJQAIgIAMgEQAMgFANAAQAPAAAMACIAWAFIAABsQAAAegQAOQgPAOgeAAQgMAAgLgCgAgQgzQgJAKABARQAAATAIAIQAHAIANAAQAGAAAGgCIAKgEIAAhBIgHgBIgMgBQgOAAgJALg");
	this.shape_21.setTransform(-49,-0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmBAIAAh2IAWgHQANgCAOAAIAHAAIAHABIAHABIAHACIgGAYIgKgCIgOgBIgKABIgHABIAABkg");
	this.shape_22.setTransform(-59.7,-3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAxBTIgHgTIgIgUIhFAAIgHAUIgGATIghAAIASgxIARgqIAQgmIARgkIAcAAIAQAkIAQAmIAQAqIASAxgAAbATIgPgmIgMggIgMAgIgPAmIA2AAg");
	this.shape_23.setTransform(-73.6,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_napis, new cjs.Rectangle(-83.1,-20.3,173.5,57.7), null);


(lib.mc_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak6D3QhrhIg6iQIguAAIAAA2QAABBACAOIhfAAQAFgqgChZIAAi1IhUADQABgngEgjIBUABIB5gEQBSgBAuAiQAsAfgBA2QgCBKhJAlQAyB6BZA/QBPA3BhAAQBIAABEgeIAYA8QhYAihXAAQh5AAhghAgAoNiXIgBB4IAsAAQAfAAATgSQASgRAAgaQAAg8hLAAgAjiB2Qg3g4AAhPQAAhbA9g7QA9g9BfAAQBLAAA0AkIgYBIQgvghg1AAQg6AAglAlQgkAjAAA1QAAA7AkAkQAhAhA0AAQAiAAAZgLIAAhKIgcgCQgiAAgZADQACghgBghQArACAeAAQAwAAAwgCQgEAZAABoIAAA3QhCAphUAAQhXAAg4g5gAODBRIiQAAIgiBTIhbAAIB+kXQAlhSAHgXIA3gGIB8EWQAfBGAXAqIhgAFgANsATIgxh5IgxB5IBiAAgAsBBRIiQAAIgiBTIhcAAIB/kXQAXgyAIgUQgLgWgMgMQgRgOgbgEIAhhJQBGAKAfBFIB+EbQAdBDAXAtIhfAFgAsYATIgyh5IgwB5IBiAAgAEICkQhSAAgvADQADgiAAhjIAAh7QAAhkgDgiQBbAEC9AAQCfAAB/gEQgFAtAAAjIh0gBIgBDlQAABBACAOIhgAAQAEglAAheIgCiyIkDgBIgBBPICFAAIgBBCIiEAAIABBdIAyACQBAAAA1gDIgEBMQgtgDhSAAgAPFiYQgNgNAAgSQAAgSANgMQANgNASAAQASAAANANQANAMAAASQAAASgNANQgNAMgSAAQgSAAgNgMgAPKjQQgJALAAAOQAAAPAJAKQALALAPAAQAOAAALgLQAKgKAAgPQAAgQgKgJQgLgLgOAAQgPAAgLALgAPkivIgEAAIAAANIgNAAIAAgrIAPAAQAVAAAAAOQAAAIgJAFIAMAQIgOABgAPgjDIAAALIADAAQAIAAAAgGQAAgGgHAAg");
	this.shape.setTransform(0.7,-11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_logo, new cjs.Rectangle(-103.2,-43,208,62.3), null);


(lib.mc_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE5501").s().p("AgIA2QgEgDAAgGQAAgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAGgEADQgEAEgFAAQgFAAgDgEgAgGAUIgDgVIgBgZIAAgfIAUAAIAAAfIgBAZIgCAVg");
	this.shape.setTransform(52.5,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BE5501").s().p("AgNAqQgJgEgFgFQgGgHgCgIQgCgIgBgKQAAgJADgJQAEgJAFgFQAGgGAIgDQAGgDAHAAQASAAAJALQALALAAAWIAAADIAAAEIg4AAQAAAJAHAHQAGAFAMAAQAHAAAGgCIAKgCIACAQIgFACIgGABIgIABIgIABQgLAAgIgDgAATgHQAAgEgCgEIgCgGIgGgFQgDgBgFAAQgDAAgDABQgEACgCADQgDADgBAEIgCAHIAkAAIAAAAg");
	this.shape_1.setTransform(45.3,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE5501").s().p("AgZAsIAAhRIAOgEQAJgCAJAAIAFABIAFAAIAFABIAEABIgDARIgHgCIgKgBIgGABIgFABIAABEg");
	this.shape_2.setTransform(37.9,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE5501").s().p("AgQAqQgHgDgFgGQgGgGgDgJQgDgIAAgKQAAgJADgJQADgIAGgGQAFgGAHgDQAIgDAIAAQAJAAAIADQAHADAFAGQAGAGADAIQADAJAAAJQAAAKgDAIQgDAJgGAGQgFAGgHADQgIADgJAAQgIAAgIgDgAgPgTQgFAHAAAMQAAANAFAHQAGAIAJAAQAKAAAGgIQAEgHAAgNQAAgMgEgHQgGgIgKAAQgJAAgGAIg");
	this.shape_3.setTransform(29.1,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE5501").s().p("AAnAsIAAgsQAAgOgDgGQgEgGgJAAQgFAAgEACIgGADIABAJIABAJIAAAvIgTAAIAAgsQAAgOgDgGQgEgGgJAAIgHABIgGABIAABEIgUAAIAAhSIAPgDQAKgCAKAAQAJAAAFADQAGACADAEIAEgDIAHgDIAHgCIAIgBQAKAAAGADQAHADADAFQAEAFABAIQACAHAAAJIAAAvg");
	this.shape_4.setTransform(17.2,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE5501").s().p("AgZAsIAAhRIAOgEQAJgCAJAAIAFABIAFAAIAFABIAEABIgDARIgHgCIgKgBIgGABIgFABIAABEg");
	this.shape_5.setTransform(3.5,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BE5501").s().p("AgQAqQgHgDgGgGQgFgGgDgJQgDgIAAgKQAAgJADgJQADgIAFgGQAGgGAIgDQAHgDAIAAQAJAAAIADQAHADAFAGQAGAGADAIQADAJAAAJQAAAKgDAIQgDAJgGAGQgEAGgIADQgIADgJAAQgIAAgIgDgAgPgTQgFAHAAAMQAAANAFAHQAGAIAJAAQAKAAAFgIQAGgHgBgNQABgMgGgHQgFgIgKAAQgJAAgGAIg");
	this.shape_6.setTransform(-5.2,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BE5501").s().p("AgaBAIAAhbQgBgQAKgKQAIgKARAAIALACIAIACIgDARIgHgDIgIgBIgIABIgEAFQgCACgBAEIgBAHIAAAGIAfAAIAAARIgfAAIAABEg");
	this.shape_7.setTransform(-12.6,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BE5501").s().p("AAPBAIgHgLIgIgLIgIgKIgJgIIAAAoIgUAAIAAh7IAUgEIAABLIAIgJIAJgIIAGgJIAGgHIAYAAIgRATIgSASIAJAKIALANIAJAMIAIANg");
	this.shape_8.setTransform(-24.4,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BE5501").s().p("AgIAqQgJgEgFgFQgFgHgDgIQgCgIAAgKQAAgIADgJQACgHAGgHQAFgGAIgDQAIgEAJAAQAMAAALAFIgEAQIgIgDIgJgBQgLAAgGAHQgGAIAAAMQAAANAGAIQAFAHANAAIAKgBIAIgDIADARIgKADIgNABQgKAAgIgDg");
	this.shape_9.setTransform(-33.1,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BE5501").s().p("AgJA+IAAhVIATAAIAABVgAgIgoQgDgDAAgFQAAgGADgDQAEgDAEAAQAFAAADADQAEADAAAGQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_10.setTransform(-39.4,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BE5501").s().p("AAAA+QgGgBgDgEQgEgDgBgFIgBgLIAAhiIASgDIAABhIABAGIACAEIAEADIAGABIgCAQQgJAAgFgCg");
	this.shape_11.setTransform(-43.7,-1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BE5501").s().p("AgNA3QgKgEgHgHQgHgIgEgLQgDgLAAgOQAAgNAEgLQAEgLAIgIQAHgHAKgEQALgEAKAAIANABIAKACIAHADIAEACIgGARQgEgDgHgCQgIgCgIAAQgHAAgGADQgGACgFAFQgFAFgCAIQgDAIAAAJQAAAJACAHQACAIAFAFQAEAGAGADQAGADAJAAQALAAAHgCIALgFIAFARIgFADIgIADIgKACIgNAAQgMAAgKgEg");
	this.shape_12.setTransform(-51.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(-79,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cta, new cjs.Rectangle(-79,-24,154,52), null);


(lib.mc_argeta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.doza1300x250();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_argeta2, new cjs.Rectangle(-60,-60,118,118), null);


(lib.mc_argeta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.doza2300x250();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_argeta, new cjs.Rectangle(-60,-60,118,118), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_435 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(435).call(this.frame_435).wait(1));

	// logo
	this.instance = new lib.mc_logo();
	this.instance.parent = this;
	this.instance.setTransform(150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(383).to({_off:false},0).to({alpha:1},20).wait(33));

	// CTA
	this.instance_1 = new lib.mc_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.6,205.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(418).to({_off:false},0).to({alpha:1},15).wait(3));

	// doza-2
	this.instance_2 = new lib.mc_argeta2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(445.1,149.9,1,1,165);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(197).to({_off:false},0).to({rotation:-15,x:172.1,y:150},48,cjs.Ease.quadInOut).to({rotation:0,x:194.1},20,cjs.Ease.quadInOut).wait(72).to({rotation:10.2,x:204.1},15,cjs.Ease.quadInOut).to({regY:-0.1,rotation:-193.7,x:-61.9,y:150.1},35,cjs.Ease.quadIn).to({_off:true},1).wait(48));

	// shadow
	this.instance_3 = new lib.mc_shadow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(439.8,199.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(197).to({_off:false},0).to({x:174.8},48,cjs.Ease.quadInOut).to({x:193.3},20,cjs.Ease.quadInOut).wait(72).to({x:202.8},15,cjs.Ease.quadInOut).to({x:-60.1},35,cjs.Ease.quadIn).to({_off:true},1).wait(48));

	// doza-1
	this.instance_4 = new lib.mc_argeta();
	this.instance_4.parent = this;
	this.instance_4.setTransform(358.6,149.9,1,1,165);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176).to({_off:false},0).to({rotation:-15,x:85.6,y:150},48,cjs.Ease.quadInOut).to({rotation:0,x:107.6},20,cjs.Ease.quadInOut).wait(72).to({rotation:9,x:118.6},15,cjs.Ease.quadInOut).to({rotation:-135,x:-82.4},35,cjs.Ease.quadIn).to({_off:true},1).wait(69));

	// shadow
	this.instance_5 = new lib.mc_shadow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(361.3,199.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(176).to({_off:false},0).to({x:85.3},48,cjs.Ease.quadInOut).to({x:108.3},20,cjs.Ease.quadInOut).wait(72).to({x:117.8},15,cjs.Ease.quadInOut).to({x:-81.7},35,cjs.Ease.quadIn).to({_off:true},1).wait(69));

	// bg
	this.instance_6 = new lib.mc_slika();
	this.instance_6.parent = this;
	this.instance_6.setTransform(247.3,228.7,1.104,1.104,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({regX:0.4,regY:0.1,scaleX:0.61,scaleY:0.61,x:179.1,y:143.9},88,cjs.Ease.cubicInOut).wait(39).to({alpha:0},15).to({_off:true},1).wait(266));

	// napis
	this.instance_7 = new lib.mc_napis();
	this.instance_7.parent = this;
	this.instance_7.setTransform(145.8,192.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(161).to({y:34.1},36,cjs.Ease.cubicInOut).wait(175).to({alpha:0},15).to({_off:true},1).wait(48));

	// bg
	this.instance_8 = new lib._300x250bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(436));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.8,77.4,552.2,298.2);
// library properties:
lib.properties = {
	id: 'B89C76B29F3E4DAFA8823BAB352F373F',
	width: 300,
	height: 250,
	fps: 36,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_300x250bg.jpg?1518714210143", id:"_300x250bg"},
		{src:"images/bg300x250.jpg?1518714210143", id:"bg300x250"},
		{src:"images/cta.png?1518714210143", id:"cta"},
		{src:"images/doza1300x250.png?1518714210143", id:"doza1300x250"},
		{src:"images/doza2300x250.png?1518714210143", id:"doza2300x250"},
		{src:"images/shadow.png?1518714210143", id:"shadow"}
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