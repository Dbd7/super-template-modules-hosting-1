window.__require=function t(e,n,i){function s(o,u){if(!n[o]){if(!e[o]){var r=o.split("/"),c=r,l=o;if(c=c[c.length-1],r.length>1&&(window.cachePath[c]=o),!e[c]){var d="function"==typeof __require&&__require;if(!u&&d)return d(c,!0);if(a)return a(c,!0);if("object"==typeof __quick_compile_project__&&__quick_compile_project__){var h=window.cachePath[c];h&&(l=h);for(var p=l.split("/"),S="",g=p.length;g>0;)p[g]&&".."!=p[g]&&(S="/"+p[g]+S),g--;return c="./assets"+S,__quick_compile_project__.require(c,"preview-scripts/__qc_index__.js")}throw new Error("Cannot find module '"+o+"'")}o=c}var f=n[o]={exports:{}};e[o][0].call(f.exports,function(t){return s(e[o][1][t]||t)},f,f.exports,t,e,n,i)}return n[o].exports}window.cachePath={};for(var a="function"==typeof __require&&__require,o=0;o<i.length;o++)s(i[o]);return s}({Kiss918MenuConst:[function(t,e,n){"use strict";cc._RF.push(e,"9e1deP7pSlIUoFkuYdiizzS","Kiss918MenuConst"),Object.defineProperty(n,"__esModule",{value:!0}),n.Kiss918MenuConst=void 0,n.Kiss918MenuConst={MenuSetting:"menu.setting",AudioSetting:"menu.audio",ShakeSetting:"menu.shake"},cc._RF.pop()},{}],Kiss918MenuEnum:[function(t,e,n){"use strict";cc._RF.push(e,"d9ee7y7SNFMzL9b9DYUU5Ho","Kiss918MenuEnum"),Object.defineProperty(n,"__esModule",{value:!0}),n.MerchantCode=n.Kiss918ShakeStatus=n.Kiss918AudioStatus=void 0,function(t){t[t.On=1]="On",t[t.Off=2]="Off"}(n.Kiss918AudioStatus||(n.Kiss918AudioStatus={})),function(t){t[t.On=1]="On",t[t.Off=2]="Off"}(n.Kiss918ShakeStatus||(n.Kiss918ShakeStatus={})),function(t){t.L22="l22",t.EpicWin="epic"}(n.MerchantCode||(n.MerchantCode={})),cc._RF.pop()},{}],Kiss918MenuModel:[function(t,e,n){"use strict";cc._RF.push(e,"cf713fCAftJJKcx8Zrsa7RX","Kiss918MenuModel"),Object.defineProperty(n,"__esModule",{value:!0}),n.Kiss918MenuSettingModel=void 0;class i{fromJSON(t){return this.audioStatus=t.audioStatus,this.shakeStatus=t.shakeStatus,this}toJSON(){let t={};return Object.assign(t,this)}toJsonString(){return JSON.stringify(this.toJSON())}}n.Kiss918MenuSettingModel=i,n.default=class extends i{},cc._RF.pop()},{}],Kiss918MenuModule:[function(t,e,n){"use strict";cc._RF.push(e,"f44b9EYlpdGQ57xMCDmz6M0","Kiss918MenuModule");var i=this&&this.__createBinding||(Object.create?function(t,e,n,i){void 0===i&&(i=n),Object.defineProperty(t,i,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,i){void 0===i&&(i=n),t[i]=e[n]}),s=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return s(e,t),e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const u=t("../../../../scripts/framework/gg"),r=o(t("../../../../scripts/manager/GameSystemManager")),c=t("./Kiss918MenuConst"),l=t("./Kiss918MenuEnum"),d=a(t("./Kiss918MenuModel"));class h{static init(){this.data=new d.default,this.initMenuSetting()}static getAudioStatus(){return this.data.audioStatus=this.menuSettingModel.audioStatus,this.data.audioStatus}static setAudioStatus(t){this.data.audioStatus=t,this.menuSettingModel.audioStatus=t,this.saveMenuSetting()}static getShakeStatus(){return this.data.shakeStatus=this.menuSettingModel.shakeStatus,this.data.shakeStatus}static setShakeStatus(t){this.data.shakeStatus=t,this.menuSettingModel.shakeStatus=t,this.saveMenuSetting()}static getMerchantCodeLangCode(t){const e=r.default.getInstance().getLanguageCode();if(t===l.MerchantCode.L22||t===l.MerchantCode.EpicWin)switch(e){case"en":return"en-us";case"th":return"th-th";case"zh":return"zh-cn";default:return"en-us"}}static initMenuSetting(){const t=u.gg.storage.getItem(c.Kiss918MenuConst.MenuSetting);if(this.menuSettingModel=null,null==t||""==t)this.menuSettingModel=new d.Kiss918MenuSettingModel,this.initAndSaveMenuSetting();else try{this.menuSettingModel=(new d.Kiss918MenuSettingModel).fromJSON(JSON.parse(t))}catch(n){this.menuSettingModel=new d.Kiss918MenuSettingModel,this.initAndSaveMenuSetting()}const e=r.default.getInstance().getConfig();0===Number(e.sfx)?this.setAudioStatus(l.Kiss918AudioStatus.Off):this.setAudioStatus(l.Kiss918AudioStatus.On)}static initAndSaveMenuSetting(){this.menuSettingModel.audioStatus=l.Kiss918AudioStatus.On,this.menuSettingModel.shakeStatus=l.Kiss918ShakeStatus.On,this.data.audioStatus=l.Kiss918AudioStatus.On,this.data.shakeStatus=l.Kiss918ShakeStatus.On,this.saveMenuSetting()}static saveMenuSetting(){this.menuSettingModel&&u.gg.storage.setItem(c.Kiss918MenuConst.MenuSetting,this.menuSettingModel.toJsonString())}}n.default=h,h.data=null,h.menuSettingModel=null,cc._RF.pop()},{"../../../../scripts/framework/gg":void 0,"../../../../scripts/manager/GameSystemManager":void 0,"./Kiss918MenuConst":"Kiss918MenuConst","./Kiss918MenuEnum":"Kiss918MenuEnum","./Kiss918MenuModel":"Kiss918MenuModel"}],Kiss918MenuPrefab:[function(t,e,n){"use strict";cc._RF.push(e,"791ecpbwTJC+7o9utNMZUNT","Kiss918MenuPrefab");var i=this&&this.__decorate||function(t,e,n,i){var s,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(o=(a<3?s(o):a>3?s(e,n,o):s(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o},s=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(s,a){function o(t){try{r(i.next(t))}catch(e){a(e)}}function u(t){try{r(i.throw(t))}catch(e){a(e)}}function r(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(o,u)}r((i=i.apply(t,e||[])).next())})},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});const o=t("../../../../scripts/framework/gg"),u=t("../../../../scripts/GlobalData"),r=t("../../../../scripts/HelperTools"),c=a(t("../../../../scripts/manager/AudioManager")),l=a(t("../../../../scripts/manager/GameSystemManager")),d=t("../../../../scripts/manager/LocalizeManager"),h=t("../../../../scripts/TweenEasing"),p=t("./Kiss918MenuEnum"),S=a(t("./Kiss918MenuModule")),{ccclass:g,property:f}=cc._decorator;let m=class extends cc.Component{constructor(){super(...arguments),this.btnMenu=null,this.buttonLayout=null,this.menuGroup=null,this.menuContent=null,this.logoutPopUp=null,this.labelMessage=null,this.modalDlgSpriteAtlas=null,this.main={btnMenu:null,btnBack:null,btnHelp:null,btnAudio:null,btnShake:null,btnLogout:null,menuGroup:null,menuContent:null,logoutPopUp:null,labelMessage:null,btnUISpriteAtlas:null,modalDlgSpriteAtlas:null,backURL:null,logoutURL:null}}onLoad(){this.cacheProperty(),this.cacheButtons(),this.setupMenuPrefab()}btnMenuClicked(){this.playClickSoundEffect(),this.main.menuContent.active?this.hideMenu():this.showMenu()}btnBackClicked(){this.playClickSoundEffect(),window.location.href=this.getBackURL()}btnHelpClicked(){this.playClickSoundEffect(),o.gg.eventManager.emit("MenuPrefab.OnShowHelpInformation"),this.hideMenu(),l.default.getInstance().setFPS(30)}btnAudioClicked(){S.default.getAudioStatus()===p.Kiss918AudioStatus.On?(S.default.setAudioStatus(p.Kiss918AudioStatus.Off),r.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"MenuSoundOff1",pressedSprite:"MenuSoundOff2"}),c.default.getInstance().mute()):S.default.getAudioStatus()===p.Kiss918AudioStatus.Off&&(S.default.setAudioStatus(p.Kiss918AudioStatus.On),r.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"MenuSoundOn1",pressedSprite:"MenuSoundOn2"}),c.default.getInstance().unMute(),this.playClickSoundEffect())}btnShakeClicked(){this.playClickSoundEffect(),S.default.getShakeStatus()===p.Kiss918ShakeStatus.On?(S.default.setShakeStatus(p.Kiss918ShakeStatus.Off),r.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff1",pressedSprite:"ShakeOff2"})):S.default.getShakeStatus()===p.Kiss918ShakeStatus.Off&&(S.default.setShakeStatus(p.Kiss918ShakeStatus.On),r.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOn1",pressedSprite:"ShakeOn2"}))}btnLogoutClicked(){this.playClickSoundEffect(),this.main.logoutPopUp.active=!0,this.btnMenuClicked(),o.gg.eventManager.emit("PopoutPanel.OnShow",{showing:!0}),this.node.dispatchEvent(new cc.Event.EventCustom("PopoutPanel.OnShow",!0))}btnLogoutPopUpYes(){this.playClickSoundEffect(),o.gg.eventManager.onOnce("GamePanelPrefab.OnSuccessLogout",()=>{window.location.href=this.getBackURL()}),o.gg.eventManager.emit("GamePanelPrefab.OnLogoutGame")}btnLogoutPopUpNo(){this.playClickSoundEffect(),this.main.logoutPopUp.active=!1,o.gg.eventManager.emit("PopoutPanel.OnShow",{showing:!1}),this.node.dispatchEvent(new cc.Event.EventCustom("PopoutPanel.OnHide",!0))}start(){return s(this,void 0,void 0,function*(){yield this.loadMenuAssets(),this.setupMenuModule(),this.setupLocalize()})}getBackURL(){const t=u.GlobalData.integration.merchantCode;let e="";if(t===p.MerchantCode.L22||t===p.MerchantCode.EpicWin){const n=S.default.getMerchantCodeLangCode(t),i=S.default.getAudioStatus()===p.Kiss918AudioStatus.On?1:0;e=`?lang=${n}&bgm=${i}&sfx=${i}`}return this.main.backURL+e}showMenu(){this.registerEvent(),this.showMenuContent()}hideMenu(){return s(this,void 0,void 0,function*(){this.removeEvent(),yield this.hideMenuContent()})}showMenuContent(){this.main.menuContent.active=!0,cc.tween(this.main.menuContent).set({position:cc.v3(-9)}).to(.5,{position:cc.v3(-222)},{easing:h.TweenEasing.sineOut}).start()}hideMenuContent(){return s(this,void 0,void 0,function*(){yield r.AsyncTask(t=>s(this,void 0,void 0,function*(){cc.tween(this.main.menuContent).to(.5,{position:cc.v3(-9)},{easing:h.TweenEasing.sineIn}).call(()=>{this.main.menuContent.active=!1,t()}).start()}))})}setupLocalize(){this.main.labelMessage.string=d.LocalizeText.Logout.ComfirmExitGame}registerEvent(){o.gg.eventManager.on("SlotEnginePrefab.OnSpinStarted",this.onSpinStarted,this),o.gg.eventManager.on("SlotEnginePrefab.OnSpinStartedByReel",this.onSpinStarteByReel,this)}removeEvent(){o.gg.eventManager.off("SlotEnginePrefab.OnSpinStarted",this.onSpinStarted,this),o.gg.eventManager.off("SlotEnginePrefab.OnSpinStartedByReel",this.onSpinStarteByReel,this)}setupMenuModule(){S.default.init(),this.initButtonUI()}initButtonUI(){S.default.getAudioStatus()===p.Kiss918AudioStatus.On?r.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"MenuSoundOn1",pressedSprite:"MenuSoundOn2"}):S.default.getAudioStatus()===p.Kiss918AudioStatus.Off&&(r.UItools.ChangeButtonSpriteFrame(this.main.btnAudio,this.main.btnUISpriteAtlas,{normalSprite:"MenuSoundOff1",pressedSprite:"MenuSoundOff2"}),c.default.getInstance().mute())}cacheProperty(){this.main.menuContent=this.menuContent,this.main.menuGroup=this.menuGroup,this.main.logoutPopUp=this.logoutPopUp,this.main.labelMessage=this.labelMessage,this.main.modalDlgSpriteAtlas=this.modalDlgSpriteAtlas}cacheButtons(){this.main.btnMenu=this.btnMenu,this.main.btnBack=cc.find("BtnBack",this.menuGroup).getComponent(cc.Button),this.main.btnHelp=cc.find("BtnHelp",this.buttonLayout).getComponent(cc.Button),this.main.btnAudio=cc.find("BtnAudio",this.buttonLayout).getComponent(cc.Button),this.main.btnShake=cc.find("BtnShake",this.buttonLayout).getComponent(cc.Button),this.main.btnLogout=cc.find("BtnLogout",this.buttonLayout).getComponent(cc.Button)}setupMenuPrefab(){const t=l.default.getInstance().getConfig();this.main.backURL=t.backURL,this.main.logoutURL=t.logoutURL;for(const e of t.menuConfig.buttons)if(!e.active)switch(e.name){case"btnBack":this.main.btnBack.node.active=!1;break;case"btnHelp":this.main.btnHelp.node.active=!1;break;case"btnAudio":this.main.btnAudio.node.active=!1;break;case"btnShake":this.main.btnShake.node.active=!1;break;case"btnLogout":this.main.btnLogout.node.active=!1}}playClickSoundEffect(){c.default.getInstance().play("Sfx_ButtonClicks")}onSpinStarted(){this.hideMenu()}onSpinStarteByReel(){this.hideMenu()}loadMenuAssets(){return s(this,void 0,void 0,function*(){return new Promise(t=>{cc.assetManager.loadBundle("kiss918-menu",(e,n)=>{if(e)return console.error(e);const i=l.default.getInstance().getLanguageCode(),a=`textures/${i}`,o=r.AsyncTask(t=>s(this,void 0,void 0,function*(){n.load("textures/GameMenuBtn",cc.SpriteAtlas,(t,e)=>{r.UItools.ChangeButtonSpriteFrame(this.main.btnMenu,e,{normalSprite:"GameMenuBtn1",pressedSprite:"GameMenuBtn2"})}),n.load(`${a}/DerbyBack`,cc.SpriteAtlas,(t,e)=>{r.UItools.ChangeButtonSpriteFrame(this.main.btnBack,e,{normalSprite:"Back_01",pressedSprite:"Back_02"})}),n.load(`${a}/BtnPublic`,cc.SpriteAtlas,(e,n)=>{this.main.btnUISpriteAtlas=n,r.UItools.ChangeButtonSpriteFrame(this.main.btnHelp,this.main.btnUISpriteAtlas,{normalSprite:"MenuHelp1",pressedSprite:"MenuHelp2"}),r.UItools.ChangeButtonSpriteFrame(this.main.btnShake,this.main.btnUISpriteAtlas,{normalSprite:"ShakeOff1",pressedSprite:"ShakeOff2"}),r.UItools.ChangeButtonSpriteFrame(this.main.btnLogout,this.main.btnUISpriteAtlas,{normalSprite:"MenuExit1",pressedSprite:"MenuExi2"});const i=l.default.getInstance().getConfig();let s=0;for(const t of i.menuConfig.buttons)"btnBack"!=t.name&&t.active&&s++;let a=3==s?2:4==s?3:4;cc.find("SafeArea/MenuGroup/MenuContent/Background",this.node).getComponent(cc.Sprite).spriteFrame=n.getSpriteFrame("GameMenuBG"+a),3===a&&(this.buttonLayout.getComponent(cc.Layout).paddingTop=13,this.buttonLayout.getComponent(cc.Layout).spacingY=10),t()});const e=cc.find("SafeArea/LogoutPopUp/Content/BtnYes",this.node),s=cc.find("SafeArea/LogoutPopUp/Content/BtnNo",this.node);let o="";switch(i){case"th":o="Thai";break;case"zh":o="CN";break;default:o="EN"}r.UItools.ChangeButtonSpriteFrame(e.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"Yes"+o+"0",pressedSprite:"Yes"+o+"1"}),r.UItools.ChangeButtonSpriteFrame(s.getComponent(cc.Button),this.main.modalDlgSpriteAtlas,{normalSprite:"No"+o+"0",pressedSprite:"No"+o+"1"})}));Promise.all([o]).then(()=>{t()})})})})}};i([f(cc.Button)],m.prototype,"btnMenu",void 0),i([f(cc.Node)],m.prototype,"buttonLayout",void 0),i([f(cc.Node)],m.prototype,"menuGroup",void 0),i([f(cc.Node)],m.prototype,"menuContent",void 0),i([f(cc.Node)],m.prototype,"logoutPopUp",void 0),i([f(cc.Label)],m.prototype,"labelMessage",void 0),i([f(cc.SpriteAtlas)],m.prototype,"modalDlgSpriteAtlas",void 0),m=i([g],m),n.default=m,cc._RF.pop()},{"../../../../scripts/GlobalData":void 0,"../../../../scripts/HelperTools":void 0,"../../../../scripts/TweenEasing":void 0,"../../../../scripts/framework/gg":void 0,"../../../../scripts/manager/AudioManager":void 0,"../../../../scripts/manager/GameSystemManager":void 0,"../../../../scripts/manager/LocalizeManager":void 0,"./Kiss918MenuEnum":"Kiss918MenuEnum","./Kiss918MenuModule":"Kiss918MenuModule"}]},{},["Kiss918MenuConst","Kiss918MenuEnum","Kiss918MenuModel","Kiss918MenuModule","Kiss918MenuPrefab"]);