var mongoose = require('mongoose');
var MpathSchema = require('../schemas/mpathSchema.js');
var Mpath = mongoose.model('Mpath', MpathSchema);

module.exports = Mpath;