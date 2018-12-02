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
