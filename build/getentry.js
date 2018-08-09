var path = require('path')
var glob = require('glob')
exports.getEntry = function (globPath, pathDir) {
  var files = []
  var entries = {}
  var entry, dirname, basename, pathname, extname
  if (typeof globPath === 'string') {
    files = glob.sync(globPath)
  } else if (Array.isArray(globPath)) {
    for (var i = 0, len = globPath.length; i < len; i++) {
      files = files.concat(glob.sync(globPath[i]))
    }
  }
  for (let i = 0; i < files.length; i++) {
    entry = files[i]

    dirname = path.dirname(entry)
    extname = path.extname(entry)
    basename = path.basename(entry, extname)
    pathname = path.join(dirname, basename)
    pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname
    // 替换了 入口文件 前面的一些没用的路径
    entries[pathname.replace('src/js/', '')] = ['./' + entry]
  }
  return entries
}
