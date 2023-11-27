/*! For license information please see app.52aabf10.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[143],{4592:(e,t,n)=>{var r={"./Home.vue":2215,"./Login.vue":7613,"./components/AddProvisionModal.vue":9101,"./components/EditProvisionModal.vue":5002,"./components/KanbanTable.vue":8476,"./components/Navbar.vue":7541,"./components/ProvisionItem.vue":9201};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=4592},4180:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=4180,e.exports=t},7775:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});n(5399),n(1517),n(8052),n(752),n(228),n(6265),n(6034),n(50),n(1057),n(8932),n(1013),n(739),n(9373),n(9903),n(9749),n(6544),n(9288),n(4254),n(1694);var r=n(6599),o=n(5166);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,a=void 0,a=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===i(a)?a:String(a)),r)}var o,a}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,n,r,i=l(s);function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"connect",value:function(){var e;this.props=null!==(e=this.propsValue)&&void 0!==e?e:null,this.dispatchEvent("connect",{componentName:this.componentValue,props:this.props});var t=window.resolveVueComponent(this.componentValue);this.app=(0,o.createApp)(t,this.props),void 0!==this.element.__vue_app__&&this.element.__vue_app__.unmount(),this.dispatchEvent("before-mount",{componentName:this.componentValue,component:t,props:this.props,app:this.app}),this.app.mount(this.element),this.dispatchEvent("mount",{componentName:this.componentValue,component:t,props:this.props})}},{key:"disconnect",value:function(){this.app.unmount(),this.dispatchEvent("unmount",{componentName:this.componentValue,props:this.props})}},{key:"dispatchEvent",value:function(e,t){this.dispatch(e,{detail:t,prefix:"vue"})}}])&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Qr);u.values={component:String,props:Object};const f={"symfony--ux-vue--vue":u}},7370:(e,t,n)=>{"use strict";n(278),n(228),n(752),n(6265),n(886),n(9358),n(4043),n(7267),n(1057),n(8932),n(4338),n(6203),n(3964);var r=n(5166);var o,i;(0,n(2192).x)(n(4180)),n(9755);n(3138),o=n(4592),i=o.keys().reduce((function(e,t){return e[t]=void 0,e}),{}),window.resolveVueComponent=function(e){return function(e){var t="./".concat(e,".vue");if(!(t in i)){var n=Object.keys(i).map((function(e){return e.replace("./","").replace(".vue","")}));throw new Error('Vue controller "'.concat(e,'" does not exist. Possible values: ').concat(n.join(", ")))}if(void 0===i[t]){var a=o(t);if(a.default)i[t]=a.default;else{if(!(a instanceof Promise))throw new Error('Vue controller "'.concat(e,'" does not exist.'));i[t]=(0,r.defineAsyncComponent)((function(){return new Promise((function(t,n){a.then((function(r){r.default?t(r.default):n(new Error('Cannot find default export in async Vue controller "'.concat(e,'".')))})).catch(n)}))}))}}return i[t]}(e)}},9086:(e,t,n)=>{"use strict";n.d(t,{s:()=>r});n(228),n(3964);var r=function(e){return new Promise((function(t,n){var r=new FileReader;null!=e&&r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=n}))}},2215:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});n(2506),n(560),n(4284);var r=n(5166),o=n(8476),i=n(7541);const a={__name:"Home",props:{username:String,states:Array,provisions:Array},setup:function(e){var t=e,n=(0,r.ref)(t.provisions),a=function(e){n.value.splice(0,n.value.length);for(var t=0;t<e.length;t++){for(var r=[],o=0;o<e[t].length;o++)r.push(e[t][o]);n.value.push(r)}},c=function(){return n.value},l=function(e,t){n.value[e].push(t)},s=function(e,t,r){n.value[e][t].name=r.name,n.value[e][t].image=r.image},u=function(e){return t.provisionsprovs.value},f=function(e){for(var t=0;t<n.value.length;t++)for(var r=0;r<n.value[t].length;r++)if(n.value[t][r].id==e){n.value[t][r].remove=!0;break}};return function(t,p){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(i.default,{username:e.username,states:e.states,"get-provisions-at":u},null,8,["username","states"]),(0,r.createVNode)(o.default,{columns:e.states,provisions:n.value,"push-provision-at":l,"get-provisions":c,"set-provisions":a,"set-provision-at":s,remove:f},null,8,["columns","provisions"])],64)}}}},7613:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});n(228),n(3964),n(8324),n(739),n(9749),n(6544),n(4254),n(752),n(1694),n(6265),n(8373),n(6793),n(7629),n(7509),n(1013),n(8052),n(9693),n(1057),n(8932),n(560),n(7522),n(4284),n(5399),n(3374),n(9730);var r=n(5166);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(){i=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,n){return e[t]=n}}function p(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),c=new T(r||[]);return a(i,"_invoke",{value:_(e,n,c)}),i}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var v="suspendedStart",m="suspendedYield",h="executing",y="completed",b={};function g(){}function w(){}function E(){}var x={};f(x,l,(function(){return this}));var N=Object.getPrototypeOf,V=N&&N(N(F([])));V&&V!==n&&r.call(V,l)&&(x=V);var k=E.prototype=g.prototype=Object.create(x);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(i,a,c,l){var s=d(e[i],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==o(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,l)}))}l(s.arg)}var i;a(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function _(t,n,r){var o=v;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=P(c,r);if(l){if(l===b)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=d(t,n,r);if("normal"===s.type){if(o=r.done?y:m,s.arg===b)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function F(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(o(t)+" is not iterable")}return w.prototype=E,a(k,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,f(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},L(O.prototype),f(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(p(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(k),f(k,u,"Generator"),f(k,l,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}function a(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var c={class:"container"},l={class:"row d-flex flex-row justify-content-center"},s={class:"col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6 col-xxl-6 mt-3"},u={class:"card pb-3"},f={class:"card-body d-flex flex-column align-items-center"},p=(0,r.createElementVNode)("div",{class:"my-3"},[(0,r.createElementVNode)("h1",{class:"text-purple fs-1"},"Login")],-1),d=["onSubmit"],v={class:"mb-3"},m=(0,r.createElementVNode)("label",{class:"form-label fw-bold"},"Email Address",-1),h={class:"mb-4"},y=(0,r.createElementVNode)("div",{class:"d-flex flex-row justify-content-between"},[(0,r.createElementVNode)("label",{for:"password",class:"form-label fw-bold"},"Password"),(0,r.createElementVNode)("a",{href:"#",class:"text-decoration-none text-purple"},"Forgotten ?")],-1),b=(0,r.createElementVNode)("div",{class:"mb-3 d-grid"},[(0,r.createElementVNode)("button",{type:"submit",class:"btn btn-purple text-uppercase fw-bold"},"Sign In"),(0,r.createElementVNode)("a",{href:"#",class:"text-center text-decoration-none mt-4 text-purple"},"Create Account")],-1);const g={__name:"Login",setup:function(e){var t=(0,r.reactive)({username:"",password:""}),n=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){a(i,r,o,c,l,"next",e)}function l(e){a(i,r,o,c,l,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),o=function(){n().then((function(e){null!=e.user&&(window.location.href="/")})).catch((function(e){return console.log("ERROR: ",e)}))};return function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",c,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",u,[(0,r.createElementVNode)("div",f,[p,(0,r.createElementVNode)("form",{onSubmit:(0,r.withModifiers)(o,["prevent"]),class:"col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9"},[(0,r.createElementVNode)("div",v,[m,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"email",class:"form-control",placeholder:"you@example.com","onUpdate:modelValue":n[0]||(n[0]=function(e){return t.username=e})},null,512),[[r.vModelText,t.username]])]),(0,r.createElementVNode)("div",h,[y,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"password",name:"password",class:"form-control",placeholder:"Enter 8 characters or more","onUpdate:modelValue":n[1]||(n[1]=function(e){return t.password=e})},null,512),[[r.vModelText,t.password]])]),b],40,d)])])])])])}}}},9101:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});n(4284);var r=n(5166),o=n(9086),i={id:"add-provision-modal",class:"modal",tabindex:"-1"},a={class:"modal-dialog"},c={class:"modal-content"},l=(0,r.createElementVNode)("div",{class:"modal-header"},[(0,r.createElementVNode)("h5",{class:"modal-title"},"Add Provision"),(0,r.createElementVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),s={class:"modal-body"},u={class:"input-group"},f=(0,r.createElementVNode)("span",{class:"input-group-text"},"Quantity",-1);const p={__name:"AddProvisionModal",props:{provisions:Object,save:Function,pushProvisionAt:Function},setup:function(e){var t=e,n=(0,r.ref)({name:"",image:null,new:!0,quantity:1}),p=function(e){(0,o.s)(e.target.files[0]).then((function(e){return n.value.image=e})).catch((function(e){return console.log("ERROR: ",e)}))},d=function(){t.pushProvisionAt(0,n.value),n.value={name:"",image:null,new:!0,quantity:1},t.save()};return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",c,[l,(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("form",null,[(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.value.name=e}),placeholder:"Name"},null,512),[[r.vModelText,n.value.name]]),(0,r.createElementVNode)("input",{type:"file",class:"form-control mb-3",onChange:p,accept:"image/*"},null,32),(0,r.createElementVNode)("div",u,[f,(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.value.quantity=e}),min:"1",step:"1"},null,512),[[r.vModelText,n.value.quantity]])])])]),(0,r.createElementVNode)("div",{class:"modal-footer"},[(0,r.createElementVNode)("button",{type:"button",class:"btn btn-purple",onClick:d,"data-bs-dismiss":"modal"},"Save changes")])])])])}}}},5002:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});n(4284);var r=n(5166),o=n(9086),i={id:"edit-provision-modal",class:"modal",tabindex:"-1"},a={class:"modal-dialog"},c={class:"modal-content"},l=(0,r.createElementVNode)("div",{class:"modal-header"},[(0,r.createElementVNode)("h5",{class:"modal-title"},"Edit Provision"),(0,r.createElementVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),s={class:"modal-body"};const u={__name:"EditProvisionModal",props:{provision:Object,save:Function,remove:Function},setup:function(e){var t=e,n=function(e){(0,o.s)(e.target.files[0]).then((function(e){return t.provision.image=e})).catch((function(e){return console.log("ERROR: ",e)}))},u=function(){t.remove(t.provision.id),t.save()},f=function(){t.save()};return function(t,o){return(0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",c,[l,(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("form",null,[(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"text",class:"form-control mb-3","onUpdate:modelValue":o[0]||(o[0]=function(t){return e.provision.name=t}),placeholder:"Name"},null,512),[[r.vModelText,e.provision.name]]),(0,r.createElementVNode)("input",{type:"file",class:"form-control",onChange:n},null,32)])]),(0,r.createElementVNode)("div",{class:"modal-footer"},[(0,r.createElementVNode)("button",{type:"button",class:"btn btn-danger",onClick:u,"data-bs-dismiss":"modal"},"Remove"),(0,r.createElementVNode)("button",{type:"button",class:"btn btn-purple",onClick:f,"data-bs-dismiss":"modal"},"Save changes")])])])])}}}},8476:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});n(4284),n(228),n(3964),n(8324),n(739),n(9749),n(6544),n(4254),n(752),n(1694),n(6265),n(8373),n(6793),n(7629),n(7509),n(1013),n(8052),n(9693),n(1057),n(8932),n(560),n(7522),n(5399),n(3374),n(9730);var r=n(5166),o=n(9980),i=n.n(o),a=n(9201),c=n(9101),l=n(5002);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(){u=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,n){return e[t]=n}}function p(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new T(r||[]);return o(a,"_invoke",{value:_(e,n,c)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var v="suspendedStart",m="suspendedYield",h="executing",y="completed",b={};function g(){}function w(){}function E(){}var x={};f(x,a,(function(){return this}));var N=Object.getPrototypeOf,V=N&&N(N(F([])));V&&V!==n&&r.call(V,a)&&(x=V);var k=E.prototype=g.prototype=Object.create(x);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,c){var l=d(e[o],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==s(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function _(t,n,r){var o=v;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var l=P(c,r);if(l){if(l===b)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===v)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var s=d(t,n,r);if("normal"===s.type){if(o=r.done?y:m,s.arg===b)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=y,r.method="throw",r.arg=s.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function F(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(s(t)+" is not iterable")}return w.prototype=E,o(k,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=f(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,f(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},L(O.prototype),f(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new O(p(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},L(k),f(k,l,"Generator"),f(k,a,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}},t}function f(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}var p={class:"container-fluid py-3 my-container"},d={class:"row h-100 gx-3"},v={class:"col-4 h-100"},m={class:"bg-light d-flex flex-column align-items-center px-5 pb-5 mh-100 overflow-auto"},h={class:"py-4 fs-2"};const y={__name:"KanbanTable",props:{columns:Array,provisions:Array,pushProvisionAt:Function,getProvisions:Function,setProvisions:Function,setProvisionAt:Function,remove:Function},setup:function(e){var t=e,n=((0,r.ref)(t.getProvisions()),(0,r.reactive)({id:null,name:"",image:null})),o=function(e){n.id=e.id,n.name=e.name,n.image=e.image},s=function(){for(var e=0;e<t.provisions.length;e++)for(var r=0;r<t.provisions[e].length;r++)if(t.provisions[e][r].id==n.id){t.setProvisionAt(e,r,n),b();break}},y=function(){var e,n=(e=u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/edit-provisions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.getProvisions())});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}(),b=function(){y().then((function(e){t.setProvisions(e.provisions)})).catch((function(e){return console.log("ERROR: ",e)}))};return function(t,u){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",d,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.columns,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",v,[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("h1",h,(0,r.toDisplayString)(t.name),1),(0,r.createVNode)((0,r.unref)(i()),{modelValue:e.provisions[n],"onUpdate:modelValue":function(t){return e.provisions[n]=t},tag:"div",group:"provisions",class:"col-12",onEnd:b,"item-key":t.name},{item:(0,r.withCtx)((function(e){var t=e.element;return[(0,r.createVNode)(a.default,{provision:t,edit:o},null,8,["provision"])]})),_:2},1032,["modelValue","onUpdate:modelValue","item-key"])])])})),256))])]),(0,r.createVNode)(c.default,{provisions:e.provisions,save:b,"push-provision-at":e.pushProvisionAt},null,8,["provisions","push-provision-at"]),(0,r.createVNode)(l.default,{provision:n,save:s,remove:e.remove},null,8,["provision","remove"])],64)}}}},7541:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});n(2320),n(5728),n(228),n(6801),n(3843),n(4284);var r=n(5166),o=(n(9101),{class:"navbar navbar-expand navbar-dark bg-purple navbar-custom"}),i={class:"container-fluid"},a=(0,r.createElementVNode)("a",{href:"/",class:"navbar-brand fw-bold"},"ProvMan",-1),c={class:"collapse navbar-collapse d-flex flex-row justify-content-between"},l=["onSubmit"],s={class:"input-group"},u=["value"],f=(0,r.createElementVNode)("button",{type:"submit",class:"btn btn-light"},[(0,r.createElementVNode)("i",{class:"bi bi-search"})],-1),p={class:"navbar-nav"},d=(0,r.createElementVNode)("li",{class:"nav-item"},[(0,r.createElementVNode)("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#add-provision-modal",class:"nav-link bi bi-plus-circle fs-4"})],-1),v={class:"nav-item"},m={class:"dropdown"},h=(0,r.createElementVNode)("a",{href:"#",class:"nav-link bi bi-person-circle fs-4","data-bs-toggle":"dropdown","aria-expanded":"false"},null,-1),y={class:"dropdown-menu dropdown-menu-end"},b={class:"dropdown-header"},g=(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("hr",{class:"dropdown-divider"})],-1),w=(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",{href:"#",class:"dropdown-item"},"Settings")],-1),E=(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",{href:"/logout",class:"dropdown-item"},"Logout")],-1);const x={__name:"Navbar",props:{username:String,states:Object,getProvisionsAt:Function},setup:function(e){var t=e,n=(0,r.reactive)({option:t.states[0].id,text:null}),x=function(e){n.option=parseInt(e.target.value)},N=function(){var e=t.getProvisionsAt(n.option-1).find((function(e){return e.name.toLowerCase().includes(n.text.toLowerCase())}));document.location.href="#prov"+e.id};return function(t,V){return(0,r.openBlock)(),(0,r.createElementBlock)("nav",o,[(0,r.createElementVNode)("div",i,[a,(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("form",{class:"d-flex mx-auto",role:"search",onSubmit:(0,r.withModifiers)(N,["prevent"])},[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("select",{class:"form-select navbar-select","aria-label":"Default select",onChange:x},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.states,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("option",{value:e.id},(0,r.toDisplayString)(e.name),9,u)})),256))],32),(0,r.withDirectives)((0,r.createElementVNode)("input",{type:"search",class:"form-control",placeholder:"Search provision","aria-label":"Search","onUpdate:modelValue":V[0]||(V[0]=function(e){return n.text=e})},null,512),[[r.vModelText,n.text]]),f])],40,l),(0,r.createElementVNode)("ul",p,[d,(0,r.createElementVNode)("li",v,[(0,r.createElementVNode)("div",m,[h,(0,r.createElementVNode)("ul",y,[(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("h6",b,(0,r.toDisplayString)(e.username),1)]),g,w,E])])])])])])])}}}},9201:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});n(4284);var r=n(5166),o=["id"],i={class:"d-flex flex-row justify-content-end close-button-div"},a=[(0,r.createElementVNode)("i",{class:"bi bi-pencil-fill"},null,-1)],c={class:"pb-4"},l={class:"fs-5 text-center"},s={class:"d-flex flex-row justify-content-center"},u=["src"];const f={__name:"ProvisionItem",props:{provision:Object,edit:Object},setup:function(e){var t=(0,r.reactive)({display:"d-none"});return function(n,f){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"col-12 shadow-lg mb-4 d-flex flex-column",id:"prov"+e.provision.id,onMouseenter:f[1]||(f[1]=function(){return t.display="d-inline"}),onMouseleave:f[2]||(f[2]=function(){return t.display="d-none"})},[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("button",{type:"button",onClick:f[0]||(f[0]=function(){return e.edit(e.provision)}),class:(0,r.normalizeClass)(["btn btn-danger rounded-0",t.display]),"data-bs-toggle":"modal","data-bs-target":"#edit-provision-modal"},a,2)]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("h2",l,(0,r.toDisplayString)(e.provision.name),1)]),(0,r.createElementVNode)("div",s,[null!=e.provision.image?((0,r.openBlock)(),(0,r.createElementBlock)("img",{key:0,src:"/provisions/"+e.provision.image,class:"img-fluid"},null,8,u)):(0,r.createCommentVNode)("v-if",!0)])],40,o)}}}}},e=>{e.O(0,[86],(()=>{return t=7370,e(e.s=t);var t}));e.O()}]);