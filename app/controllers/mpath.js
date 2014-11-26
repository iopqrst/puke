var PathModel = require('');

//跳转到添加页面
exports.add = function(req, res) {
	
};

/**
 * 保存或修改
 * @param {Object} req
 * @param {Object} res
 */
exporets.saveOrUpdate = function(req, res) {
	var pathObj = req.body.path;
	var id = req.body.path._id;
	
	// 如何获取路径列表
	var mpathes = [];
	
	if(id) {
		
		PathModel.findById(id, function(err, mpath) {
			if(err) {
				console.info(err);
			}
			
			mpath.mpaths = mpathes; //直接重新赋值
		});
		
	} else {
		
	}
}
