const a=['once','EventType','FINISHED','Normal','scheduleOnce','GameWinSound','updateLastCardsResult','WrapMode','Reverse','cacheBettingGroupButton','cacheLabellayer','add','GameLooseSound','find','getComponent','Button','Buttons/BigBettingGroup','children','LabelLayer','LabelBank','Label','LabelMultiply2To','getChildByName','LabelMultiply6To','getSpriteFrame','Pad','getDiceWithDifferentAngle','diceAtlas','Result_','btnTakeWin','enabled','disableBettingButtons','updateBettingInfomation','string','BeautifyNumber','smallDice','loadBundle','gamble-dice','error','textures/','getLanguageCode','/Gamble','SpriteAtlas','SafeArea/ActivateButtons/BtnDemoDice','UItools','ChangeButtonSpriteFrame','Gamble1','all','Sprite','prototype','currentDiceResult','Node','Animation','AudioClip','DicePanelModule','__require','length','function','Cannot\x20find\x20module\x20\x27','call','exports','_RF','push','e2cb7S3jZVHmpPAyDQctn1R','__esModule','DicePanelConst','game.cache','6286c6d8RJMi6WaeU58e+oq','DicePanelEnum','defineProperty','Status','Active','Inactive','One','Two','Three','Four','Five','Six','Big','Small','BetType','pop','0406cxEOr9BP6fMzplo4j7I','DicePanelEvent','OnResultUpdate','DicePanelEvent.OnResultUpdate','772b2lTAARA5o/ohff6e/5g','DicePanelModel','diceActive','diceResult','numbersForRandom','91994wdBfJG5rvyfPEb+jzS','__awaiter','next','throw','value','then','apply','./DicePanelModel','./DicePanelEnum','Component','init','data','generateRangeNumber','getDicePanelStatus','setDicePanelStatus','setDiceResult','getLastDiceResults','clearDiceResult','getDiceResult','bigSmall','number','betType','addLastDiceResult','lastDiceResults','shift','DicePanelPrefab','__decorate','getOwnPropertyDescriptor','object','decorate','__importDefault','../../../scripts/framework/lib/router/PanelComponent','../../../scripts/HelperTools','../../../scripts/manager/AudioManager','../../../scripts/manager/GameSystemManager','./DicePanelModule','_decorator','PanelComponent','lastResults','cupOpenAnimation','shaziSound','gameWinSound','gameLooseSound','labelLayer','smallBettingGroup','bigBettingGroup','start','loadDiceAssets','setupDiceModule','show','onShowed','hide','onHided','activeDicePanel','dummyPlayerBalanceManager','balance','default','getInstance','play','ClickSound','resetBettingUI','diceGroup','disableCommonButtons','playCupShakeAimation','enableCommonButtons','active','inActiveDicePanel','placeBet','showDiceResult','playCupOpenAimation','winAmount','Delay','enableBettingButtons','updateBank','getDiceSpriteFrame','spriteFrame','AsyncTask','ShaziSound','cupButtom','node','cupShakeAnimation'];(function(b,e){const f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0xe4));const b=function(c,d){c=c-0x0;let e=a[c];return e;};window[b('0x0')]=function e(d,f,g){function h(m,p){if(!f[m]){if(!d[m]){var q=m['split']('/');if(q=q[q[b('0x1')]-0x1],!d[q]){var v=b('0x2')==typeof __require&&__require;if(!p&&v)return v(q,!0x0);if(j)return j(q,!0x0);throw new Error(b('0x3')+m+'\x27');}m=q;}var w=f[m]={'exports':{}};d[m][0x0][b('0x4')](w[b('0x5')],function(x){return h(d[m][0x1][x]||x);},w,w[b('0x5')],e,d,f,g);}return f[m][b('0x5')];}for(var j=b('0x2')==typeof __require&&__require,k=0x0;k<g[b('0x1')];k++)h(g[k]);return h;}({'DicePanelConst':[function(c,d,f){'use strict';cc[b('0x6')][b('0x7')](d,b('0x8'),'DicePanelConst'),Object['defineProperty'](f,b('0x9'),{'value':!0x0}),f['DicePanelConst']=void 0x0,f[b('0xa')]={'CacheKey':b('0xb')},cc['_RF']['pop']();},{}],'DicePanelEnum':[function(c,d,f){'use strict';cc['_RF'][b('0x7')](d,b('0xc'),b('0xd')),Object[b('0xe')](f,'__esModule',{'value':!0x0}),f['BetType']=f[b('0xf')]=void 0x0,function(g){g[g['Active']=0x1]=b('0x10'),g[g[b('0x11')]=0x0]=b('0x11');}(f['Status']||(f['Status']={})),function(g){g[g[b('0x12')]=0x1]=b('0x12'),g[g[b('0x13')]=0x2]='Two',g[g[b('0x14')]=0x3]=b('0x14'),g[g[b('0x15')]=0x4]=b('0x15'),g[g[b('0x16')]=0x5]=b('0x16'),g[g['Six']=0x6]=b('0x17'),g[g[b('0x18')]=0x7]=b('0x18'),g[g[b('0x19')]=0x8]=b('0x19');}(f[b('0x1a')]||(f[b('0x1a')]={})),cc['_RF'][b('0x1b')]();},{}],'DicePanelEvent':[function(c,d,f){'use strict';cc['_RF']['push'](d,b('0x1c'),'DicePanelEvent'),Object[b('0xe')](f,b('0x9'),{'value':!0x0}),f['DicePanelEvent']=void 0x0,(f[b('0x1d')]||(f[b('0x1d')]={}))[b('0x1e')]=b('0x1f'),cc['_RF'][b('0x1b')]();},{}],'DicePanelModel':[function(c,d,f){'use strict';cc[b('0x6')]['push'](d,b('0x20'),b('0x21')),Object[b('0xe')](f,'__esModule',{'value':!0x0}),f[b('0x21')]=void 0x0,f[b('0x21')]=class{constructor(){this[b('0x22')]=!0x1,this[b('0x23')]=null,this[b('0x24')]=[],this['lastDiceResults']=[];}},cc[b('0x6')][b('0x1b')]();},{}],'DicePanelModule':[function(d,f,g){'use strict';cc['_RF'][b('0x7')](f,b('0x25'),'DicePanelModule');var h=this&&this[b('0x26')]||function(p,q,r,u){return new(r||(r=Promise))(function(v,w){function x(A){try{z(u[b('0x27')](A));}catch(B){w(B);}}function y(A){try{z(u[b('0x28')](A));}catch(B){w(B);}}function z(A){var B;A['done']?v(A[b('0x29')]):(B=A[b('0x29')],B instanceof r?B:new r(function(C){C(B);}))[b('0x2a')](x,y);}z((u=u[b('0x2b')](p,q||[]))[b('0x27')]());});};Object['defineProperty'](g,b('0x9'),{'value':!0x0});const j=d(b('0x2c')),k=d(b('0x2d')),l=d('../../../scripts/HelperTools');class m extends cc[b('0x2e')]{static[b('0x2f')](){this[b('0x30')]=new j[(b('0x21'))](),this[b('0x30')][b('0x24')]=this[b('0x31')](0x1,0x6);}static[b('0x32')](){return this[b('0x30')][b('0x22')];}static[b('0x33')](p){this[b('0x30')][b('0x22')]=Boolean(p);}static[b('0x34')](p){this[b('0x30')][b('0x23')]=p;}static[b('0x35')](){return this[b('0x30')]['lastDiceResults'];}static[b('0x36')](){this[b('0x30')][b('0x23')]=null,this[b('0x30')]['lastDiceResults']=[];}static[b('0x37')](p,q){return h(this,void 0x0,void 0x0,function*(){return new Promise(r=>{const u=l['Shuffle'](this[b('0x30')][b('0x24')])[0x0],v={'number':u,'bigSmall':u<=0x3?k[b('0x1a')][b('0x19')]:k['BetType'][b('0x18')]};let w=0x0;switch(p){case k[b('0x1a')]['Big']:case k[b('0x1a')][b('0x19')]:p===v[b('0x38')]&&(w=0x2*q);break;case k[b('0x1a')]['One']:case k[b('0x1a')][b('0x13')]:case k[b('0x1a')][b('0x14')]:case k[b('0x1a')]['Four']:case k[b('0x1a')][b('0x16')]:case k['BetType']['Six']:p===v[b('0x39')]&&(w=0x6*q);}const x={'betType':v[b('0x39')],'winAmount':w};this[b('0x34')](x),this['addLastDiceResult'](x[b('0x3a')]),r(x);});});}static[b('0x3b')](p){this[b('0x30')][b('0x3c')][b('0x1')]>=0x8&&this[b('0x30')][b('0x3c')][b('0x3d')](),this[b('0x30')]['lastDiceResults']['push'](p);}static[b('0x31')](p,q){const r=[];for(let u=p;u<=q;u++)r[b('0x7')](u);return r;}}g['default']=m,m['data']=null,cc[b('0x6')][b('0x1b')]();},{'../../../scripts/HelperTools':void 0x0,'./DicePanelEnum':b('0xd'),'./DicePanelModel':b('0x21')}],'DicePanelPrefab':[function(f,g,j){'use strict';cc[b('0x6')][b('0x7')](g,'14b40h61EdPPqMlcHf02nRF',b('0x3e'));var k=this&&this[b('0x3f')]||function(F,G,H,I){var J,K=arguments[b('0x1')],L=K<0x3?G:null===I?I=Object[b('0x40')](G,H):I;if(b('0x41')==typeof Reflect&&b('0x2')==typeof Reflect[b('0x42')])L=Reflect[b('0x42')](F,G,H,I);else for(var M=F[b('0x1')]-0x1;M>=0x0;M--)(J=F[M])&&(L=(K<0x3?J(L):K>0x3?J(G,H,L):J(G,H))||L);return K>0x3&&L&&Object[b('0xe')](G,H,L),L;},q=this&&this[b('0x26')]||function(F,G,H,I){return new(H||(H=Promise))(function(J,K){function L(O){try{N(I[b('0x27')](O));}catch(P){K(P);}}function M(O){try{N(I['throw'](O));}catch(P){K(P);}}function N(O){var P;O['done']?J(O['value']):(P=O[b('0x29')],P instanceof H?P:new H(function(Q){Q(P);}))[b('0x2a')](L,M);}N((I=I['apply'](F,G||[]))[b('0x27')]());});},v=this&&this[b('0x43')]||function(F){return F&&F[b('0x9')]?F:{'default':F};};Object['defineProperty'](j,'__esModule',{'value':!0x0});const w=f(b('0x44')),x=f(b('0x45')),y=v(f(b('0x46'))),z=v(f(b('0x47'))),A=f(b('0x2d')),B=v(f(b('0x48'))),{ccclass:C,property:D}=cc[b('0x49')];let E=class extends w[b('0x4a')]{constructor(){super(...arguments),this['diceGroup']=null,this['currentDiceResult']=null,this['btnTakeWin']=null,this[b('0x4b')]=null,this['diceAtlas']=null,this[b('0x4c')]=null,this['cupShakeAnimation']=null,this['cupButtom']=null,this[b('0x4d')]=null,this[b('0x4e')]=null,this[b('0x4f')]=null,this['dummyPlayerBalanceManager']={'balance':0x0},this[b('0x50')]={'LabelBank':null,'LabelMultiply2To':null,'LabelMultiply6To':null},this[b('0x51')]=[],this[b('0x52')]=[];}[b('0x53')](){return q(this,void 0x0,void 0x0,function*(){yield this[b('0x54')](),this[b('0x55')]();});}[b('0x56')](F){F[b('0x57')]();}[b('0x58')](F){F[b('0x59')]();}[b('0x5a')](){return q(this,void 0x0,void 0x0,function*(){this[b('0x5b')][b('0x5c')]<=0x0&&(this[b('0x5b')]['balance']=13.31),y[b('0x5d')][b('0x5e')]()[b('0x5f')](b('0x60')),this[b('0x61')](),B[b('0x5d')][b('0x33')](A[b('0xf')][b('0x10')]),this[b('0x62')]['active']=!0x0,this[b('0x63')](),this['disableBettingButtons'](),yield this[b('0x64')](),this[b('0x65')](),this['enableBettingButtons']();});}['inActiveDicePanel'](){B[b('0x5d')][b('0x33')](A[b('0xf')][b('0x11')]),this[b('0x62')][b('0x66')]=!0x1;}['takeWin'](){this[b('0x67')]();}[b('0x68')](F,G){return q(this,void 0x0,void 0x0,function*(){y[b('0x5d')]['getInstance']()['play']('ClickSound'),this['disableCommonButtons'](),this['disableBettingButtons']();const H=yield B[b('0x5d')][b('0x37')](Number(G),this['dummyPlayerBalanceManager'][b('0x5c')]);this[b('0x69')](H),yield this[b('0x6a')](H),this[b('0x5b')]['balance']=H['winAmount'],H[b('0x6b')]>0x0?(yield x[b('0x6c')](0.25),yield this[b('0x64')](),this[b('0x61')]()):(yield x[b('0x6c')](0x2),this[b('0x67')]());});}[b('0x61')](){this['enableCommonButtons'](),this[b('0x6d')](),this['updateBettingInfomation'](),this[b('0x6e')]();}['showDiceResult'](F){const G=this[b('0x6f')](F[b('0x3a')]);this['currentDiceResult'][b('0x70')]=G['bigDice'];}[b('0x64')](){return q(this,void 0x0,void 0x0,function*(){yield x[b('0x71')](F=>{y['default'][b('0x5e')]()[b('0x5f')](b('0x72')),this[b('0x73')][b('0x74')][b('0x66')]=!0x1,this[b('0x75')]['node']['active']=!0x0,this['cupShakeAnimation'][b('0x5f')](),this['cupShakeAnimation'][b('0x76')](cc['Animation'][b('0x77')][b('0x78')],()=>{this[b('0x73')]['node']['active']=!0x0,this['cupShakeAnimation']['node'][b('0x66')]=!0x1,F();});});});}[b('0x6a')](F){return q(this,void 0x0,void 0x0,function*(){yield x['AsyncTask'](G=>{this[b('0x4c')]['play']()['wrapMode']=cc['WrapMode'][b('0x79')],this[b('0x7a')](()=>{F[b('0x6b')]>0x0?y[b('0x5d')][b('0x5e')]()[b('0x5f')](b('0x7b')):y[b('0x5d')]['getInstance']()[b('0x5f')]('GameLooseSound');},0.4),this[b('0x4c')][b('0x76')](cc['Animation'][b('0x77')][b('0x78')],()=>q(this,void 0x0,void 0x0,function*(){yield x[b('0x6c')](0x2),this[b('0x7c')](),G();}));}),yield x[b('0x71')](G=>{this['cupOpenAnimation']['play']()['wrapMode']=cc[b('0x7d')][b('0x7e')],this['cupOpenAnimation']['once'](cc['Animation']['EventType'][b('0x78')],()=>{G();});});});}[b('0x55')](){B[b('0x5d')][b('0x2f')](),this[b('0x7f')](),this[b('0x80')](),y[b('0x5d')]['getInstance']()['add'](b('0x72'),this['shaziSound']),y[b('0x5d')][b('0x5e')]()[b('0x81')](b('0x7b'),this[b('0x4e')]),y[b('0x5d')][b('0x5e')]()['add'](b('0x82'),this[b('0x4f')]);}['cacheBettingGroupButton'](){const F=cc[b('0x83')]('Buttons/SmallBettingGroup',this[b('0x62')])['children'];for(const H of F)this[b('0x51')][b('0x7')](H[b('0x84')](cc[b('0x85')]));const G=cc['find'](b('0x86'),this['diceGroup'])[b('0x87')];for(const I of G)this['bigBettingGroup'][b('0x7')](I[b('0x84')](cc[b('0x85')]));}[b('0x80')](){const F=cc[b('0x83')](b('0x88'),this[b('0x62')]);this[b('0x50')]['LabelBank']=F['getChildByName'](b('0x89'))[b('0x84')](cc[b('0x8a')]),this[b('0x50')][b('0x8b')]=F[b('0x8c')](b('0x8b'))[b('0x84')](cc['Label']),this[b('0x50')][b('0x8d')]=F['getChildByName'](b('0x8d'))[b('0x84')](cc[b('0x8a')]);}['getDiceSpriteFrame'](F){const G=this['diceAtlas'][b('0x8e')]('History_'+x[b('0x8f')](F,0x2)),H=this[b('0x90')](F);return{'smallDice':G,'bigDice':this[b('0x91')][b('0x8e')](b('0x92')+x[b('0x8f')](H,0x2))};}[b('0x90')](F){const G=0x4*F,H=G-0x3;return x['GetRandomInterger'](H,G);}[b('0x65')](){this[b('0x93')]['node'][b('0x66')]=!0x0;}[b('0x63')](){this[b('0x93')]['node'][b('0x66')]=!0x1;}[b('0x6d')](){for(const F of this[b('0x51')])F['enabled']=!0x0;for(const G of this[b('0x52')])G[b('0x94')]=!0x0;}[b('0x95')](){for(const F of this[b('0x51')])F[b('0x94')]=!0x1;for(const G of this[b('0x52')])G['enabled']=!0x1;}[b('0x96')](){const F=this[b('0x5b')]['balance'];this['labelLayer'][b('0x8b')][b('0x97')]=x[b('0x98')](0x2*F,0x2),this[b('0x50')]['LabelMultiply6To']['string']=x[b('0x98')](0x6*F,0x2);}[b('0x6e')](){this[b('0x50')][b('0x89')][b('0x97')]=x['BeautifyNumber'](this['dummyPlayerBalanceManager'][b('0x5c')],0x2);}[b('0x7c')](){const F=B[b('0x5d')][b('0x35')]();for(let G=0x0,H=F[b('0x1')];G<H;G++){const I=this[b('0x4b')][b('0x87')][G],J=F[G],K=this[b('0x6f')](J);I[b('0x66')]=!0x0,I[b('0x84')](cc['Sprite'])[b('0x70')]=K[b('0x99')];}}[b('0x54')](){return q(this,void 0x0,void 0x0,function*(){return new Promise(F=>{cc['assetManager'][b('0x9a')](b('0x9b'),(G,H)=>{if(G)return console[b('0x9c')](G);const I=b('0x9d')+z[b('0x5d')]['getInstance']()[b('0x9e')](),J=x[b('0x71')](K=>q(this,void 0x0,void 0x0,function*(){H['load'](I+b('0x9f'),cc[b('0xa0')],(L,M)=>{const N=cc['find'](b('0xa1'),this[b('0x74')])[b('0x84')](cc[b('0x85')]);x[b('0xa2')][b('0xa3')](N,M,{'normalSprite':b('0xa4'),'pressedSprite':'Gamble3'}),K();});}));Promise[b('0xa5')]([J])[b('0x2a')](()=>{F();});});});});}};k([D(cc['Node'])],E['prototype'],b('0x62'),void 0x0),k([D(cc[b('0xa6')])],E[b('0xa7')],b('0xa8'),void 0x0),k([D(cc[b('0x85')])],E[b('0xa7')],b('0x93'),void 0x0),k([D(cc[b('0xa9')])],E[b('0xa7')],b('0x4b'),void 0x0),k([D(cc['SpriteAtlas'])],E[b('0xa7')],b('0x91'),void 0x0),k([D(cc[b('0xaa')])],E[b('0xa7')],b('0x4c'),void 0x0),k([D(cc[b('0xaa')])],E[b('0xa7')],b('0x75'),void 0x0),k([D(cc[b('0xa6')])],E[b('0xa7')],b('0x73'),void 0x0),k([D(cc[b('0xab')])],E[b('0xa7')],'shaziSound',void 0x0),k([D(cc[b('0xab')])],E[b('0xa7')],b('0x4e'),void 0x0),k([D(cc['AudioClip'])],E[b('0xa7')],b('0x4f'),void 0x0),E=k([C],E),j[b('0x5d')]=E,cc[b('0x6')][b('0x1b')]();},{'../../../scripts/HelperTools':void 0x0,'../../../scripts/framework/lib/router/PanelComponent':void 0x0,'../../../scripts/manager/AudioManager':void 0x0,'../../../scripts/manager/GameSystemManager':void 0x0,'./DicePanelEnum':b('0xd'),'./DicePanelModule':'DicePanelModule'}]},{},['DicePanelConst','DicePanelEnum',b('0x1d'),b('0x21'),b('0xac'),b('0x3e')]);