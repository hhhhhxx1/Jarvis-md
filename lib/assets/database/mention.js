const _0x281d9e=_0x17ff;(function(_0x37e3d5,_0xfe3bc9){const _0x23a418=_0x17ff,_0x503cf3=_0x37e3d5();while(!![]){try{const _0xd1f4f3=-parseInt(_0x23a418(0x115))/(-0x2a*0x12+-0x148+0x1f*0x23)+parseInt(_0x23a418(0x11c))/(0xb37*-0x2+0xd77*-0x1+0x23e7)+parseInt(_0x23a418(0x114))/(-0x54+0x1e4f+-0x1df8)*(-parseInt(_0x23a418(0x10d))/(-0x2a7*0xe+-0xd*-0x175+0x1235))+-parseInt(_0x23a418(0x10c))/(0x2*-0x9cf+0x2*0x1085+0x1*-0xd67)+parseInt(_0x23a418(0x111))/(-0xf20+0x1c35*-0x1+0x3f1*0xb)+-parseInt(_0x23a418(0x119))/(-0x17*0x185+-0x268+0x2562)*(-parseInt(_0x23a418(0x11d))/(-0x1*0x2e3+-0x509+0x7f4*0x1))+-parseInt(_0x23a418(0x110))/(-0x1ae6+0x12b*0xc+0xceb*0x1)*(parseInt(_0x23a418(0x122))/(0xb1*-0x19+0x2*0x8+-0x1143*-0x1));if(_0xd1f4f3===_0xfe3bc9)break;else _0x503cf3['push'](_0x503cf3['shift']());}catch(_0x4bc0b7){_0x503cf3['push'](_0x503cf3['shift']());}}}(_0x2e8d,0x2d490+-0x22330+0x1aef8));function _0x17ff(_0x229f8e,_0x328f9c){const _0x1095f3=_0x2e8d();return _0x17ff=function(_0x450e2e,_0x66bcd5){_0x450e2e=_0x450e2e-(-0x23d3+0xdaa+0x1733);let _0x1abb25=_0x1095f3[_0x450e2e];return _0x1abb25;},_0x17ff(_0x229f8e,_0x328f9c);}const config=require(_0x281d9e(0x11e)+_0x281d9e(0x10b)),{DataTypes}=require(_0x281d9e(0x11b)),DB=config[_0x281d9e(0x11a)][_0x281d9e(0x120)](_0x281d9e(0x112),{'MENTION_DATA':{'type':DataTypes[_0x281d9e(0x118)],'allowNull':!![]}});function _0x2e8d(){const _0x2824b2=['876zJYblW','Error\x20in\x20s','etMention:','2250QWIFzE','1784430StlHPx','Mention','xSnuO','1341mETFuf','8714MraEhy','findOne','exports','TEXT','5187VsTdPM','DATABASE','sequelize','323422cYVRQW','3256ukKOqI','../../../c','MENTION_DA','define','create','18770VygQLH','update','error','onfig','145550CJagwS'];_0x2e8d=function(){return _0x2824b2;};return _0x2e8d();}async function setMention(_0x150d03){const _0x2cdc8e=_0x281d9e,_0x3ac630={'xSnuO':_0x2cdc8e(0x10e)+_0x2cdc8e(0x10f)};try{const _0x2ef3e3=await DB[_0x2cdc8e(0x116)]();return!_0x2ef3e3?await DB[_0x2cdc8e(0x121)]({'MENTION_DATA':_0x150d03}):await _0x2ef3e3[_0x2cdc8e(0x123)]({'MENTION_DATA':_0x150d03}),!![];}catch(_0x4946db){return console[_0x2cdc8e(0x10a)](_0x3ac630[_0x2cdc8e(0x113)],_0x4946db),![];}}async function getMention(){const _0x5a91d5=_0x281d9e;try{const _0x497288=await DB[_0x5a91d5(0x116)]();if(!_0x497288)return;return _0x497288[_0x5a91d5(0x11f)+'TA'];}catch(_0x3503cd){return;}}module[_0x281d9e(0x117)]={'setMention':setMention,'getMention':getMention};