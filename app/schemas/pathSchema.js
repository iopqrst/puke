var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var PathSchema = new Schema({
	pathNames: [],
	user: {type: ObjectId, ref:'User'},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

PathSchema.pre('save', function(next) {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}

	next();
});

PathSchema.statics = {
	fetch: function(cb) {
		return this.find({}).sort('meta.updateAt').exec(cb);
	}
};

module.exports = PathSchema;