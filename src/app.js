#!/usr/bin/env node

var core = require('n3d-core')
var opts = {
		docroot: process.cwd()
	, port: 8000
}

core.startServer(opts)
