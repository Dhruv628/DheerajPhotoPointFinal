window.OnlineWebFonts_Animations=window.OnlineWebFonts_Animations||function(t){return"object"!=typeof t?this:{Config:{},Index:{Key:"www.onlinewebfonts.com",Id:null,Data:{Config:{Width:3,Opacity:1,StrokeDot:!0,Sequential:!0,Display:!0,Reverse:!1,Color:"#000000",Animate:"Linear"}},Svg:{},Path:[],Div:null,An:null,Dom:null,Pause:!1,Complete:null,Status:null},Run:function(t){this.Config=this.Index;var n=this.Config,e=n.Data;for(var i in e.Config)null!=t.Data.Config[i]&&(e.Config[i]=t.Data.Config[i]);return n.Id=t.Id,n.Data.Line=t.Data.Line,n.Data.Box=t.Data.Box,"function"==typeof t.Complete&&(n.Complete=t.Complete),"function"==typeof t.Status&&(n.Status=t.Status),this.Append().PathAppend(),this},Play:function(){var t=this;return t.Stop(),t.Config.An=requestAnimationFrame((function(n){t.Update(n)})),this},Pause:function(){return this.Config.Pause||(this.Config.Pause=!0,cancelAnimationFrame(this.Config.An)),this},Resume:function(){var t=this;return t.Config.Pause&&(t.Config.Pause=!1,requestAnimationFrame((function(n){t.ResumeUpdate(n)}))),this},Stop:function(){return this.Config.Div.innerHTML="",this.Append().PathAppend(),cancelAnimationFrame(this.Config.An),this},ResumeUpdate:function(t){var n=this,e=n.Config.Svg.Time.Data;e.Start=t-e.Elapsed,requestAnimationFrame((function(t){n.Update(t)}))},Update:function(t){var n=this,e=n.Config,i=e.Data,r=e.Svg.Time.Data;if(0==r.Start&&(r.Start=t),r.Elapsed=t-r.Start,r.Progress=n.Progress(r.Total,r.Start,r.Elapsed,i.Config.Animate),n.UpdatePath(),r.Progress<1){if(null!==e.Status){var a=Math.round(100*r.Progress);e.Status(99==a?100:a,e.Id)}n.Config.An=requestAnimationFrame((function(t){n.Update(t)}))}else null!==e.Complete&&e.Complete()},UpdatePath:function(){for(var t=this.Config.Svg.Time.Path,n=0;n<this.Config.Dom.length;n++){var e=this.PathElapsed(n);t[n].Progress=this.Progress(1,0,e,this.Config.Data.Config.Animate),this.SetLine(n)}},SetLine:function(t){var n=this.Config.Svg,e=n.Time.Path,i=this.Config.Dom,r=e[t].Progress*n.Path.Length[t];if(this.Config.Data.Config.Reverse)var a=-n.Path.Length[t]+r;else a=n.Path.Length[t]-r;i[t].style.strokeDashoffset=a},PathElapsed:function(t){var n,e=this.Config.Svg.Time,i=e.Path[t];return e.Data.Progress>i.StartPro&&e.Data.Progress<i.StartPro+i.Duration?n=(e.Data.Progress-i.StartPro)/i.Duration:e.Data.Progress>=i.StartPro+i.Duration?n=1:e.Data.Progress<=i.StartPro&&(n=0),n},Progress:function(t,n,e,i){var r;return e>0&&e<t?r=i?this.Ease[i](e,0,1,t):e/t:e>=t?r=1:e<=n&&(r=0),r},PathAppend:function(){var t=this.Config,n=t.Data,e=t.Svg.Time;e.Path=[];var i=n.Config.Reverse?e.Data.Total:0;for(var r in n.Line){var a=parseInt(n.Line[r].Duration),o=a/e.Data.Total;n.Config.Reverse?i-=a:i=n.Config.Sequential?e.Data.Delay:0;var u=i/e.Data.Total;e.Data.Delay+=a,e.Path[r]={Start:i,Duration:o,StartPro:u}}},Append:function(){var t=this.Config,n=t.Data,e=t.Svg,i=this.SVGElement();e.Path={},e.Time={},e.Time.Data={Start:0,Elapsed:0,Total:0,Duration:0,Progress:0,Delay:0},e.Path.Length=[];var r=0;for(var a in n.Line){var o={"fill-opacity":"0","stroke-linecap":n.Config.StrokeDot?"round":"butt","stroke-linejoin":"round",stroke:n.Line[a].Color?n.Line[a].Color:n.Config.Color,"stroke-opacity":n.Config.StrokeDot?n.Config.Opacity:"0","stroke-width":n.Line[a].Width?n.Line[a].Width:n.Config.Width,d:n.Line[a].Path},u=document.createElementNS("http://www.w3.org/2000/svg","path");for(var s in o)u.setAttribute(s,o[s]);var f=Math.ceil(u.getTotalLength());e.Path.Length[a]=f,u.setAttribute("style","stroke-dasharray:"+f+","+f+";stroke-dashoffset:"+(n.Config.Display?"0":f)+";"),i.appendChild(u),t.Path.push(u),0==n.Line[a].Duration&&(n.Line[a].Duration=this.GetPathDuration(n.Line[a].Path)),n.Config.Sequential?r+=parseInt(n.Line[a].Duration):parseInt(n.Line[a].Duration)>r&&(r=parseInt(n.Line[a].Duration))}return e.Time.Data.Total=r,t.Div=document.querySelector(t.Id),t.Div.appendChild(i),t.Dom=t.Div.children[0].childNodes,this},GetPathDuration:function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",t),Math.ceil(n.getTotalLength())},SVGElement:function(t){var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("xmlns","http://www.w3.org/2000/svg");var e=this.Config.Data.Box.Width,i=this.Config.Data.Box.Height;return n.setAttribute("viewBox","0 0 "+e+" "+i),n},Ease:{Linear:function(t,n,e,i){return e*t/i+n},InQuad:function(t,n,e,i){return e*(t/=i)*t+n},OutQuad:function(t,n,e,i){return-e*(t/=i)*(t-2)+n},InOutQuad:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t+n:-e/2*(--t*(t-2)-1)+n},InCubic:function(t,n,e,i){return e*(t/=i)*t*t+n},OutCubic:function(t,n,e,i){return e*((t=t/i-1)*t*t+1)+n},InOutCubic:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t+n:e/2*((t-=2)*t*t+2)+n},InQuart:function(t,n,e,i){return e*(t/=i)*t*t*t+n},OutQuart:function(t,n,e,i){return-e*((t=t/i-1)*t*t*t-1)+n},InOutQuart:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t*t+n:-e/2*((t-=2)*t*t*t-2)+n},InQuint:function(t,n,e,i){return e*(t/=i)*t*t*t*t+n},OutQuint:function(t,n,e,i){return e*((t=t/i-1)*t*t*t*t+1)+n},InOutQuint:function(t,n,e,i){return(t/=i/2)<1?e/2*t*t*t*t*t+n:e/2*((t-=2)*t*t*t*t+2)+n},InSine:function(t,n,e,i){return-e*Math.cos(t/i*(Math.PI/2))+e+n},OutSine:function(t,n,e,i){return e*Math.sin(t/i*(Math.PI/2))+n},InOutSine:function(t,n,e,i){return-e/2*(Math.cos(Math.PI*t/i)-1)+n},InExpo:function(t,n,e,i){return 0==t?n:e*Math.pow(2,10*(t/i-1))+n},OutExpo:function(t,n,e,i){return t==i?n+e:e*(1-Math.pow(2,-10*t/i))+n},InOutExpo:function(t,n,e,i){return 0==t?n:t==i?n+e:(t/=i/2)<1?e/2*Math.pow(2,10*(t-1))+n:e/2*(2-Math.pow(2,-10*--t))+n},InCirc:function(t,n,e,i){return-e*(Math.sqrt(1-(t/=i)*t)-1)+n},OutCirc:function(t,n,e,i){return e*Math.sqrt(1-(t=t/i-1)*t)+n},InOutCirc:function(t,n,e,i){return(t/=i/2)<1?-e/2*(Math.sqrt(1-t*t)-1)+n:e/2*(Math.sqrt(1-(t-=2)*t)+1)+n},InElastic:function(t,n,e,i){var r=1.70158,a=0,o=e;if(0==t)return n;if(1==(t/=i))return n+e;if(a||(a=.3*i),o<Math.abs(e)){o=e;r=a/4}else r=a/(2*Math.PI)*Math.asin(e/o);return-o*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)+n},OutElastic:function(t,n,e,i){var r=1.70158,a=0,o=e;if(0==t)return n;if(1==(t/=i))return n+e;if(a||(a=.3*i),o<Math.abs(e)){o=e;r=a/4}else r=a/(2*Math.PI)*Math.asin(e/o);return o*Math.pow(2,-10*t)*Math.sin((t*i-r)*(2*Math.PI)/a)+e+n},InOutElastic:function(t,n,e,i){var r=1.70158,a=0,o=e;if(0==t)return n;if(2==(t/=i/2))return n+e;if(a||(a=i*(.3*1.5)),o<Math.abs(e)){o=e;r=a/4}else r=a/(2*Math.PI)*Math.asin(e/o);return t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)*-.5+n:o*Math.pow(2,-10*(t-=1))*Math.sin((t*i-r)*(2*Math.PI)/a)*.5+e+n},InBack:function(t,n,e,i,r){return null==r&&(r=1.70158),e*(t/=i)*t*((r+1)*t-r)+n},OutBack:function(t,n,e,i,r){return null==r&&(r=1.70158),e*((t=t/i-1)*t*((r+1)*t+r)+1)+n},InOutBack:function(t,n,e,i,r){return null==r&&(r=1.70158),(t/=i/2)<1?e/2*(t*t*((1+(r*=1.525))*t-r))+n:e/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+n},InBounce:function(t,n,e,i){return e-this.OutBounce(i-t,0,e,i)+n},OutBounce:function(t,n,e,i){return(t/=i)<1/2.75?e*(7.5625*t*t)+n:t<2/2.75?e*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?e*(7.5625*(t-=2.25/2.75)*t+.9375)+n:e*(7.5625*(t-=2.625/2.75)*t+.984375)+n},InOutBounce:function(t,n,e,i){return t<i/2?.5*this.InBounce(2*t,0,e,i)+n:.5*this.OutBounce(2*t-i,0,e,i)+.5*e+n}}}.Run(t)};
window.OnlineWebFonts_Com=window.OnlineWebFonts_Com||function(t){return new OnlineWebFonts_Animations(t);};if(typeof Object.assign != 'function'){Object.assign = function(e){e = Object(e);for(var i=1;i<arguments.length;i++){var s=arguments[i];if(s != null){for(var k in s){if(Object.prototype.hasOwnProperty.call(s,k)){e[k] = s[k];}}}}return e;}}
window.__Animations = Object.assign(window.__Animations || {},{"561548":{"Line":[{"Path":"M129.6,46.2c-5,1.1-7.6,2.7-17.5,10.4l-9.4,7.3H66.6c-25.1,0-36.9,0.1-38.7,0.5c-8.2,1.8-15.5,8.9-17.3,17c-0.3,1.4-0.5,21.4-0.5,55.8c0,58-0.1,55.7,2.7,61.1c1.7,3.3,5.9,7.6,9.3,9.4c5.4,2.9,0.4,2.8,105.8,2.8c67.4,0,97.5-0.1,99.5-0.5c8.5-1.6,15.3-7.8,17.9-16.4c0.7-2.4,0.8-8.4,0.8-56.3c0-34.4-0.2-54.5-0.5-55.8c-0.9-4-2.9-7.5-6.2-10.7c-4.8-4.7-9.7-6.8-16.3-6.8h-3.3l-8.8-6.9c-9.9-7.8-13.3-9.8-18.1-10.8C188.1,45.2,134.2,45.2,129.6,46.2z M193,59.2c0.9,0.5,6.1,4.4,11.6,8.7c6.7,5.2,10.5,7.9,11.7,8.2c1,0.2,3.6,0.4,5.8,0.4c5.5,0,8.3,1.5,10.4,5.6l1.1,1.9v53.2v53.2l-1.4,2.3c-1.5,2.6-3.2,3.9-5.9,4.7c-1.5,0.4-26.8,0.5-99.6,0.4l-97.6-0.1l-2-1.3c-1.1-0.7-2.6-2.4-3.3-3.6l-1.4-2.3v-53.2V84.1l1.1-1.9c1.2-2.2,2.7-3.7,4.9-4.8c1.4-0.7,5.5-0.8,39.1-0.8c28.8,0,37.9-0.2,39.2-0.6c0.9-0.3,6.3-4.2,11.8-8.5c5.5-4.3,10.1-7.9,10.2-7.9s1-0.3,2-0.7c1.7-0.6,6.6-0.7,31.3-0.6C189.5,58.3,191.5,58.4,193,59.2z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M212.9,86c-1.8,1.2-3.4,4.1-3.4,6.3c0,0.6,0.5,2,1.1,3.2c2.8,5.2,10.3,5.2,13,0c1.8-3.4,0.8-7.3-2.4-9.6C219,84.4,215.3,84.4,212.9,86z","Duration":0,"Width":"3","Color":"#000000"},{"Path":"M152,86.6c-11.8,1.6-23.6,8.4-31.1,17.8c-10.2,12.8-13.4,30.3-8.2,45.6c6.1,18.1,22.5,31,41.2,32.8c20.7,1.9,39.6-8.9,48.6-27.7c6.8-14.5,5.9-31.5-2.5-45.6c-3.2-5.4-10.7-12.9-16.1-16.1c-5-3-11.4-5.4-16.9-6.4C163.2,86.3,155.5,86.1,152,86.6z M168.5,100.1c5.9,1.7,10.8,4.5,15.3,8.9c4.3,4.2,7.1,8.8,9,14.3c1.7,5.1,2.2,14,1,19.3c-3.1,13.1-13.8,23.8-27,27.1c-3.8,1-13.1,0.9-17-0.2c-15.2-4-26.1-17.2-27-32.9c-0.7-10.9,3.3-20.6,11.5-28.4C143.7,99.7,156,96.6,168.5,100.1z","Duration":0,"Width":"3","Color":"#000000"}],"Box":{"Width":"256","Height":"256"},"Config":{"Width":"3","Opacity":1,"Sequential":true,"Color":"#000000","Animate":"Linear","Reverse":false}}});