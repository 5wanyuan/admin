/** pear-admin-v3.10.0 MIT License By http://www.pearadmin.com/ */
 ;"use strict";layui.define(["table","laypage","jquery","element"],(function(e){var t=layui.jquery,i=(layui.element,layui.laypage),a={},r={elem:"#currentTableId",url:"",loading:!0,limit:0,linenum:4,currentPage:1,data:[],limits:[],page:!0,layout:["count","prev","page","next","limit","skip"],request:{pageName:"page",limitName:"limit",idName:"id",titleName:"title",imageName:"image",remarkName:"remark",timeName:"time"},response:{statusName:"code",statusCode:0,msgName:"msg",countName:"count",dataName:"data"},clickItem:function(e){},done:function(){}},n=function(e){a[e.elem.substring(1)]=this,this.reload(e)};function l(e,t,i){var a="<div class='cloud-card-component'>",r=function(e,t,i){for(var a="<div class='layui-row layui-col-space30'>",r=0;r<i.length;r++)a+=m(e,t,i[r],r);return a+="</div>"}(e,t,i);return a+=(r+="")+"</div>"}function m(e,t,i,a){var r=12/t;return"<div id="+i.id+' onclick="cardTableCheckedCard('+e+',this)" class="layui-col-md'+r+' ew-datagrid-item" data-index="'+a+'" data-number="1"> <div class="project-list-item"> <img class="project-list-item-cover" src="'+i.image+'"> <div class="project-list-item-body"> <h2>'+i.title+'</h2> <div class="project-list-item-text layui-text">'+i.remark+'</div> <div class="project-list-item-desc"> <span class="time">'+i.time+'</span> <div class="ew-head-list"></div> </div> </div > </div > </div > '}n.prototype.initOptions=function(e){this.option=t.extend(!0,{},r,e),this.option.limit&&0!=this.option.limit||(this.option.limit=2*this.option.linenum),this.option.limits&&0!=this.option.limits.length||(this.option.limits=[this.option.limit])},n.prototype.init=function(){var e=this.option,r=e.url,n="";if(n+=1==e.loading?'<div class="ew-table-loading">':'      <div class="ew-table-loading layui-hide">',n+='<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',n+="</div>",t(e.elem).html(n),n="",r){if(r.indexOf("?")>=0?r+="&v=1.0.0":r+="?v=1.0.0",e.page&&(r=(r=r+"&"+e.request.limitName+"="+e.limit)+"&"+e.request.pageName+"="+e.currentPage),e.where)for(var m in e.where)r=r+"&"+m+"="+e.where[m];(function(e){var i=t.Deferred();return t.get(e+(e.indexOf("?")?"&":"?")+"fresh="+Math.random(),(function(e){i.resolve(e)})),i.promise()})(r).then((function(r){r=function(e,t){var i={};i.code=e[t.response.statusName],i.msg=e[t.response.msgName],i.count=e[t.response.countName];var a=e[t.response.dataName];i.data=[];for(var r=0;r<a.length;r++){var n={};n.id=a[r][t.request.idName],n.image=a[r][t.request.imageName],n.title=a[r][t.request.titleName],n.remark=a[r][t.request.remarkName],n.time=a[r][t.request.timeName],i.data.push(n)}return i}(r,e),r.code!=e.response.statusCode?(e.data=[],e.count=0):(e.data=r.data,e.count=r.count),e.data&&e.data.length>0?(n=l(e.elem.substring(1),e.linenum,e.data),n+="<div id='cardpage'></div>"):n="<p>没有数据</p>",t(e.elem).html(n),e.page&&i.render({elem:"cardpage",count:e.count,limit:e.limit,limits:e.limits,curr:e.currentPage,layout:e.layout,jump:function(t,i){e.limit=t.limit,e.currentPage=t.curr,i||a[e.elem.substring(1)].reload(e)}})}))}else{if(e.alldata||(e.alldata=e.data),e.page){var o=[];e.count=e.alldata.length;for(var s=(e.currentPage-1)*e.limit;s<e.currentPage*e.limit&&s<e.alldata.length;s++)o.push(e.alldata[s]);e.data=o}e.data&&e.data.length>0?(n=l(e.elem.substring(1),e.linenum,e.data),n+="<div id='cardpage'></div>"):n="<p>没有数据</p>",t(e.elem).html(n),e.page&&i.render({elem:"cardpage",count:e.count,limit:e.limit,limits:e.limits,curr:e.currentPage,layout:e.layout,jump:function(t,i){e.limit=t.limit,e.currentPage=t.curr,i||a[e.elem.substring(1)].reload(e)}})}},n.prototype.reload=function(e){this.initOptions(this.option?t.extend(!0,this.option,e):e),this.init()},window.cardTableCheckedCard=function(e,i){t(i).addClass("layui-table-click").siblings().removeClass("layui-table-click");var r={};r.id=i.id,r.image=t(i).find(".project-list-item-cover")[0].src,r.title=t(i).find("h2")[0].innerHTML,r.remark=t(i).find(".project-list-item-text")[0].innerHTML,r.time=t(i).find(".time")[0].innerHTML,a[e.id].option.checkedItem=r,a[e.id].option.clickItem(r)},e("card",{render:function(e){return new n(e)},reload:function(e,t){a[e].option.checkedItem=null,a[e].reload(t)},getChecked:function(e){var t=a[e].option,i=t.checkedItem,r={};return i?(r[t.request.idName]=i.id,r[t.request.imageName]=i.image,r[t.request.titleName]=i.title,r[t.request.remarkName]=i.remark,r[t.request.timeName]=i.time,r):null},getAllData:function(e){for(var t=a[e].option,i=[],r=0;r<t.data.length;r++){var n={};n[t.request.idName]=t.data[r].id,n[t.request.imageName]=t.data[r].image,n[t.request.titleName]=t.data[r].title,n[t.request.remarkName]=t.data[r].remark,n[t.request.timeName]=t.data[r].time,i.push(n)}return i}})}));