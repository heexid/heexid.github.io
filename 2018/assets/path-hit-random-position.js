//Blobs Component
var blobs = {
	paths: 3, //total path
	minPoints: 5, //min point
	maxPoints: 15, //max point
	minRadius: 30, //min rad
	maxRadius: 90 //max rad
};

var hitOptions = {
	segments: true,
	stroke: true,
	fill: true,
	tolerance: 5
};

//Customize colour
var color = Array('#17BF82' , '#9278DA' , '#F25CAF');

createPaths();

function createPaths() {
	var radiusDelta = blobs.maxRadius - blobs.minRadius;
	var pointsDelta = blobs.maxPoints - blobs.minPoints;
	for (var i = 0; i < blobs.paths; i++) {

		//radius blobs
		var radius = blobs.minRadius + Math.random() * radiusDelta;
		
		//poin blobs
		var points = blobs.minPoints + Math.floor(Math.random() * pointsDelta);
		
		//path blobs
		var path = createBlob(view.size * Point.random(), radius, points);
		
		//random color in array
		path.fillColor = color[Math.floor(Math.random()*color.length)];
		
	};
}

function createBlob(center, maxRadius, points) {
	var path = new Path();
	path.closed = true;
	for (var i = 0; i < points; i++) {
		var delta = new Point({
			length: (maxRadius * 1.5) + (Math.random() * maxRadius * 0.5),
			angle: (360 / points) * i
		});
		path.add(center + delta);
	}
	path.smooth();
	return path;
}

/* Editor path
var segment, path;
var movePath = false;
function onMouseDown(event) {
	segment = path = null;
	var hitResult = project.hitTest(event.point, hitOptions);
	if (!hitResult)
		return;

	if (event.modifiers.shift) {
		if (hitResult.type == 'segment') {
			hitResult.segment.remove();
		};
		return;
	}

	if (hitResult) {
		path = hitResult.item;
		if (hitResult.type == 'segment') {
			segment = hitResult.segment;
		} else if (hitResult.type == 'stroke') {
			var location = hitResult.location;
			segment = path.insert(location.index + 1, event.point);
			path.smooth();
		}
	}
	movePath = hitResult.type == 'fill';
	if (movePath)
		project.activeLayer.addChild(hitResult.item);
}

function onMouseMove(event) {
	project.activeLayer.selected = false;
	if (event.item)
		event.item.selected = true;
}

function onMouseDrag(event) {
	if (segment) {
		segment.point += event.delta;
		path.smooth();
	} else if (path) {
		path.position += event.delta;
	}
}
*/