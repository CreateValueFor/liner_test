(this.webpackJsonpliner_test=this.webpackJsonpliner_test||[]).push([[0],{35:function(n,t,e){"use strict";e.r(t);var o,i=e(0),r=e.n(i),a=e(19),s=e.n(a),d=e(4),c=e(9),l=e(2),x=e(5),b=e(1),p=x.a.div(o||(o=Object(d.a)(["\n\twidth: 712px;\n\theight: 100%;\n\tmargin-bottom: 100px;\n\tdisplay:flex;\n\tbox-sizing: border-box;\n"])));var h=function(){return Object(b.jsx)(p,{})};var g,f,j,m=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h,{})})},u=x.a.div(g||(g=Object(d.a)(["\n  width: 1280px;\n  height: 64px;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n  /* //\uac00\uc6b4\ub370 \ubc30\uce58\n  left: 0;\n  right: 0;\n  margin: 0 auto; */\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  \n  .header-container{\n    position:relative;\n    width:1280px;\n    height: 64px;\n    display:flex;\n    align-items:center;\n\n    a{\n      position: absolute;\n      left:0;\n      width: 32px;\n      height:32px;\n      background: url('https://getliner.com/src/images/liner-logo.svg') no-repeat;\n      background-size : 32px;\n      text-decoration: none;\n      cursor: pointer;\n    }\n  }\n\n"]))),O=x.a.div(f||(f=Object(d.a)(['\n  width:1280px;\n  height: 40px;\n  div{\n    width: 800px;\n    min-height:40px;\n    position: absolute;\n    left: 240px;\n    display:flex;\n    form{\n      input{\n        width: 680px;\n        border-radius: 8px;\n        background-color: #eef1f4;\n        font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;\n        line-height: 1.2;\n        font-size: 16px;\n        color: #333;\n        padding: 10px 54px 11px 16px;\n        border: none;\n        outline: none;\n        box-sizing:border-box;\n      }\n    }\n    span{\n      background: url(\'https://getliner.com/src/images/search.svg\') no-repeat;\n      width:32px;\n      height: 32px;\n      background-size: 24px;\n      background-position: 50%;\n      border-radius:50%;\n      align-self:center;\n      left: -40px;\n      position:relative;\n      //input\uacfc \uacb9\uccd0\uc788\uae30 \ub54c\ubb38\uc5d0 z-index\ub85c \uc55e\uc73c\ub85c \uaebc\ub0b4\uc90d\ub2c8\ub2e4.\n      z-index: 1;\n      &:hover{\n        background-color: #dde1e7;\n\n      }\n    }\n  }\n']))),v=x.a.div(j||(j=Object(d.a)(['\n  display:flex;\n  align-items:center;\n  position: absolute;\n  right:0;\n  button{\n    border: none;\n    background-color: transparent;\n    padding: 0;\n    cursor: pointer;\n    box-sizing: border-box;\n  }\n  button:first-child{\n    height: 32;\n    margin: 4px 24px 4px 212px;\n    padding: 7px 20px;\n    border-radius: 8px;\n    background-color: #33cac6;\n    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;\n    color: #fff;\n    box-sizing:border-box;\n    &:hover{\n      background-color: #00bdb8;\n    }\n  }\n  button:last-child{\n    background-image: url(\'https://getliner.com/src/images/noti.svg\');\n    width: 32px;\n    height: 32px;\n    background-size: 24px;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    border-radius: 50%;\n    cursor: pointer;\n    position: relative;\n    &:hover{\n      border-radius:50%;\n      background-color:#f6f8fa;\n    }\n  }\n'])));var w,y=function(){return Object(b.jsx)(u,{children:Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)(c.b,{to:"/home"}),Object(b.jsx)(O,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("form",{onSubmit:function(n){n.preventDefault()},children:Object(b.jsx)("input",{type:"text",placeholder:"Search on LINER"})}),Object(b.jsx)("span",{})]})}),Object(b.jsxs)(v,{children:[Object(b.jsx)("button",{children:"Upgrade"}),Object(b.jsx)("button",{})]})]})})},k=e(23),N=x.a.div(w||(w=Object(d.a)(['\n\twidth: 216px;\n  position: fixed;\n  top: 98px;\n  margin-left: -16px;\n  z-index: 1;\n\tdisplay:flex;\n\tflex-direction:column;\n\n\t.active{\n\t\tcolor: #00bdb8;\n    font-weight: 700;\n\t}\n\n\ta{\n\t\twidth: 232px;\n    height: 51px;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: -.4px;\n    color: #787d86;\n    cursor: pointer;\n    flex-shrink: 0;\n\t\ttext-decoration:none;\n\n\t\t&:hover{\n\t\t\tbackground-color: #f6f8fa;\n\t\t}\n\t}\n'])));var S,z,J=function(){var n=Object(i.useState)(null),t=Object(k.a)(n,2),e=t[0],o=t[1],r=function(n){var t=n.target.id;o(t)};return Object(b.jsx)(N,{children:[{id:1,text:"For You",to:"/home"},{id:2,text:"My Highlights",to:"/myhighlights/highlights"},{id:3,text:"More",to:"/more"}].map((function(n){return Object(b.jsx)(c.b,{onClick:r,id:n.id,className:e==n.id?"active":"inactive",to:n.to,children:n.text},n.id)}))})},M=x.a.div(S||(S=Object(d.a)(["\n  width: 320px;\n\tmargin-left: 24px;\n\tmargin-top: 40px;\n\tbox-sizing : border-box;\n"]))),R=x.a.div(z||(z=Object(d.a)(['\n\twidth: 100%;\n  border-radius: 8px;\n  background-color: #f6f8fa;\n  display: flex;\n  flex-direction: column;\n\t\n\t.title{\n\t\tfont-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;\n    font-size: 14px;\n    font-weight: 700;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: -.35px;\n    color: #969aa2;\n    padding: 16px 0 0 20px;\n\t}\n\n\t.border{\n\t\twidth: 280px;\n    border-bottom: 1px solid #dde1e7;\n    margin: 8px 0;\n    align-self: center;\n\t}\n\t.contents{\n\t\tpadding-inline-start: 0;\n\t\tmargin: 0;\n\t\tpadding: 3px 12px 12px;\n    display: flex;\n    flex-wrap: wrap;\n\t\ta{\n\t\t\tpadding: 4px 8px;\n    \tborder-radius: 8px;\n    \tfont-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;\n    \tfont-size: 14px;\n    \tfont-weight: 500;\n    \tfont-stretch: normal;\n    \tfont-style: normal;\n    \tline-height: normal;\n    \tletter-spacing: -.35px;\n    \tcolor: #555;\n    \tmargin-bottom: 8px;\n\t\t\ttext-decoration: none;\n\t\t\t&:hover{\n\t\t\t\tbackground-color: #eef1f4;\n\t\t\t\tcolor: #00bdb8;\n\t\t\t}\n\t\t}\n\t}\n']))),C=[{id:1,text:"free",to:"/home/tags/free"},{id:2,text:"upload",to:"/home/tags/upload"},{id:3,text:"sharing",to:"/home/tags/sharing"},{id:4,text:"video",to:"/home/tags/video"},{id:5,text:"news",to:"/home/tags/news"},{id:6,text:"nlm",to:"/home/tags/nlm"},{id:7,text:"health",to:"/home/tags/health"},{id:8,text:"ncbi",to:"/home/tags/ncbi"},{id:9,text:"medline",to:"/home/tags/medline"},{id:10,text:"education",to:"/home/tags/education"},{id:11,text:"pubmed abstract",to:"/home/tags/pubmed abstract"},{id:12,text:"national library of medicine",to:"/home/tags/national library of medicine"}];var K,P=function(){return Object(b.jsx)(M,{children:Object(b.jsxs)(R,{children:[Object(b.jsx)("div",{className:"title",children:"Trending Keywords"}),Object(b.jsx)("div",{className:"border"}),Object(b.jsx)("ul",{className:"contents",children:C.map((function(n){return Object(b.jsxs)(c.b,{to:n.to,children:["#",n.text]},n.id)}))})]})})},E=x.a.div(K||(K=Object(d.a)(["\n\tmargin-top: 16px;\n\twidth: 320px;\n\tbox-sizing: border-box;\n\t.recommendation-container{\n\t\twidth: 100%;\n    border-radius: 8px;\n\t\tborder-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    background-color: #f6f8fa;\n    display: flex;\n    flex-direction: column;\n\n\t}\n"])));var F,I,T,_,B=function(){return Object(b.jsxs)(E,{children:[Object(b.jsx)("div",{className:"recommendation-container",children:Object(b.jsx)("div",{className:"title",children:"Trending Pages"})}),Object(b.jsx)("div",{className:"show-more"})]})},D=x.a.div(F||(F=Object(d.a)(["\n  width:1280px;\n  margin: 0 auto;\n"]))),H=x.a.main(I||(I=Object(d.a)(["\n\t\n  display: flex;\n  flex-direction: row;\n\tmargin-top: 64px;\n\tmargin-left: 224px;\n\tbox-sizing: border-box;\n"]))),L=x.a.div(T||(T=Object(d.a)(["\n\twidth: 712px;\n\theight: 100%;\n\tmargin-bottom: 100px;\n\tdisplay:flex;\n\tbox-sizing: border-box;\n"]))),U=x.a.div(_||(_=Object(d.a)(["\n  display:flex;\n  flex-direction: column;\n"])));var Y=function(){return Object(b.jsx)(c.a,{children:Object(b.jsxs)(D,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(J,{}),Object(b.jsxs)(H,{children:[Object(b.jsx)(L,{children:Object(b.jsx)(l.c,{children:Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(m,{})})})}),Object(b.jsxs)(U,{children:[Object(b.jsx)(P,{}),Object(b.jsx)(B,{})]})]})]})})};var q=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(Y,{})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.430af83f.chunk.js.map