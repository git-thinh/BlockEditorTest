var blocklytoolbox = '<xml id="toolbox" style="display: none">'+
'  <category name="Logic">'+
'    <block type="controls_if"></block>'+
'    <block type="logic_compare"></block>'+
'    <block type="logic_operation"></block>'+
'    <block type="logic_negate"></block>'+
'    <block type="logic_boolean"></block>'+
'    <block type="logic_null"></block>'+
'    <block type="logic_ternary"></block>'+
'  </category>'+
'  <category name="Loop">'+
'    <block type="controls_repeat_ext">'+
'      <value name="TIMES">'+
'        <block type="math_number">'+
'          <field name="NUM">10</field>'+
'        </block>'+
'      </value>'+
'    </block>'+
'    <block type="controls_whileUntil"></block>'+
'    <block type="controls_for">'+
'      <value name="FROM">'+
'        <block type="math_number">'+
'          <field name="NUM">1</field>'+
'        </block>'+
'      </value>'+
'      <value name="TO">'+
'        <block type="math_number">'+
'          <field name="NUM">10</field>'+
'        </block>'+
'      </value>'+
'      <value name="BY">'+
'        <block type="math_number">'+
'          <field name="NUM">1</field>'+
'        </block>'+
'      </value>'+
'    </block>'+
'    <block type="controls_forEach"></block>'+
'    <block type="controls_flow_statements"></block>'+
'  </category>'+
'  <category name="Maths">'+
'    <block type="math_number"></block>'+
'    <block type="math_arithmetic"></block>'+
'    <block type="math_single"></block>'+
'    <block type="math_trig"></block>'+
'    <block type="math_constant"></block>'+
'    <block type="math_number_property"></block>'+
'    <block type="math_change">'+
'      <value name="DELTA">'+
'        <block type="math_number">'+
'          <field name="NUM">1</field>'+
'        </block>'+
'      </value>'+
'    </block>'+
'    <block type="math_round"></block>'+
'    <block type="math_on_list"></block>'+
'    <block type="math_modulo"></block>'+
'    <block type="math_constrain">'+
'      <value name="LOW">'+
'        <block type="math_number">'+
'          <field name="NUM">1</field>'+
'        </block>'+
'      </value>'+
'      <value name="HIGH">'+
'        <block type="math_number">'+
'          <field name="NUM">100</field>'+
'        </block>'+
'      </value>'+
'    </block>'+
'    <block type="math_random_int">'+
'      <value name="FROM">'+
'        <block type="math_number">'+
'          <field name="NUM">1</field>'+
'        </block>'+
'      </value>'+
'      <value name="TO">'+
'        <block type="math_number">'+
'          <field name="NUM">100</field>'+
'        </block>'+
'      </value>'+
'    </block>'+
'    <block type="math_random_float"></block>'+
'  </category>'+
'  <category name="String">'+
'    <block type="text"></block>'+
'    <block type="text_join"></block>'+
'    <block type="text_append">'+
'      <value name="TEXT">'+
'        <block type="text"></block>'+
'      </value>'+
'    </block>'+
'    <block type="text_length"></block>'+
'    <block type="text_isEmpty"></block>'+
'    <block type="text_indexOf">'+
'      <value name="VALUE">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'    <block type="text_charAt">'+
'      <value name="VALUE">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'    <block type="text_getSubstring">'+
'      <value name="STRING">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'    <block type="text_changeCase"></block>'+
'    <block type="text_trim"></block>'+
'    <block type="text_print"></block>'+
'    <block type="text_prompt"></block>'+
'  </category>'+
'  <category name="List">'+
'    <block type="lists_create_empty"></block>'+
'    <block type="lists_create_with"></block>'+
'    <block type="lists_repeat">'+
'      <value name="NUM">'+
'        <block type="math_number">'+
'          <field name="NUM">5</field>'+
'        </block>'+
'      </value>'+
'    </block>'+
'    <block type="lists_length"></block>'+
'    <block type="lists_isEmpty"></block>'+
'    <block type="lists_indexOf">'+
'      <value name="VALUE">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'    <block type="lists_getIndex">'+
'      <value name="VALUE">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'    <block type="lists_setIndex">'+
'      <value name="LIST">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'    <block type="lists_getSublist">'+
'      <value name="LIST">'+
'        <block type="variables_get"></block>'+
'      </value>'+
'    </block>'+
'  </category>'+
'  <category name="Variables" custom="VARIABLE"></category>'+
'  <category name="Procedure" custom="PROCEDURE"></category>'+
'</xml>';
var blocklylang = "js/blockly/lang/en.js";
var menu1 = "Simple Mode";
var menu2 = "Advanced Mode";
document.title = "Block Editor Test";