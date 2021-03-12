remark.macros.width = function (width) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + width + '" />';
};

remark.macros.height = function (height) {
  var url = this;
  return '<img src="' + url + '" style="height: ' + height + '" />';
};
