Blockly.Blocks['face_get_description'] = {
  init: function () {
    this.appendValueInput("description")
      .setCheck("String")
      .appendField("取得臉部特徵值，URL：");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['face_get_euclideanDistance'] = {
  init: function() {
    this.appendValueInput("faceA")
        .setCheck(null)
        .appendField("比對臉部特徵值：");
    this.appendValueInput("faceB")
        .setCheck(null)
        .appendField("差異度 0~1 (0 為最小差異) ");
    this.setInputsInline(false);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};

Blockly.Blocks['face_get_camera'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("camera"), "camera")
        .appendField("影像來源：")
        .appendField(new Blockly.FieldTextInput("http://172.31.99.127/"), "src");
    this.appendStatementInput("img")
        .setCheck(null)
        .appendField("取得影像後執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};


Blockly.Blocks['face_get_canvas'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("從")
      .appendField(new Blockly.FieldVariable("camera"), "camera")
      .appendField("取得影像");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io/');
  }
};