!function(){return function e(t,n,s){function i(r,d){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!d&&l)return l(r,!0);if(o)return o(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[r]={exports:{}};t[r][0].call(c.exports,function(e){return i(t[r][1][e]||e)},c,c.exports,e,t,n,s)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<s.length;r++)i(s[r]);return i}}()({1:[function(e,t,n){t.exports=function(e){this.elem=document.createElement(e),this.addClassesAndCreate=function(e){for(let t in e)this.elem.classList.add(e[t]);return this.elem}}},{}],2:[function(e,t,n){const s=e("./DOMObject");t.exports=function(){const e=new s("div").addClassesAndCreate(["fslightbox-media-holder"]);return window.innerWidth>1e3?(e.style.width=window.innerWidth-.1*window.innerWidth+"px",e.style.height=window.innerHeight-.1*window.innerHeight+"px"):(e.style.width=window.innerWidth+"px",e.style.height=window.innerHeight+"px"),e}},{"./DOMObject":1}],3:[function(e,t,n){t.exports=function(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttributeNS(null,"class","fslightbox-svg-icon"),this.svg.setAttributeNS(null,"viewBox","0 0 15 15"),this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.path.setAttributeNS(null,"class","fslightbox-svg-path"),this.getSVGIcon=function(e,t,n){return this.path.setAttributeNS(null,"d",n),this.svg.setAttributeNS(null,"viewBox",e),this.svg.setAttributeNS(null,"width",t),this.svg.setAttributeNS(null,"height",t),this.svg.appendChild(this.path),this.svg}}},{}],4:[function(e,t,n){const s=e("./DOMObject");t.exports=function(e){this.toolbarElem=new s("div").addClassesAndCreate(["fslightbox-toolbar"]);const t="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z";let n;const i=this;this.renderDefaultButtons=function(){let o=e.data.toolbarButtons;if(!0===o.fullscreen){let o=new s("div").addClassesAndCreate(["fslightbox-toolbar-button","fslightbox-flex-centered"]);n=(new e.SVGIcon).getSVGIcon("0 0 17.5 17.5","20px",t),o.appendChild(n),o.onclick=function(){e.data.fullscreen?i.closeFullscreen():i.openFullscreen()},this.toolbarElem.appendChild(o)}if(!0===o.close){let t=new s("div").addClassesAndCreate(["fslightbox-toolbar-button","fslightbox-flex-centered"]),n=(new e.SVGIcon).getSVGIcon("0 0 20 20","16px","M 11.469 10 l 7.08 -7.08 c 0.406 -0.406 0.406 -1.064 0 -1.469 c -0.406 -0.406 -1.063 -0.406 -1.469 0 L 10 8.53 l -7.081 -7.08 c -0.406 -0.406 -1.064 -0.406 -1.469 0 c -0.406 0.406 -0.406 1.063 0 1.469 L 8.531 10 L 1.45 17.081 c -0.406 0.406 -0.406 1.064 0 1.469 c 0.203 0.203 0.469 0.304 0.735 0.304 c 0.266 0 0.531 -0.101 0.735 -0.304 L 10 11.469 l 7.08 7.081 c 0.203 0.203 0.469 0.304 0.735 0.304 c 0.267 0 0.532 -0.101 0.735 -0.304 c 0.406 -0.406 0.406 -1.064 0 -1.469 L 11.469 10 Z");t.appendChild(n),t.onclick=function(){e.data.fadingOut||e.hide()},this.toolbarElem.appendChild(t)}},this.openFullscreen=function(){e.data.fullscreen=!0,n.firstChild.setAttributeNS(null,"d","M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"),n.setAttributeNS(null,"viewBox","0 0 950 1024"),n.setAttributeNS(null,"width","24px"),n.setAttributeNS(null,"height","24px");let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},this.closeFullscreen=function(){e.data.fullscreen=!1,n.firstChild.setAttributeNS(null,"d",t),n.setAttributeNS(null,"viewBox","0 0 17.5 17.5"),n.setAttributeNS(null,"width","20px"),n.setAttributeNS(null,"height","20px"),document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},this.renderToolbar=function(e){this.renderDefaultButtons(),e.appendChild(this.toolbarElem)}}},{"./DOMObject":1}],5:[function(e,t,n){const s=e("../Components/DOMObject");t.exports=function(e){this.renderDOM=function(){e.element.id="fslightbox-container",document.body.appendChild(e.element),i(e.element),e.data.totalSlides>1&&r(e.element),e.element.appendChild(e.mediaHolder),e.element.appendChild(t()),e.data.isfirstTimeLoad=!0};const t=function(){return e.data.downEventDetector=new s("div").addClassesAndCreate(["fslightbox-down-event-detector","fslightbox-full-dimension"])},n=function(){let t=new s("div").addClassesAndCreate(["fslightbox-slide-number-container","fslightbox-flex-centered"]);e.data.slideCounterElem=document.createElement("div");const n=e.data.slideCounterElem;n.innerHTML=e.data.slide,n.id="current_slide";let i=new s("div").addClassesAndCreate(["fslightbox-slash"]);i.innerHTML="/";let o=document.createElement("div");o.innerHTML=e.data.totalSlides,t.appendChild(n),t.appendChild(i),t.appendChild(o),this.renderSlideCounter=function(n){e.data.slideCounter&&n.appendChild(t)}},i=function(t){if(e.data.nav=new s("div").addClassesAndCreate(["fslightbox-nav"]),e.toolbar.renderToolbar(e.data.nav),e.data.totalSlides>1){(new n).renderSlideCounter(e.data.nav)}t.appendChild(e.data.nav)},o=function(t,n,i){let o=new s("div").addClassesAndCreate(["fslightbox-slide-btn","fslightbox-flex-centered"]);o.appendChild((new e.SVGIcon).getSVGIcon("0 0 20 20","22px",i)),t.appendChild(o),n.appendChild(t)},r=function(t){if(!1===e.data.slideButtons)return!1;let n=new s("div").addClassesAndCreate(["fslightbox-slide-btn-container","fslightbox-slide-btn-left-container"]);o(n,t,"M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"),n.onclick=function(){e.appendMethods.previousSlideViaButton(e.data.slide)};let i=new s("div").addClassesAndCreate(["fslightbox-slide-btn-container","fslightbox-slide-btn-right-container"]);o(i,t,"M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"),i.onclick=function(){e.appendMethods.nextSlideViaButton(e.data.slide)}}}},{"../Components/DOMObject":1}],6:[function(e,t,n){t.exports=function(e){this.handleKeyDown=function(t){switch(t.code){case"Escape":e.hide();break;case"ArrowLeft":e.data.totalSlides>1&&e.appendMethods.previousSlideViaButton(e.data.slide);break;case"ArrowRight":e.data.totalSlides>1&&e.appendMethods.nextSlideViaButton(e.data.slide)}}}},{}],7:[function(e,t,n){t.exports=function(e){this.addRecompense=function(){if(!n())return;document.documentElement.style.marginRight=e+"px";const s=t();if(s)for(let t=0;t<s.length;t++)s[t].style.marginRight=e+"px"},this.removeRecompense=function(){if(!n())return;document.documentElement.style.marginRight="";const e=t();if(e)for(let t=0;t<e.length;t++)e[t].style.marginRight=""};const t=function(){return document.getElementsByClassName("recompense-for-scrollbar")},n=function(){return!!e}}},{}],8:[function(e,t,n){t.exports=function(e){this.getWidth=function(){let t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);let n=t.offsetWidth;t.style.overflow="scroll";let s=document.createElement("div");s.style.width="100%",t.appendChild(s);let i=s.offsetWidth;t.parentNode.removeChild(t),e.scrollbarWidth=n-i}}},{}],9:[function(e,t,n){t.exports=function(t){const n=new(e("../Components/DOMObject"))("div").addClassesAndCreate(["fslightbox-invisible-hover"]),s={mediaHolder:t.mediaHolder,invisibleHover:n,downEventDetector:t.data.downEventDetector},i=t.data.sources,o=t.data.urls.length;let r,d,l,a=!1,c=!0;const u=function(e){"VIDEO"===e.target.tagName||e.touches||e.preventDefault(),e.target.classList.contains("fslightbox-source")&&(d=!0),a=!0,l=0,1!==t.data.totalSlides&&(r=e.touches?e.touches[0].clientX:e.clientX)},h=function(){if(!a)return;if(a=!1,t.element.contains(n)&&t.element.removeChild(n),t.element.classList.contains("fslightbox-cursor-grabbing")&&t.element.classList.remove("fslightbox-cursor-grabbing"),0===l)return d||t.hide(),void(d=!1);if(d=!1,!c)return;c=!1;let e=t.stageSourceIndexes.all(t.data.slide);i[e.previous].classList.add("fslightbox-transform-transition"),i[e.current].classList.add("fslightbox-transform-transition"),i[e.next].classList.add("fslightbox-transform-transition"),l>0?(1===t.data.slide?t.updateSlideNumber(t.data.totalSlides):t.updateSlideNumber(t.data.slide-1),o>=2?(t.slideTransformer.plus(i[e.current]),t.slideTransformer.zero(i[e.previous])):t.slideTransformer.zero(i[e.current]),e=t.stageSourceIndexes.all(t.data.slide),void 0===t.data.sources[e.previous]&&t.loadsources("previous",t.data.slide)):l<0&&(t.data.slide===t.data.totalSlides?t.updateSlideNumber(1):t.updateSlideNumber(t.data.slide+1),o>1?(t.slideTransformer.minus(i[e.current]),t.slideTransformer.zero(i[e.next])):t.slideTransformer.zero(i[e.current]),e=t.stageSourceIndexes.all(t.data.slide),void 0===t.data.sources[e.next]&&t.loadsources("next",t.data.slide)),l=0,t.stopVideos(),setTimeout(function(){i[e.previous].classList.remove("fslightbox-transform-transition"),i[e.current].classList.remove("fslightbox-transform-transition"),i[e.next].classList.remove("fslightbox-transform-transition"),c=!0},250)},f=function(e){if(!a||!c)return;let s;if(s=e.touches?e.touches[0].clientX:e.clientX,0!==(l=s-r)&&1===t.data.totalSlides)return void(l=1);t.element.classList.contains("fslightbox-cursor-grabbing")||t.element.classList.add("fslightbox-cursor-grabbing"),t.element.contains(n)||t.element.appendChild(n);const d=t.stageSourceIndexes.all(t.data.slide);o>=3&&(i[d.previous].style.transform="translate("+(-t.data.slideDistance*window.innerWidth+l)+"px,0)"),o>=1&&(i[d.current].style.transform="translate("+l+"px,0)"),o>=2&&(i[d.next].style.transform="translate("+(t.data.slideDistance*window.innerWidth+l)+"px,0)")};for(let e in s)s[e].addEventListener("mousedown",u),s[e].addEventListener("touchstart",u,{passive:!0});this.addWindowEvents=function(){window.addEventListener("mouseup",h),window.addEventListener("touchend",h),window.addEventListener("mousemove",f),window.addEventListener("touchmove",f,{passive:!0})},this.removeWindowEvents=function(){window.removeEventListener("mouseup",h),window.removeEventListener("touchend",h),window.removeEventListener("mousemove",f),window.removeEventListener("touchmove",f)},n.addEventListener("mouseup",h),n.addEventListener("touchend",h,{passive:!0}),t.data.nav.addEventListener("mousedown",function(e){e.preventDefault()})}},{"../Components/DOMObject":1}],10:[function(e,t,n){t.exports=function(e){this.minus=function(t){t.style.transform="translate("+-e*window.innerWidth+"px,0)"},this.zero=function(e){e.style.transform="translate(0,0)"},this.plus=function(t){t.style.transform="translate("+e*window.innerWidth+"px,0)"}}},{}],11:[function(e,t,n){t.exports=function(e){this.previous=function(t){let n;const s=t-1;return n=0===s?e.totalSlides-1:s-1},this.next=function(t){let n;const s=t-1;return n=t===e.totalSlides?0:s+1},this.all=function(t){const n=t-1,s={previous:0,current:0,next:0};return s.previous=0===n?e.totalSlides-1:n-1,s.current=n,t===e.totalSlides?s.next=0:s.next=n+1,s}}},{}],12:[function(e,t,n){t.exports=function(e){const t=e.keyboardController;this.attachListener=function(){document.addEventListener("keydown",t.handleKeyDown)},this.removeListener=function(){document.removeEventListener("keydown",t.handleKeyDown)}}},{}],13:[function(e,t,n){t.exports=function(t){const n="fslightbox-transform-transition",s="fslightbox-fade-out",i=function(n){const s=new(e("./Components/DOMObject"))("div").addClassesAndCreate(["fslightbox-source-holder","fslightbox-full-dimension"]);return s.innerHTML='<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>',t.data.sources[n]=s,s},o=function(e){e.firstChild.classList.add("fslightbox-fade-in")},r=function(e){const t=e.firstChild;t.classList.remove("fslightbox-fade-in"),t.classList.remove(s),t.offsetWidth},d=function(e){e.firstChild.classList.add(s)};this.renderHolderInitial=function(e){const n=t.stageSourceIndexes.all(e),s=t.data.totalSlides;if(s>=3){const e=i(n.previous);t.slideTransformer.minus(e),t.mediaHolder.appendChild(e)}if(s>=1){const e=i(n.current);t.mediaHolder.appendChild(e)}if(s>=2){const e=i(n.next);t.slideTransformer.plus(e),t.mediaHolder.appendChild(e)}},this.renderHolder=function(e,t){switch(t){case"previous":l(e);break;case"current":c(e);break;case"next":a(e)}};const l=function(e){const n=t.stageSourceIndexes.previous(e),s=i(n);t.slideTransformer.minus(s),t.mediaHolder.insertAdjacentElement("afterbegin",s)},a=function(e){const n=t.stageSourceIndexes.next(e),s=i(n);t.slideTransformer.plus(s),t.mediaHolder.appendChild(s)},c=function(e){const n=t.stageSourceIndexes.all(e),s=i(n.current);t.slideTransformer.zero(s),t.mediaHolder.insertBefore(s,t.data.sources[n.next])};this.previousSlideViaButton=function(e){1===e?t.data.slide=t.data.totalSlides:t.data.slide-=1;const i=u();void 0===t.data.sources[i.previous]&&t.loadsources("previous",t.data.slide);const l=t.data.sources,a=l[i.current],c=l[i.next];c.classList.remove(n),a.classList.remove(n),l[i.previous].classList.remove(n),r(a),o(a),d(c),t.slideTransformer.zero(a),setTimeout(function(){i.next!==t.data.slide-1&&t.slideTransformer.plus(c),c.firstChild.classList.remove(s)},220)},this.nextSlideViaButton=function(e){e===t.data.totalSlides?t.data.slide=1:t.data.slide+=1;const i=u();void 0===t.data.sources[i.next]&&t.loadsources("next",t.data.slide);const l=t.data.sources,a=l[i.current],c=l[i.previous];c.classList.remove(n),a.classList.remove(n),l[i.next].classList.remove(n),r(a),o(a),d(c),t.slideTransformer.zero(a),setTimeout(function(){i.previous!==t.data.slide-1&&t.slideTransformer.minus(c),c.firstChild.classList.remove(s)},220)};const u=function(){return t.stopVideos(),t.updateSlideNumber(t.data.slide),t.stageSourceIndexes.all(t.data.slide)}}},{"./Components/DOMObject":1}],14:[function(e,t,n){window.fsLightboxClass=function(){const t=e("./Components/DOMObject");this.data={slide:1,totalSlides:1,slideDistance:1.3,slideCounter:!0,slideButtons:!0,isFirstTimeLoad:!1,moveSlidesViaDrag:!0,toolbarButtons:{close:!0,fullscreen:!0},name:"",scrollbarWidth:0,urls:[],sources:[],sourcesLoaded:[],rememberedSourcesDimensions:[],videos:[],videosPosters:[],holderWrapper:null,mediaHolder:null,nav:null,toolbar:null,slideCounterElem:null,downEventDetector:null,initiated:!1,fullscreen:!1,fadingOut:!1};const n=this;this.init=function(t){if(this.data.initiated)return this.initSetSlide(t),void this.show();let n=this.data.name,i=[];const o=fsLightboxHelpers.a;for(let e=0;e<o.length;e++)if(o[e].hasAttribute("data-fslightbox")&&o[e].getAttribute("data-fslightbox")===n){let t=i.push(o[e].getAttribute("href"));o[e].hasAttribute("data-video-poster")&&(this.data.videosPosters[t-1]=o[e].getAttribute("data-video-poster"))}this.data.urls=i,this.data.totalSlides=i.length,s.renderDOM(),document.documentElement.classList.add("fslightbox-open"),this.scrollbarRecompensor.addRecompense(),this.onResizeEvent.init(),this.eventsControllers.document.keyDown.attachListener(),this.throwEvent("init"),this.throwEvent("open"),this.slideSwiping=new(e("./Core/SlideSwiping.js"))(this),this.slideSwiping.addWindowEvents(),this.initSetSlide(t),this.data.initiated=!0,this.element.classList.add("fslightbox-open")},this.initSetSlide=function(e){switch(typeof e){case"string":this.setSlide(this.data.urls.indexOf(e)+1);break;case"number":this.setSlide(e);break;case"undefined":this.setSlide(1)}},this.show=function(){const e=this.element;this.scrollbarRecompensor.addRecompense(),e.classList.remove("fslightbox-fade-out-complete"),document.documentElement.classList.add("fslightbox-open"),e.offsetWidth,e.classList.add("fslightbox-fade-in-complete"),document.body.appendChild(e),this.onResizeEvent.addListener(),this.onResizeEvent.resizeListener(),this.eventsControllers.document.keyDown.attachListener(),this.slideSwiping.addWindowEvents(),this.throwEvent("show"),this.throwEvent("open")},this.hide=function(){this.data.fullscreen&&this.toolbar.closeFullscreen(),this.element.classList.add("fslightbox-fade-out-complete"),this.data.fadingOut=!0,this.throwEvent("close"),this.onResizeEvent.removeListener(),this.slideSwiping.removeWindowEvents(),this.eventsControllers.document.keyDown.removeListener(),setTimeout(function(){n.scrollbarRecompensor.removeRecompense(),document.documentElement.classList.remove("fslightbox-open"),n.data.fadingOut=!1,document.body.removeChild(n.element)},250)},this.updateSlideNumber=function(e){this.data.slide=e,this.data.totalSlides>1&&(this.data.slideCounterElem.innerHTML=e)},this.throwEvent=function(e){let t;"function"==typeof Event?t=new Event(e):(t=document.createEvent("Event")).initEvent(e,!0,!0),this.element.dispatchEvent(t)},this.element=new t("div").addClassesAndCreate(["fslightbox-container","fslightbox-full-dimension"]),this.mediaHolder=new(e("./Components/MediaHolder"));const s=new(e("./Core/DomRenderer"))(this);this.stageSourceIndexes=new(e("./Core/StageSourcesIndexes"))(this.data),this.keyboardController=new(e("./Core/KeyboardController"))(this),new(e("./Core/ScrollbarWidthGetter"))(this.data).getWidth(),this.onResizeEvent=new(e("./onResizeEvent"))(this),this.scrollbarRecompensor=new(e("./Core/ScrollbarRecompensor"))(this.data.scrollbarWidth),this.slideTransformer=new(e("./Core/SlideTransformer"))(this.data.slideDistance),this.slideSwiping=null,this.toolbar=new(e("./Components/Toolbar"))(this),this.SVGIcon=e("./Components/SVGIcon"),this.appendMethods=new(e("./appendMethods"))(this),this.eventsControllers={document:{keyDown:new(e("./Core/events-controllers/DocumentKeyDownEventController"))(this)}},this.loadsources=function(t,n){return new(e("./loadSource.js"))(this,t,n)},this.stopVideos=function(){const e=this.data.videos,t=this.data.sources;for(let n in e)!0===e[n]?void 0!==t[n].firstChild.pause&&t[n].firstChild.pause():t[n].firstChild.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")},this.setSlide=function(e){this.data.slide=e,this.updateSlideNumber(e);const t=this.stageSourceIndexes.all(e),n=this.data.sources;0===n.length?this.loadsources("initial",e):(void 0===n[t.previous]&&this.loadsources("previous",e),void 0===n[t.current]&&this.loadsources("current",e),void 0===n[t.next]&&this.loadsources("next",e));for(let e in n)n[e].classList.remove("fslightbox-transform-transition"),e==t.previous&&n.length>1?this.slideTransformer.minus(n[t.previous]):e!=t.current?e!=t.next?this.slideTransformer.minus(n[e]):this.slideTransformer.plus(n[t.next]):this.slideTransformer.zero(n[t.current])}},function(){window.fsLightboxInstances=[],window.fsLightboxHelpers={a:document.getElementsByTagName("a")};let e=window.fsLightboxHelpers.a;for(let t=0;t<e.length;t++){if(!e[t].hasAttribute("data-fslightbox"))continue;const n=e[t].getAttribute("data-fslightbox");void 0===window.fsLightboxInstances[n]&&(window.fsLightbox=new window.fsLightboxClass,window.fsLightbox.data.name=n,window.fsLightboxInstances[n]=window.fsLightbox),e[t].addEventListener("click",function(e){e.preventDefault();let t=this.getAttribute("data-fslightbox");if(window.fsLightboxInstances[t].data.initiated)return window.fsLightboxInstances[t].setSlide(window.fsLightboxInstances[t].data.urls.indexOf(this.getAttribute("href"))+1),void window.fsLightboxInstances[t].show();window.fsLightboxInstances[t].init(this.getAttribute("href"))})}}(document,window)},{"./Components/DOMObject":1,"./Components/MediaHolder":2,"./Components/SVGIcon":3,"./Components/Toolbar":4,"./Core/DomRenderer":5,"./Core/KeyboardController":6,"./Core/ScrollbarRecompensor":7,"./Core/ScrollbarWidthGetter":8,"./Core/SlideSwiping.js":9,"./Core/SlideTransformer":10,"./Core/StageSourcesIndexes":11,"./Core/events-controllers/DocumentKeyDownEventController":12,"./appendMethods":13,"./loadSource.js":15,"./onResizeEvent":16}],15:[function(e,t,n){t.exports=function(t,n,s){const i=e("./Components/DOMObject"),o=t.stageSourceIndexes.all(s),r=t.data.urls,d=t.data.sources;let l=function(e,n,s,o){let r=new i("div").addClassesAndCreate(["fslightbox-source-holder"]);t.data.rememberedSourcesDimensions[o]={width:n,height:s},r.appendChild(e),function(e,t){e.innerHTML="",e.appendChild(t),e.firstChild.offsetWidth}(d[o],e),t.onResizeEvent.scaleSource(o)};const a=function(e){let t=new i("div").addClassesAndCreate(["fslightbox-invalid-file-wrapper","fslightbox-flex-centered"]);t.innerHTML="Invalid file",l(t,window.innerWidth,window.innerHeight,e)};if(this.createSourceElem=function(e){const n=document.createElement("a"),s=t.data.urls[e];if(n.href=s,"www.youtube.com"===n.hostname)t.data.videos[e]=!1,function(e,n){let s=new i("iframe").addClassesAndCreate(["fslightbox-source"]);s.src="//www.youtube.com/embed/"+e+"?enablejsapi=1",s.setAttribute("allowfullscreen",""),s.setAttribute("frameborder","0"),t.mediaHolder.appendChild(s),l(s,1920,1080,n)}(function(e){let t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&11==t[2].length?t[2]:"error"}(s),e);else{const n=new XMLHttpRequest;n.onreadystatechange=function(){if(2===n.readyState){if(200===n.status||206===n.status){const s=n.getResponseHeader("content-type"),o=s.slice(0,s.indexOf("/"));"image"===o?function(e,t){let n=new i("img").addClassesAndCreate(["fslightbox-source"]);n.src=e,n.addEventListener("load",function(){l(n,this.width,this.height,t)})}(r[e],e):"video"===o?(!function(e,n,s){let o,r,d=!1,a=new i("video").addClassesAndCreate(["fslightbox-source"]),c=new i("source").elem;t.data.videosPosters[n]&&(a.poster=t.data.videosPosters[n],a.style.objectFit="cover"),c.src=e,c.type=s,a.appendChild(c),a.onloadedmetadata=function(){d||(this.videoWidth&&0!==this.videoWidth?(o=this.videoWidth,r=this.videoHeight):(o=1920,r=1080),d=!0,l(a,o,r,n))};let u=0,h=setInterval(function(){if(d)clearInterval(h);else{if(a.videoWidth&&0!==a.videoWidth)o=a.videoWidth,r=a.videoHeight;else{if(u<31)return void u++;o=1920,r=1080}d=!0,l(a,o,r,n),clearInterval(h)}},100);a.setAttribute("controls","")}(r[e],e,s),t.data.videos[e]=!0):a(e)}else a(e);n.abort()}},n.open("get",s,!0),n.send(null)}},"initial"===n)t.appendMethods.renderHolderInitial(s,i),r.length>=1&&this.createSourceElem(o.current),r.length>=2&&this.createSourceElem(o.next),r.length>=3&&this.createSourceElem(o.previous);else switch(t.appendMethods.renderHolder(s,n),n){case"previous":this.createSourceElem(o.previous);break;case"current":this.createSourceElem(o.current);break;case"next":this.createSourceElem(o.next)}}},{"./Components/DOMObject":1}],16:[function(e,t,n){t.exports=function(e){const t=this,n=e.data.sources,s=e.data.rememberedSourcesDimensions;this.mediaHolderDimensions=function(){const t=e.mediaHolder.style,n=window.innerWidth,s=window.innerHeight;n>1e3?(t.width=n-.1*n+"px",t.height=s-.1*s+"px"):(t.width=n+"px",t.height=s-.1*s+"px")},this.scaleAndTransformSources=function(){const t=e.data.urls.length,s=e.stageSourceIndexes.all(e.data.slide);t>0&&e.slideTransformer.zero(n[s.current]),t>1&&e.slideTransformer.plus(n[s.next]),t>2&&e.slideTransformer.minus(n[s.previous]);for(let i=0;i<t;i++)this.scaleSource(i),i!==s.current&&i!==s.next&&i!==s.previous&&n[i]&&e.slideTransformer.plus(n[i])},this.scaleSource=function(t){if(!n[t])return;const i=n[t].firstChild;let o=s[t].width,r=s[t].height;const d=o/r,l=parseInt(e.mediaHolder.style.width),a=parseInt(e.mediaHolder.style.height);let c=l/d;const u=function(){i.style.height=c+"px",i.style.width=c*d+"px"};if(c<a)return o<l&&(c=r),void u();c=r>a?a:r,u()},this.init=function(){this.mediaHolderDimensions(),this.addListener()},this.addListener=function(){window.addEventListener("resize",this.resizeListener)},this.resizeListener=function(){t.mediaHolderDimensions(),t.scaleAndTransformSources()},this.removeListener=function(){window.removeEventListener("resize",this.resizeListener)}}},{}]},{},[14]);