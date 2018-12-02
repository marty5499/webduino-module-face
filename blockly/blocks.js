Blockly.JavaScript['face_get_description'] = function (block) {
  var face_URL = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "await faceAPI.getDescription(" + face_URL + ")"
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['face_get_euclideanDistance'] = function (block) {
  var face1 = Blockly.JavaScript.valueToCode(block, 'faceA', Blockly.JavaScript.ORDER_ATOMIC);
  var face2 = Blockly.JavaScript.valueToCode(block, 'faceB', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "await faceAPI.euclideanDistance(" + face1 + "," + face2 + ")";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

