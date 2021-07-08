(this["webpackJsonpsainsburys-clone"]=this["webpackJsonpsainsburys-clone"]||[]).push([[0],{54:function(e,r,t){},55:function(e,r,t){"use strict";t.r(r);var c=t(3),s=t(34),a=t.n(s),n=t(16),i=t(9),l=t(12),o=t(2);var j=function(e){var r=e.value;return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"headerLinkList",children:r.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"headerLink",href:"#",children:e})},e)}))})})},d=t(17),u=t.n(d),b=t(21),h=t(37),x=(t(49),h.a.initializeApp({apiKey:"AIzaSyBElTMAHqg2Pe-Zqq27ozdfK4KuvLqujkI",authDomain:"sainsburys-clone.firebaseapp.com",projectId:"sainsburys-clone",storageBucket:"sainsburys-clone.appspot.com",messagingSenderId:"1059306360937",appId:"1:1059306360937:web:4336a6f92f4e88daf852f8"})),O=x.auth(),m=x.firestore(),p=Object(c.createContext)();function f(){return Object(c.useContext)(p)}function v(e){var r=e.children,t=Object(c.useState)(),s=Object(l.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(!0),j=Object(l.a)(i,2),d=j[0],u=j[1];Object(c.useEffect)((function(){return O.onAuthStateChanged((function(e){n(e),u(!1)}))}),[]);var b={currentUser:a,signup:function(e,r){return O.createUserWithEmailAndPassword(e,r)},deleteUser:function(){return O.currentUser.delete()},logout:function(){return O.signOut()},login:function(e,r){return O.signInWithEmailAndPassword(e,r)}};return Object(o.jsx)(p.Provider,{value:b,children:!d&&r})}var g=function(){var e=Object(c.useRef)(),r=Object(c.useRef)(),t=(Object(c.useRef)(),Object(c.useState)("")),s=Object(l.a)(t,2),a=s[0],j=s[1],d=Object(c.useState)(!1),h=Object(l.a)(d,2),x=h[0],O=h[1],m=Object(i.f)(),p=f().login;function v(){return(v=Object(b.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.prev=1,j(""),O(!0),t.next=6,p(e.current.value,r.current.value);case 6:m.push("/"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),j("Log in failed");case 12:O(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{class:"userFormContainer",children:[Object(o.jsx)("h1",{children:"Log in"}),Object(o.jsxs)("form",{className:"userForm",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(o.jsxs)("label",{children:["Email address",Object(o.jsx)("input",{type:"email",ref:e})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",ref:r})]}),Object(o.jsx)("p",{class:"userFormError",children:a||null}),Object(o.jsx)("button",{className:"userFormSubmitButton",disabled:!!x,children:"Log in"})]}),Object(o.jsx)("p",{className:"userFormRegisterText",children:"New to Sainsbury's Groceries?"}),Object(o.jsx)(n.b,{className:"userFormRegisterLink",to:"/signup",children:Object(o.jsx)("p",{className:"userFormRegister",children:"Register here"})})]})},y=Object(c.createContext)(null);var N=function(){var e=f(),r=e.currentUser,t=e.logout,s=Object(c.useContext)(y).setTrolleyCurrent;function a(){return(a=Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:s([]),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return r?Object(o.jsx)("a",{className:"logIn",href:"#",onClick:function(){return a.apply(this,arguments)},children:"Log out"}):Object(o.jsx)(n.b,{className:"logIn",to:"/login",children:"LogIn / Register"})};var C=function(e){var r=e.name,t=e.link;return Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"navItem",href:t,children:r})})};var k=function(e){var r=e.placeholder;return Object(o.jsxs)("form",{className:"searchForm",children:[Object(o.jsx)("input",{className:"searchInput",placeholder:r}),Object(o.jsx)("button",{className:"clearButton"}),Object(o.jsx)("button",{className:"searchButton"})]})},S=t.p+"static/media/sainsburys-logo.da8b5f18.svg";var w=function(){var e,r=Object(c.useContext)(y),t=r.trolleyCurrent;return r.setTrolleyCurrent,Object(o.jsxs)("div",{className:"headerMain",children:[Object(o.jsxs)("div",{className:"headerRow",children:[Object(o.jsx)(j,{value:["Explore more at Sainsburys.co.uk","Help Centre","Store Locator"]}),Object(o.jsxs)("div",{className:"logInCart",children:[Object(o.jsx)(N,{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"cart",children:t[0]&&Object(o.jsx)("span",{children:(e=t,e.reduce((function(e,r){return e+r.quantity}),0))})}),Object(o.jsxs)("p",{className:"headerPrice",children:["\xa3",function(e){return e.reduce((function(e,r){return e+r.price*r.quantity}),0)}(t).toFixed(2)]})]})]})]}),Object(o.jsxs)("div",{className:"headerRow",children:[Object(o.jsx)("a",{className:"mainLogo",href:"#",children:Object(o.jsx)("img",{src:S,alt:"Main logo"})}),Object(o.jsx)("a",{class:"searchListOfItems",href:"#",children:"Search a list of items"})]}),Object(o.jsxs)("div",{className:"headerRow headerRowNav",children:[Object(o.jsxs)("ul",{className:"navMain",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{className:"navItem navGroceries",href:"#",children:[Object(o.jsx)("span",{className:"navGroceriesText",children:"Groceries"})," ",Object(o.jsx)("span",{className:"navArrow"})]})}),Object(o.jsx)(C,{name:"Favourites",link:"#"}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{className:"navItem navOffers",href:"#",children:"Offers"})}),Object(o.jsx)(C,{name:"Discover",link:"#"}),Object(o.jsx)(C,{name:"Recipes",link:"#"}),Object(o.jsx)(C,{name:"Delivery Pass",link:"#"}),Object(o.jsx)(C,{name:"Summer",link:"#"})]}),Object(o.jsx)(k,{placeholder:"Search products"})]})]})};var I=function(e){var r=e.carouselData,t=Object(c.useState)(0),s=Object(l.a)(t,2),a=s[0],n=s[1];function i(e){var r=e.target.name;n(parseInt(r)),e.currentTarget.blur()}function j(e){n((function(e){return(e+1)%r.length})),e&&e.currentTarget.blur()}Object(c.useEffect)((function(){var e=setInterval((function(){j()}),5500);return function(){return clearInterval(e)}}),[a]);var d=r.map((function(e,r){return Object(o.jsx)("button",{className:"carouselNavButton "+(a==r?"carouselNavButtonActive":""),onClick:i,name:r},e.src)}));return Object(o.jsxs)("div",{class:"carouselContainer",children:[Object(o.jsx)("button",{className:"carouselSideButton carouselLeft",onClick:function(e){n((a+r.length-1)%r.length),e.currentTarget.blur()}}),Object(o.jsx)("img",{className:"carouselImage",src:r[a].src,alt:r.alt}),Object(o.jsxs)("div",{class:"carouselInfo "+(r[a].bgDark&&"carouselInfoLight"),children:[Object(o.jsxs)("div",{class:"carouselText",children:[Object(o.jsx)("h1",{className:"carouselHeading",children:r[a].heading}),Object(o.jsx)("p",{className:"carouselParagraph",children:r[a].text})]}),Object(o.jsx)("a",{className:"carouselShopNowButton",href:r[a].url,children:"Shop now"})]}),Object(o.jsx)("button",{className:"carouselSideButton carouselRight",onClick:j}),Object(o.jsx)("nav",{class:"carouselNavButtonsContainer",children:d})]})},B=[{src:"./carousel/carousel-back-these-winners.jpg",alt:"Back these winners",heading:"Back these winners",text:"Stock up on food and drink for sports fans",url:"#"},{src:"./carousel/carousel-one-pound-and-under.jpg",alt:"One pound and under offer",heading:"Don't miss...",text:"Fill your basket with budget friendly offers",url:"#"},{src:"./carousel/carousel-pizza-meal-deal.jpg",alt:"Pizza meal deal",heading:"Pizza meal deal",text:"Great deals on your favourite pizzas, sides and dip*",url:"#",bgDark:!0},{src:"./carousel/carousel-summer-celebrations.jpg",alt:"Summer celebrations",heading:"Summer offers",text:"Fantastic food and drink for outdoor environment",url:"#"}];var F=function(e){var r=e.text,t=e.src,c=e.url;return Object(o.jsxs)("div",{className:"cardSmall",children:[Object(o.jsx)("a",{href:c,children:Object(o.jsx)("img",{className:"cardSmallImage",src:t,alt:r})}),Object(o.jsx)("h2",{className:"headingCardSmall",children:r})]})},R=t(24),T=t(38),L=t(36);var P=function(e){var r=e.productData,t=Object(c.useContext)(y),s=t.trolleyCurrent,a=t.setTrolleyCurrent,n=t.trolleyImported,i=(t.setTrolleyImported,f().currentUser);Object(c.useEffect)((function(){n&&i&&m.collection(i.uid).doc("trolley").set({trolleyCurrent:s})}),[s]);var l=r.priceBefore&&Object(o.jsxs)("p",{className:"productCardSavingText",children:["Only \xa3",r.price.toFixed(2),": Save \xa3",(r.priceBefore-r.price).toFixed(2)]}),j=r.sponsored&&Object(o.jsx)("p",{className:"productCardSponsoredText",children:"Sponsored"}),d=r.delivery&&Object(o.jsxs)("p",{className:"productCardDeliveryText",children:["Delivery by ",r.delivery]});return Object(o.jsxs)("div",{className:"productCardContainer",children:[l,j,Object(o.jsx)("img",{className:"productCardImage",src:r.src}),Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("p",{className:"productCardNameText",children:r.name})}),Object(o.jsxs)("p",{className:"productCardPriceText",children:[Object(o.jsxs)("span",{children:["\xa3",r.price.toFixed(2)]}),"/unit"]}),Object(o.jsx)("button",{name:r.name,className:"productCardButton",onClick:function(){a((function(e){return function(e){var t,c=Object(L.a)(e);try{var s=function(){var c=t.value;if(r.name===c.name)return{v:e.map((function(e){return c.name===e.name?Object(R.a)(Object(R.a)({},c),{quantity:c.quantity+1}):e}))}};for(c.s();!(t=c.n()).done;){var a=s();if("object"===typeof a)return a.v}}catch(n){c.e(n)}finally{c.f()}return[].concat(Object(T.a)(e),[Object(R.a)(Object(R.a)({},r),{quantity:1})])}(e)}))},children:"Add"}),d]})},D=[{name:"Sainsbury's British Lamb & Mint Kebabs x6 360g",price:3.25,priceBefore:3.5,src:"./products-home/sainsburys-british-lamb-mint-kebabs-x6-360g.jpg",delivery:"06/07/2021"},{name:"Doritos Cool Original Sharing Tortilla Chips Crisps 180g",price:1,src:"./products-home/doritos-cool-original-sharing-tortilla-chips-crisps-180g.jpg",sponsored:!0},{name:"Foster's Lager Beer Cans 18 x 440ml",price:11,priceBefore:13,src:"./products-home/fosters-lager-beer-cans-18x440ml.jpg",delivery:"06/07/2021"},{name:"Sainsbury's Stonebaked Pepperoni Hand Stretched Pizza 270g",price:2,priceBefore:3,src:"./products-home/sainsburys-stonebaked-pepperoni-hand-stretched-pizza-270g.jpg",delivery:"06/07/2021"}];var M=function(e){var r=e.heading,t=e.url,c=e.src;return Object(o.jsxs)("div",{className:"offersCardContainer",children:[Object(o.jsx)("a",{href:t,children:Object(o.jsx)("img",{className:"offersCardImage",src:c})}),Object(o.jsxs)("div",{class:"offersCardText",children:[Object(o.jsx)("h1",{className:"offersCardHeading",children:r}),Object(o.jsx)("a",{className:"offersCardLink",href:t,children:"Shop now"})]})]})};var E=function(e){var r=e.heading,t=e.src,c=e.url,s=e.bgDark;return Object(o.jsxs)("div",{className:"cardMediumContainer",children:[Object(o.jsx)("a",{href:c,children:Object(o.jsx)("img",{className:"cardMediumImage",src:t,alt:r})}),Object(o.jsxs)("div",{className:"cardMediumContent",children:[Object(o.jsx)("h1",{className:"cardMediumHeading "+(s&&"cardMediumHeadingLight"),children:r}),Object(o.jsx)("button",{className:"cardMediumButton "+(s&&"cardMediumButtonLight"),children:"Find out more"})]})]})};var z=function(){var e=D.map((function(e){return Object(o.jsx)(P,{productData:e},e.name)}));return Object(o.jsxs)("div",{className:"mainContentWrapper",children:[Object(o.jsx)(I,{carouselData:B}),Object(o.jsx)("h1",{className:"headingMain",children:"Shop by category"}),Object(o.jsxs)("div",{className:"cardSmallRow",children:[Object(o.jsx)(F,{text:"Fruit & veg",src:"./card-small/fruit-and-veg.png",url:"#"}),Object(o.jsx)(F,{text:"Meat & Fish",src:"./card-small/meat-and-fish.png",url:"#"}),Object(o.jsx)(F,{text:"Food cupboard",src:"./card-small/food-cupboard.jpg",url:"#"}),Object(o.jsx)(F,{text:"Household",src:"./card-small/household.png",url:"#"})]}),Object(o.jsx)("h1",{className:"headingMain",children:"Watch the sport"}),Object(o.jsx)("div",{className:"productDisplayHome",children:e}),Object(o.jsxs)("div",{className:"offersCardRow",children:[Object(o.jsx)(M,{heading:"Summer sipping",src:"./card-offers/summer-sipping.jpg",url:"#"}),Object(o.jsx)(M,{heading:"Picnic offers",src:"./card-offers/picnic-offers.jpg",url:"#"})]}),Object(o.jsxs)("div",{className:"offersCardRow",children:[Object(o.jsx)(M,{heading:"Fire up the BBQ",src:"./card-offers/fire-up-the-bbq.jpg",url:"#"}),Object(o.jsx)(M,{heading:"Beauty offers",src:"./card-offers/beauty-offers.jpg",url:"#"})]}),Object(o.jsx)("h1",{className:"headingMain",children:"Shopping with us"}),Object(o.jsxs)("div",{className:"cardSmallRow",children:[Object(o.jsx)(F,{text:"Nectar points",src:"./card-small/nectar-points.jpg",url:"#"}),Object(o.jsx)(F,{text:"Click & collect",src:"./card-small/click-and-collect.jpg",url:"#"}),Object(o.jsx)(F,{text:"Shop offers",src:"./card-small/shop-offers.jpg",url:"#"}),Object(o.jsx)(F,{text:"Groceries app",src:"./card-small/groceries-app.png",url:"#"})]}),Object(o.jsxs)("div",{className:"cardMediumRow",children:[Object(o.jsx)(E,{heading:"Better for the planet",src:"./card-medium/better-for-the-planet.jpg",url:"#",bgDark:!0}),Object(o.jsx)(E,{heading:"Help everyone eat better",src:"./card-medium/help-everyone-eat-better.jpg",url:"#",bgDark:!1})]})]})};var q=function(){return Object(o.jsx)("div",{className:"footerMain",children:Object(o.jsxs)("ul",{className:"footerLinkList",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Accessibility"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Cookie policy"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Privacy policy"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Manage cookies"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Contact us"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Help centre"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Terms & conditions"})})]})})};var A=function(){var e=Object(c.useContext)(y),r=e.trolleyCurrent,t=e.setTrolleyCurrent,s=e.setTrolleyImported,a=f(),i=a.currentUser,l=a.deleteUser,j=i?m.collection(i.uid).doc("trolley"):null;Object(c.useEffect)((function(){i&&j.get().then((function(e){e.exists&&t(e.data().trolleyCurrent),s(!0)})),s(!0)}),[]);var d,u=r.length>0?r.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"trolleyClearButton",onClick:function(){return function(e){t((function(r){return r.filter((function(r){return r.name!==e.name}))}))}(e)},children:"x"})}),Object(o.jsxs)("td",{children:[e.name,Object(o.jsxs)("span",{className:"trolleyQuantity",children:[" x",e.quantity]})]}),Object(o.jsxs)("td",{className:"tablePriceData",children:["\xa3",(e.price*e.quantity).toFixed(2)]})]},e.name)})):null,b=r[0]&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("table",{className:"trolleyTable",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{children:"Product"}),Object(o.jsx)("td",{children:"Price"})]})}),Object(o.jsx)("tbody",{children:u}),Object(o.jsx)("tfoot",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{}),Object(o.jsx)("td",{children:"Total:"}),Object(o.jsxs)("td",{children:["\xa3",(d=r,d.reduce((function(e,r){return e+r.price*r.quantity}),0)).toFixed(2)]})]})})]}),Object(o.jsx)("button",{className:"checkoutButton",onClick:function(){t([])},children:"Checkout"})]}),h=i?Object(o.jsxs)("div",{className:"sidebarCard",children:[Object(o.jsxs)("p",{className:"accountEmail",children:[" Welcome, ",i.email]}),Object(o.jsx)("button",{className:"sidebarDelete",onClick:function(){return l()},children:"Delete account"})]}):Object(o.jsxs)("div",{className:"sidebarCard",children:[Object(o.jsx)("h1",{children:"Already a customer?"}),Object(o.jsx)(n.b,{to:"/login",children:Object(o.jsx)("button",{className:"sidebarLogIn",children:"Log In"})}),Object(o.jsx)("div",{className:"linebreak"}),Object(o.jsxs)("p",{children:["Not yet registered?"," ",Object(o.jsx)(n.b,{to:"/signup",children:Object(o.jsx)("span",{children:Object(o.jsx)("a",{className:"sidebarRegister",href:"#",children:"Register Now"})})})]})]}),x=i?null:Object(o.jsxs)("div",{className:"sidebarCard",children:[Object(o.jsx)("h1",{children:"New customer?"}),Object(o.jsx)("p",{children:"Enter your postcode to check we deliver in your area."}),Object(o.jsx)("input",{maxlength:"8"}),Object(o.jsx)("button",{children:"Check postcode"})]}),O=i?null:Object(o.jsxs)("div",{className:"sidebarCard",children:[Object(o.jsx)("h1",{children:"\ud83d\udec8 Imporant Information"}),Object(o.jsx)("p",{children:"Alcohol pricing & promotions for customers served from our Scottish & Welsh stores may differ from those shown when browsing our site. Please log in to see the full range of alcohol prices & promotions available to you."})]});return Object(o.jsxs)("div",{className:"sidebarMain",children:[h,x,Object(o.jsxs)("div",{className:"sidebarCard",children:[Object(o.jsx)("h1",{children:"My dietary profile"}),Object(o.jsx)("p",{children:"Create a dietary profile for you or anyone you're shopping for and we'll flag any products we don't think are suitable for you as you shop."}),Object(o.jsx)("button",{className:"sidebarCreate",children:"Create"})]}),O,Object(o.jsxs)("div",{id:"trolley",className:"sidebarCard",children:[Object(o.jsx)("h1",{children:"My trolley"}),b]})]})};t(54);var H=function(){var e=Object(c.useState)([]),r=Object(l.a)(e,2),t=r[0],s=r[1],a=Object(c.useState)(!1),n=Object(l.a)(a,2),i=n[0],j=n[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)(y.Provider,{value:{trolleyCurrent:t,setTrolleyCurrent:s,trolleyImported:i,setTrolleyImported:j},children:[Object(o.jsx)(w,{}),Object(o.jsxs)("div",{className:"bodyWrapper",children:[Object(o.jsx)(z,{}),Object(o.jsx)(A,{})]})]}),Object(o.jsx)(q,{})]})};var U=function(){var e=Object(c.useRef)(),r=Object(c.useRef)(),t=Object(c.useRef)(),s=f().signup,a=Object(c.useState)(""),n=Object(l.a)(a,2),j=n[0],d=n[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),O=x[0],m=x[1],p=Object(i.f)();function v(){return(v=Object(b.a)(u.a.mark((function c(a){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),!(r.current.value.length<6)){c.next=3;break}return c.abrupt("return",d("Please set a longer password"));case 3:if(r.current.value===t.current.value){c.next=5;break}return c.abrupt("return",d("Passwords do not match"));case 5:return c.prev=5,d(""),m(!0),c.next=10,s(e.current.value,r.current.value,t.current.value);case 10:p.push("/"),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(5),d("Unknown Error: Failed to create account");case 16:m(!1);case 17:case"end":return c.stop()}}),c,null,[[5,13]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{class:"userFormContainer",children:[Object(o.jsx)("h1",{children:"Sign Up Page"}),Object(o.jsxs)("form",{className:"userForm",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(o.jsxs)("label",{children:["Email",Object(o.jsx)("input",{type:"email",ref:e})]}),Object(o.jsxs)("label",{children:["Password",Object(o.jsx)("input",{type:"password",ref:r})]}),Object(o.jsxs)("label",{children:["Re-enter password",Object(o.jsx)("input",{type:"password",ref:t})]}),Object(o.jsx)("p",{class:"userFormError",children:j||null}),Object(o.jsx)("button",{className:"userFormSubmitButton",disabled:!!O,children:"Sign Up"})]})]})};var W=function(){return Object(o.jsx)(v,{children:Object(o.jsx)(n.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:H}),Object(o.jsx)(i.a,{path:"/login",component:g}),Object(o.jsx)(i.a,{path:"/signup",component:U})]})})})};a.a.render(Object(o.jsx)(W,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.bb06dbf6.chunk.js.map