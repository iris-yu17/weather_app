(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(9),i=a.n(s),r=(a(15),a(3)),o=(a(16),a(8),a(10)),l=a(7),m=a(0);var j=function(e){var t=e.location,a=(e.setLocation,e.setShowMask);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"location_wrapper",children:[Object(m.jsx)("div",{className:"city_name",children:t}),Object(m.jsx)("div",{className:"location_icon",onClick:function(){a(1)},children:Object(m.jsx)(o.a,{icon:l.a})})]})})},u=a.p+"static/media/sun.63eb6ccc.svg",d=a.p+"static/media/cloud.5c664809.svg",b=(a.p,a.p+"static/media/sun_cloud.415ec846.svg");a.p,a.p;var h=function(e){var t=e.weather,a=e.setWeather,n=e.location,s=e.setLocation,i=(e.showMask,e.setShowMask),o=Object(c.useState)(),l=Object(r.a)(o,2),h=l[0],O=l[1],p=function(){fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-BB6158E8-3E79-4C4D-BAFF-D0980161A2C5&locationName="+n).then((function(e){return e.json()})).then((function(e){var t=e.records.locations[0].location[0];a({locationName:n,description:t.weatherElement[6].time[0].elementValue[0].value,averageTemperature:t.weatherElement[1].time[0].elementValue[0].value,rainPossibility:t.weatherElement[0].time[0].elementValue[0].value,maxTemperature:t.weatherElement[12].time[0].elementValue[0].value,minTemperature:t.weatherElement[8].time[0].elementValue[0].value,img:t.weatherElement[6].time[0].elementValue[1].value,date:t.weatherElement[0].time[0].startTime.slice(0,10)})}))};return Object(c.useEffect)((function(){p()}),[]),Object(c.useEffect)((function(){"01"===t.img?O(u):"02"===t.img?O(b):(t.img,O(d))}),[t]),Object(c.useEffect)((function(){p()}),[n]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{location:n,setLocation:s,setShowMask:i}),Object(m.jsxs)("div",{className:"description",children:[t.date," \xa0\xa0",t.description]}),Object(m.jsx)("img",{className:"currnt_weather_img",src:h}),Object(m.jsxs)("div",{className:"temp_n_detail_wrapper",children:[Object(m.jsxs)("div",{className:"temperature",children:[t.averageTemperature,"\xb0C"]}),Object(m.jsxs)("div",{className:"detail",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"\u964d\u96e8\u6a5f\u7387:"}),Object(m.jsxs)("span",{children:["\xa0\xa0\xa0 ",t.rainPossibility," %"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"\u6700\u4f4e\u6eab\u5ea6:"}),Object(m.jsxs)("span",{children:["\xa0\xa0\xa0 ",t.minTemperature,"\xb0C"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"\u6700\u9ad8\u6eab\u5ea6:"}),Object(m.jsxs)("span",{children:["\xa0\xa0\xa0 ",t.maxTemperature,"\xb0C"]})]})]})]})]})};var O=function(e){var t=e.cityName,a=e.setLocation,c=e.setShowMask;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"city_item",onClick:function(e){c(0),a(t)},children:t})})};var p=function(e){e.showMask;var t=e.setShowMask,a=e.setLocation,c=["\u57fa\u9686\u5e02","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u6843\u5712\u5e02","\u65b0\u7af9\u5e02","\u82d7\u6817\u7e23","\u81fa\u4e2d\u5e02","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u5c4f\u6771\u7e23","\u81fa\u6771\u7e23","\u82b1\u84ee\u7e23","\u5b9c\u862d\u7e23","\u6f8e\u6e56\u7e23","\u91d1\u9580\u7e23","\u9023\u6c5f\u7e23"].map((function(e){return Object(m.jsx)(O,{cityName:e,setLocation:a,setShowMask:t})}));return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"mask_background",onClick:function(e){e.stopPropagation(),t(0)},children:Object(m.jsx)("div",{className:"city_list_card",onClick:function(e){e.stopPropagation()},children:c})})})};var v=function(e){var t=e.location,a=e.dayCount,n=Object(c.useState)(u),s=Object(r.a)(n,2),i=s[0],o=s[1],l=Object(c.useState)({date:"",img:"",maxTemperature:"",minTemperature:""}),j=Object(r.a)(l,2),h=j[0],O=j[1],p=function(){fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-BB6158E8-3E79-4C4D-BAFF-D0980161A2C5&locationName="+t).then((function(e){return e.json()})).then((function(e){var t=e.records.locations[0].location[0].weatherElement.map((function(e,t){return e.time.filter((function(e,t){return"06:00"===e.startTime.slice(11,16)}))}));console.log(t),O({maxTemperature:t[12][a].elementValue[0].value,minTemperature:t[8][a].elementValue[0].value,img:t[6][a].elementValue[1].value,date:t[0][a].startTime.slice(6,10)})}))};return Object(c.useEffect)((function(){p()}),[]),Object(c.useEffect)((function(){p()}),[t]),Object(c.useEffect)((function(){"01"===h.img?o(u):"02"===h.img?o(b):(h.img,o(d))}),[h]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"forcast_box",children:[Object(m.jsx)("div",{className:"forecast_date",children:h.date}),Object(m.jsx)("img",{className:"farecast_img",src:i}),Object(m.jsxs)("div",{className:"temp_range",children:[h.minTemperature,"~",h.maxTemperature," \xb0C"]})]})})};var x=function(){var e=Object(c.useState)("\u65b0\u5317\u5e02"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)({locationName:a,description:"",averageTemperature:"",rainPossibility:"",maxTemperature:"",minTemperature:"",img:"",date:""}),u=Object(r.a)(j,2),d=u[0],b=u[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"body",children:[Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"current_weather",children:Object(m.jsx)(h,{weather:d,setWeather:b,location:a,setLocation:n,showMask:o,setShowMask:l})}),Object(m.jsx)("div",{className:"seperattion_line"}),Object(m.jsxs)("div",{className:"forecasts",children:[Object(m.jsx)(v,{location:a,dayCount:0}),Object(m.jsx)(v,{location:a,dayCount:1}),Object(m.jsx)(v,{location:a,dayCount:2})]})]}),0==o?Object(m.jsx)("div",{}):Object(m.jsx)(p,{showMask:o,setShowMask:l,setLocation:n})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),f()},8:function(e,t,a){}},[[23,1,2]]]);
//# sourceMappingURL=main.448b302f.chunk.js.map