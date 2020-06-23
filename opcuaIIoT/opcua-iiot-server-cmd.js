"use strict";module.exports=function(o){require("source-map-support").install();var n=require("./core/opcua-iiot-core");o.nodes.registerType("OPCUA-IIoT-Server-Command",function(e){o.nodes.createNode(this,e),this.commandtype=e.commandtype,this.nodeId=e.nodeId,this.name=e.name;var i=this;i.bianco=n.createBiancoIIoT(),n.assert(i.bianco.iiot),n.internalDebugLog("Open CMD Node"),i.on("input",function(e){if(e.nodetype="inject",e.injectType="CMD",e.commandType=i.commandtype,e.addressSpaceItems&&0<e.addressSpaceItems.length){var o,n=!0,t=!1,d=void 0;try{for(var a,r=e.addressSpaceItems[Symbol.iterator]();!(n=(a=r.next()).done);n=!0)o=a.value,e.payload={nodeId:o.nodeId},e.payload.nodeId&&i.send(e)}catch(e){t=!0,d=e}finally{try{n||null==r.return||r.return()}finally{if(t)throw d}}}else i.nodeId&&(e.payload={nodeId:i.nodeId}),i.send(e)}),i.on("close",function(e){n.internalDebugLog("Close CMD Node"),n.resetBiancoNode(i),e()})})};
//# sourceMappingURL=maps/opcua-iiot-server-cmd.js.map
