(this.webpackJsonpinstaclone=this.webpackJsonpinstaclone||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),c=a.n(i),o=a(6),s=a.n(o),r=(a(13),a(7)),l=a(2),u={name:"Konstantin",surname:"Mikov",job:"Junior web-developer",pictures:[{id:1,title:"Calm lake",url:a.p+"static/media/calmLake.23279b62.jpg"},{id:2,title:"Autumn leaves",url:a.p+"static/media/autumnLeaves.3c591bde.jpg"},{id:3,title:"Coastal town",url:a.p+"static/media/city.8cb49630.jpg"},{id:4,title:"Morning forest",url:a.p+"static/media/forest.79fc9542.jpg"},{id:5,title:"Monument valley",url:a.p+"static/media/monumentValley.df026e12.jpg"},{id:6,title:"Mountain river",url:a.p+"static/media/river.357063c2.jpg"},{id:7,title:"Scenic road",url:a.p+"static/media/road.043c72a8.jpg"},{id:8,title:"Sandy valley",url:a.p+"static/media/valley.26492eda.jpg"},{id:9,title:"European village",url:a.p+"static/media/village.86445013.jpg"},{id:10,title:"Misty waterside",url:a.p+"static/media/waterside.48e19e6c.jpg"}]},p=(a(14),function(){return Object(n.jsx)("header",{className:"header root__section",children:Object(n.jsxs)("p",{className:"header__title",children:["Instaclone",Object(n.jsx)("span",{className:"header__title_power",children:"by React"})]})})}),d=(a(15),function(e){return Object(n.jsx)("section",{className:"profile root__section",children:Object(n.jsxs)("div",{className:"profile__user-info-container",children:[Object(n.jsx)("div",{className:"profile__photo"}),Object(n.jsxs)("div",{className:"profile__data",children:[Object(n.jsx)("h1",{className:"profile__name",children:e.data.name+" "+e.data.surname}),Object(n.jsx)("p",{className:"profile__job",children:e.data.job}),Object(n.jsx)("button",{className:"button profile__edit-button",onClick:e.togglerPopupEdit,children:"Edit"})]}),Object(n.jsx)("button",{className:"button profile__add-button",onClick:e.togglerPopupAdd,children:"+"})]})})}),j=(a(16),a(17),function(e){var t=e.pic,a=t.title,i=t.url,o=t.id,s=c.a.useState(!1),r=Object(l.a)(s,2),u=r[0],p=r[1];return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card__image",style:{backgroundImage:"url(".concat(i,")")},onClick:function(){e.popupImageSelector(i)},children:Object(n.jsx)("button",{className:"card__delete-icon",onClick:function(t){t.stopPropagation(),e.getIncompletePictures(o)}})}),Object(n.jsxs)("div",{className:"card__description",children:[Object(n.jsx)("p",{className:"card__name",children:a}),Object(n.jsx)("button",{className:"card__like-icon".concat(u?" card__like-icon_liked":""),onClick:function(){p(!u)}})]})]})}),m=function(e){var t=e.pictures.map((function(t){return Object(n.jsx)(j,{pic:t,getIncompletePictures:e.getIncompletePictures,popupImageSelector:e.popupImageSelector},t.id)}));return Object(n.jsx)("section",{className:"card-container root__section",children:t})},g=(a(18),function(e){return Object(n.jsx)("div",{className:"popup-image",onClick:function(t){t.target.classList.contains("popup-image__image")||e.popupImageSelector()},children:Object(n.jsx)("img",{className:"popup-image__image",src:e.urlImage,alt:"Beautyful place"})})}),b=function(e){var t=c.a.useState(!0),a=Object(l.a)(t,2),i=a[0],o=a[1],s={name:!0,job:!0},r="Field is too short",u="Required field",p=function(e){var t;e.target.validity.valueMissing?(e.target.nextSibling.textContent=u,t=!1):e.target.validity.tooShort?(e.target.nextSibling.textContent=r,t=!1):(e.target.nextSibling.textContent="",t=!0),function(e,t){s[e]=t,Object.values(s).every((function(e){return e}))?o(!0):o(!1)}(e.target.name,t)},d=c.a.useRef(null),j=c.a.useRef(null),m=c.a.useRef(null);c.a.useEffect((function(){d.current.value=e.editedProfileData.name,j.current.value=e.editedProfileData.surname,m.current.value=e.editedProfileData.job}),[]);return Object(n.jsx)("div",{className:"popup",onMouseDown:function(t){t.target.classList.contains("popup")&&e.togglerPopupEdit()},children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("h3",{className:"popup__title",children:"Edit"}),Object(n.jsxs)("form",{className:"popup__form",name:"formEdit",noValidate:!0,onSubmit:function(t){t.preventDefault(),e.editProfileData({name:d.current.value,surname:j.current.value,job:m.current.value}),e.togglerPopupEdit()},children:[Object(n.jsxs)("div",{className:"popup__input-field",children:[Object(n.jsx)("input",{type:"text",name:"name",className:"popup__input",placeholder:"Name",minLength:"2",maxLength:"15",autoComplete:"off",required:!0,onChange:p,ref:d}),Object(n.jsx)("p",{className:"popup__error-message"})]}),Object(n.jsxs)("div",{className:"popup__input-field",children:[Object(n.jsx)("input",{type:"text",name:"surname",className:"popup__input",placeholder:"Surname",minLength:"2",maxLength:"15",autoComplete:"off",ref:j}),Object(n.jsx)("p",{className:"popup__error-message"})]}),Object(n.jsxs)("div",{className:"popup__input-field",children:[Object(n.jsx)("input",{type:"text",name:"job",className:"popup__input",placeholder:"About yourself",minLength:"2",maxLength:"30",autoComplete:"off",required:!0,onChange:p,ref:m}),Object(n.jsx)("p",{className:"popup__error-message"})]}),Object(n.jsx)("button",{className:"popup__button button",disabled:!i,children:"OK"})]})]})})},f=function(e){var t=c.a.useState(!1),a=Object(l.a)(t,2),i=a[0],o=a[1],s={title:!1,url:!1},r=function(e,t){s[e]=t,Object.values(s).every((function(e){return e}))?o(!0):o(!1)},u="Field is too short",p="Required field",d="Incorrect URL",j=c.a.useRef(null),m=c.a.useRef(null);return Object(n.jsx)("div",{className:"popup",onMouseDown:function(t){t.target.classList.contains("popup")&&e.togglerPopupAdd()},children:Object(n.jsxs)("div",{className:"popup__content",children:[Object(n.jsx)("h3",{className:"popup__title",children:"Add new photo"}),Object(n.jsxs)("form",{className:"popup__form",name:"formAdd",noValidate:!0,onSubmit:function(t){t.preventDefault(),e.addPicture({title:j.current.value,url:m.current.value}),e.togglerPopupAdd()},children:[Object(n.jsxs)("div",{className:"popup__input-field",children:[Object(n.jsx)("input",{className:"popup__input",name:"title",type:"text",placeholder:"Title",minLength:"2",maxLength:"30",autoComplete:"off",required:!0,onChange:function(e){var t;e.target.validity.valueMissing?(e.target.nextSibling.textContent=p,t=!1):e.target.validity.tooShort?(e.target.nextSibling.textContent=u,t=!1):(e.target.nextSibling.textContent="",t=!0),r(e.target.name,t)},ref:j}),Object(n.jsx)("p",{className:"popup__error-message"})]}),Object(n.jsxs)("div",{className:"popup__input-field",children:[Object(n.jsx)("input",{className:"popup__input",name:"url",type:"text",placeholder:"Link on image",autoComplete:"off",required:!0,onChange:function(e){var t;e.target.validity.valueMissing?(e.target.nextSibling.textContent=p,t=!1):e.target.value.match(/^(https?:\/\/).+(.jpg|.png|.jpeg|.svg)$/)?t=!0:(e.target.nextSibling.textContent=d,t=!1),r(e.target.name,t)},ref:m}),Object(n.jsx)("p",{className:"popup__error-message"})]}),Object(n.jsx)("button",{className:"popup__button button",disabled:!i,children:"OK"})]})]})})},_=function(){var e=c.a.useState(u.pictures),t=Object(l.a)(e,2),a=t[0],i=t[1],o=c.a.useState(!1),s=Object(l.a)(o,2),j=s[0],_=s[1],x=c.a.useState(""),h=Object(l.a)(x,2),O=h[0],v=h[1],N=c.a.useState(!1),S=Object(l.a)(N,2),C=S[0],y=S[1],P=c.a.useState(u),k=Object(l.a)(P,2),I=k[0],L=k[1],M=c.a.useState(!1),w=Object(l.a)(M,2),D=w[0],E=w[1],A=function(e){e&&v(e),_(!j)},R=function(){y(!C)},q=function(){E(!D)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(d,{data:I,togglerPopupEdit:R,togglerPopupAdd:q}),Object(n.jsx)(m,{pictures:a,getIncompletePictures:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)},popupImageSelector:A}),j&&Object(n.jsx)(g,{urlImage:O,popupImageSelector:A}),C&&Object(n.jsx)(b,{editedProfileData:I,editProfileData:function(e){L(e)},togglerPopupEdit:R}),D&&Object(n.jsx)(f,{addPicture:function(e){e.id=a[a.length-1].id+1,i([].concat(Object(r.a)(a),[e]))},togglerPopupAdd:q})]})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.querySelector(".root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.195b4f6f.chunk.js.map