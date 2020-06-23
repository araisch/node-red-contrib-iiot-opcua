"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}module.exports=function(f){require("source-map-support").install();var g=require("./core/opcua-iiot-core-method");f.nodes.registerType("OPCUA-IIoT-Method-Caller",function(e){f.nodes.createNode(this,e),this.objectId=e.objectId,this.methodId=e.methodId,this.methodType=e.methodType,this.value=e.value,this.justValue=e.justValue,this.name=e.name,this.showStatusActivities=e.showStatusActivities,this.showErrors=e.showErrors,this.inputArguments=e.inputArguments,this.connector=f.nodes.getNode(e.connector);var h=g.core.initClientNode(this);g.core.assert(h.bianco.iiot),h.bianco.iiot.handleMethodError=function(e,t){g.internalDebugLog(e),h.showErrors&&h.error(e,t),g.core.isSessionBad(e)&&h.emit("opcua_client_not_ready")},h.bianco.iiot.handleMethodWarn=function(e){h.showErrors&&h.warn(e),g.internalDebugLog(e)},h.bianco.iiot.callMethodOnSession=function(e,t){g.core.checkSessionNotValid(e,"MethodCaller")||(t.methodId&&t.inputArguments?g.getArgumentDefinition(h.bianco.iiot.opcuaSession,t).then(function(e){g.detailDebugLog("Call Argument Definition Results: "+JSON.stringify(e)),h.bianco.iiot.callMethod(t,e)}).catch(function(e){g.core.isInitializedBiancoIIoTNode(h)?h.bianco.iiot.handleMethodError(e,t):g.internalDebugLog(e.message)}):g.internalDebugLog(new Error("No Method Id And/Or Parameters")))},h.bianco.iiot.callMethod=function(l,d){g.callMethods(h.bianco.iiot.opcuaSession,l).then(function(e){g.detailDebugLog("Methods Call Results: "+JSON.stringify(e));var t=null,o=[],n=Object.assign({},e.msg);n.nodetype="method",n.methodType=e.msg.methodType;var i=!0,r=!1,s=void 0;try{for(var a,u=e.results[Symbol.iterator]();!(i=(a=u.next()).done);i=!0)t=a.value,o.push({statusCode:t.statusCode,outputArguments:t.outputArguments})}catch(e){r=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(r)throw s}}var c={};c=h.justValue?(n.inputArguments&&delete n.inputArguments,JSON.stringify(o,null,2)):JSON.stringify({results:e.results,definition:d},null,2);try{f.util.setMessageProperty(n,"payload",JSON.parse(c))}catch(e){h.showErrors&&(h.warn("JSON not to parse from string for dataValues type "+("undefined"==typeof readResult?"undefined":_typeof(readResult))),h.error(e,l)),n.payload=c,n.error=e.message}h.send(n)}).catch(function(e){g.internalDebugLog(e),h.showErrors&&h.error(e,l)})},h.on("input",function(e){if(g.core.checkConnectorState(h,e,"MethodCaller")){var t=g.buildCallMessage(h,e);g.invalidMessage(h,t)||h.bianco.iiot.callMethodOnSession(h.bianco.iiot.opcuaSession,t)}}),g.core.registerToConnector(h),h.on("close",function(e){g.core.deregisterToConnector(h,function(){g.core.resetBiancoNode(h),e()})})})};
//# sourceMappingURL=maps/opcua-iiot-method-caller.js.map
