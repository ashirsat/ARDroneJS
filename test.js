var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var cv = require('opencv')
// var http = require('http');

//client.createRepl();

var stream = new cv.ImageStream()
var window = new cv.NamedWindow('Matrix Preview', 0);

// var lower_threshold = [195, 80, 0];
// var upper_threshold = [195, 80, 100];

var lower_threshold = [40, 0, 180];
var upper_threshold = [135, 110, 225];

stream.on('data', function(matrix){
  matrix.inRange(lower_threshold, upper_threshold);
  window.show(matrix);

  var contours = im.findContours;
  console.log(contours);
  //window.blockingWaitKey(0, 50);

  //matrix.save('./test2.jpg');
})

client.getPngStream().pipe(stream);

// var png = null;
// var server = http.createServer(function(req, res) {

    // if (!png) {
    //   png = client.getPngStream();
    //   png.on('error', function (err) {
    //       console.error('png stream ERROR: ' + err);
    //   });
    // }

    // res.writeHead(200, { 'Content-Type': 'multipart/x-mixed-replace; boundary=--daboundary' });
    
    // png.on('data', function sendPng(buffer) {
    //   console.log(buffer.length);
    //   res.write('--daboundary\nContent-Type: image/png\nContent-length: ' + buffer.length + '\n\n');
    //   res.write(buffer);
    // });

    // var s = new cv.ImageStream()

    // s.on('data', function(matrix){
    //   console.log(matrix.length);
    // })

    // client.createPngStream().pipe(s);
// });

// server.listen(8000);