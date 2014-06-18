var webgl = require('n3d-webgl')

// initialize the WebGL rendering context.
var settings = {}

webgl.start(settings, function(err, scene) { 
  if (err) console.error(err)

  // WebGL context is available.
  console.log('ready', scene)
})
