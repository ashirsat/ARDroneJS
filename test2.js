var cv = require('opencv')

var window = new cv.NamedWindow('Matrix Preview', 0);

// var lower_threshold = [180, 0, 40];
// var upper_threshold = [225, 110, 135];

var lower_threshold = [40, 0, 180];
var upper_threshold = [135, 110, 225];

var BLUE  = [0, 255, 0]; // B, G, R
var RED   = [0, 0, 255]; // B, G, R
var GREEN = [0, 255, 0]; // B, G, R
var WHITE = [255, 255, 255]; // B, G, R

// try {
//   var camera = new cv.VideoCapture(0);
//   var window = new cv.NamedWindow('Video', 0)

//   setInterval(function() {
//       camera.read(function(err, im) {
//         if (err) throw err;

//         if (im.size()[0] > 0 && im.size()[1] > 0){
//           im.inRange(lower_threshold, upper_threshold);
//           window.show(im);
//         }

//         window.blockingWaitKey(0, 50);
//       });
//     }, 20);
// }
// catch (e){
//   console.log("Couldn't start camera:", e)
// }

cv.readImage('./test.jpg', function(err, im) {
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

  im.inRange(lower_threshold, upper_threshold);

  var out = new cv.Matrix(im.height(), im.width());
  var contours = im.findContours();

  // Access vertex data of contours
  // for (i = 0; i < contours.size(); i++) {

  //   if (contours.area(i) < 2000) continue;

  //   var arcLength = contours.arcLength(i, true);
  //   contours.approxPolyDP(i, 0.01 * arcLength, true);

  //   switch(contours.cornerCount(i)) {
  //     case 3:
  //       out.drawContour(contours, i, GREEN);
  //       break;
  //     case 4:
  //       out.drawContour(contours, i, RED);
  //       break;
  //     default:
  //       out.drawContour(contours, i, WHITE);
  //   }
  // }



  // Access vertex data of contours
  for (i = 0; i < contours.size(); i++) {

  //   if (contours.area(i) < 2000) continue;

  //   var arcLength = contours.arcLength(i, true);
  //   contours.approxPolyDP(i, 0.01 * arcLength, true);

  //   switch(contours.cornerCount(i)) {
  //     case 3:
  //       out.drawContour(contours, i, GREEN);
  //       break;
  //     case 4:
  //       out.drawContour(contours, i, RED);
  //       break;
  //     default:
  //       out.drawContour(contours, i, WHITE);
  //   }
  }

  out.save('./detect-shapes.png');

  im.save('./red_detected2.jpg');
});

