(this.webpackJsonpSN=this.webpackJsonpSN||[]).push([[0],{130:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3zvLU"}},131:function(e,t,n){e.exports=n.p+"static/media/loader.dd50b232.gif"},133:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__22zhR"}},134:function(e,t,n){e.exports={item:"Post_item__euHzL"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__2Q4Lm",item:"Navbar_item__3Iueq",active:"Navbar_active__FhkBw"}},162:function(e,t,n){e.exports=n(287)},167:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);n(95),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(63),c=n.n(o),i=n(25),u=n(26),s=n(28),l=n(27),m=(n(167),n(16)),f=n.n(m),p=n(12),d=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.active},"Profile")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.active},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:f.a.active},"Users")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:f.a.active},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/videos",activeClassName:f.a.active},"Videos")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/setting",activeClassName:f.a.active},"Setting")))},g=n(10),h=n(43),E=n(4),v={dialogs:[{id:1,name:"Vasya"},{id:2,name:"Kasya"},{id:3,name:"Ivasya"},{id:4,name:"Tasya"},{id:5,name:"Masya"},{id:6,name:"Pasya"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"I am fine!"}]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(E.a)(Object(E.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[{id:4,message:t.text}])});default:return e}},O=n(29),_=n.n(O),P=function(e){return r.a.createElement("div",{className:_.a.dialog},e.message)},j=function(e){return r.a.createElement("div",{className:_.a.dialog+" "+_.a.active},r.a.createElement(p.b,{to:"/dialogs/"+e.id},e.name))},S=n(125),w=n(126),C=n(136),y=n(37),k=n.n(y),N=function(e){return function(t){var n=t.input,a=t.meta,o=Object(C.a)(t,["input","meta"]),c=a.touched&&a.error;return r.a.createElement("div",{className:k.a.formControl+" "+(c?k.a.error:"")},r.a.createElement("div",null,r.a.createElement(e,Object.assign({},n,o))),c&&r.a.createElement("span",null,a.error))}},T=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5?arguments[5]:void 0,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return r.a.createElement("div",null,r.a.createElement(S.a,Object.assign({placeholder:e,validate:t,component:n,name:a,type:i},o))," ",c)},x=function(e){if(!(e&&e.length>0))return"This field is required"},I=function(e){return function(t){if(t&&t.length>e)return"Max length ".concat(e)}},U=I(10),A=N("textarea"),L=Object(w.a)({form:"message"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Your message",validate:[x,U],component:A,name:"text"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send!")))})),F=function(e){return r.a.createElement("div",null,r.a.createElement(L,{onSubmit:function(t){e.addMessage(t.text)}}))},M=function(e){var t=e.dialogsPage.dialogs.map((function(e){return r.a.createElement(j,{key:e.id,name:e.name,id:e.id})})),n=e.dialogsPage.messages.map((function(e){return r.a.createElement(P,{key:e.id,message:e.message})}));return r.a.createElement("div",{className:_.a.dialogs},r.a.createElement("div",{className:_.a.dialogsItems},t),r.a.createElement("div",{className:_.a.messages},n,r.a.createElement(F,e)))},D=n(11),z=function(e){return{isAuth:e.auth.isAuth}},R=n(6),G=Object(R.d)(Object(D.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"dialogs/ADD-MESSAGE",text:e}}(t))}}})),(function(e){var t=function(t){Object(s.a)(a,t);var n=Object(l.a)(a);function a(){return Object(i.a)(this,a),n.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(g.a,{to:"/login"})}}]),a}(r.a.Component);return Object(D.b)(z)(t)}))(M),H=n(9),B=n.n(H),J=n(15),W=n(87).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"62005d27-039f-4c86-85d5-445b3f38c01d"}}),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return W.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},V=function(e,t){return"follow"===t?W.post("follow/".concat(e)).then((function(e){return e.data})):W.delete("follow/".concat(e)).then((function(e){return e.data}))},Z=function(){return W.get("auth/me").then((function(e){return e.data}))},q=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3?arguments[3]:void 0;return W.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},X=function(){return W.delete("auth/login").then((function(e){return e.data}))},K=function(){return W.get("security/get-captcha-url").then((function(e){return e.data}))},Q=function(e){return W.get("profile/".concat(e)).then((function(e){return e.data}))},$=function(e){return W.put("profile",e).then((function(e){return e.data}))},ee=function(e){return W.get("profile/status/".concat(e)).then((function(e){return e.data}))},te=function(e){return W.put("profile/status",{status:e}).then((function(e){return e.data}))},ne=function(e){var t=new FormData;return t.append("image",e),W.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},ae={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingProgress:[]},re=function(e){return{type:"users/FOLLOWING",userId:e}},oe=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},ce=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFething:e}},ie=function(e,t){return{type:"users/TOGGLE_IS_FETCHING_FOLLOW",isFething:e,userId:t}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOWING":return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!e.followed}):e}))});case"users/SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFething});case"users/TOGGLE_IS_FETCHING_FOLLOW":return Object(E.a)(Object(E.a)({},e),{},{followingProgress:t.isFething?[].concat(Object(h.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!=t.userId}))});default:return e}},se=n(70),le=n.n(se),me=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,c=0,i=0,u=Math.ceil(t/n);a<=6||u<12?(c=1,i=u<12?u:11):(c=a-5,i=a+5<u?a+5:u);for(var s=[],l=c;l<=i;l++)s.push(l);var m=function(){return r.a.createElement("button",{onClick:function(){o(1)}},"To start")},f=function(){return r.a.createElement("button",{onClick:function(){o(u)}},"To end")};return r.a.createElement("div",{className:le.a.paginatorComment},a>6&&r.a.createElement(m,null),s.map((function(e){return r.a.createElement("span",null,r.a.createElement("span",{className:a===e?le.a.selectedPage:le.a.allPages,onClick:function(){o(e)}},e))})),a+5<u&&r.a.createElement(f,null))},fe=n(130),pe=n.n(fe),de=n(68),ge=n.n(de),he=function(e){var t=e.user,n=e.followingProgress,a=e.following;return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:ge.a,className:pe.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,"unfollow")}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id,"follow")}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},Ee=function(e){return r.a.createElement("div",null,r.a.createElement(me,e),e.users.map((function(t){return r.a.createElement(he,{user:t,followingProgress:e.followingProgress,following:e.following})})))},ve=n(131),be=n.n(ve),Oe=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:be.a}))},_e=n(132),Pe=Object(_e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),je=function(e){return e.usersPage.pageSize},Se=function(e){return e.usersPage.totalUsersCount},we=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.isFetching},ye=function(e){return e.usersPage.followingProgress},ke=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.pageSize;e.props.setUsersCreator(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.setUsersCreator(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Oe,null):null,r.a.createElement(Ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingProgress:this.props.followingProgress,following:this.props.following}))}}]),n}(r.a.Component),Ne=Object(R.d)(Object(D.b)((function(e){return{users:Pe(e),pageSize:je(e),totalUsersCount:Se(e),currentPage:we(e),isFetching:Ce(e),followingProgress:ye(e)}}),{setUsersCreator:function(e,t){return function(){var n=Object(J.a)(B.a.mark((function n(a){var r;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(oe(e)),a(ce(!0)),n.next=4,Y(e,t);case 4:r=n.sent,a(ce(!1)),a({type:"users/SET_USERS",users:r.items}),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},following:function(e,t){return function(){var n=Object(J.a)(B.a.mark((function n(a){return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ie(!0,e)),n.next=3,V(e,t);case 3:0===n.sent.resultCode&&a(re(e)),a(ie(!1,e));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ke),Te=n(54),xe=n(44),Ie=n.n(xe),Ue=function(e){var t=Object(a.useState)(!1),n=Object(Te.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(e.status),u=Object(Te.a)(i,2),s=u[0],l=u[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"No status(((")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),e.updateStatus(s)},value:s})))},Ae=Object(w.a)({form:"profileInfo"})((function(e){var t=e.handleSubmit,n=e.userProfile,a=e.error,o=N("input"),c=N("textarea");return r.a.createElement("form",{className:Ie.a.deckriptionBlock,onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",null,"Save")),a&&r.a.createElement("div",{className:k.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("b",null,"Name:"),T("Your name",[],o,"fullName")),r.a.createElement("div",null,r.a.createElement("b",null,"Looking or a job:"),T("",[],o,"lookingForAJob",{},"","checkbox")),r.a.createElement("div",null,r.a.createElement("b",null,"Skills:")," ",T("Your skills",[],c,"lookingForAJobDescription")),r.a.createElement("div",null,r.a.createElement("b",null,"About me:")," ",T("Tell about you",[],c,"aboutMe")),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts:")," ",Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("b",null,e)," ",T("Your ".concat(e,":"),[],o,"contacts.".concat(e)))}))))})),Le=function(e){var t=e.userProfile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",{className:Ie.a.deckriptionBlock},n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"Edit")),r.a.createElement("div",null,r.a.createElement("div",null,t.fullName)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking or a job:")," ",t.lookingForAJob?"yes":"no"),r.a.createElement("div",null,r.a.createElement("b",null,"Skills:")," ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me:")," ",t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts:")," ",Object.keys(t.contacts).map((function(e){return r.a.createElement(Fe,{key:e,contactTitle:e,contaktInfo:t.contacts[e]})}))))},Fe=function(e){var t=e.contactTitle,n=e.contactInfo;return r.a.createElement("div",{className:Ie.a.contact},r.a.createElement("b",null,"".concat(t,": ").concat(n||"no")))},Me=function(e){var t=e.userProfile,n=e.status,o=e.updateStatus,c=e.isOwner,i=e.addMainPhoto,u=e.saveProfile,s=(e.getUserProfile,Object(a.useState)(!1)),l=Object(Te.a)(s,2),m=l[0],f=l[1];if(!t)return r.a.createElement(Oe,null);return r.a.createElement("div",null,r.a.createElement("img",{className:Ie.a.userPic,src:t.photos.small||ge.a}),c&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}}),r.a.createElement(Ue,{status:n,updateStatus:o}),m?r.a.createElement(Ae,{initialValues:t,onSubmit:function(e){u(e).then((function(){f(!1)}))},userProfile:t}):r.a.createElement(Le,{userProfile:t,isOwner:c,goToEditMode:function(){f(!0)}}))},De=n(66),ze=n(21),Re="profile/ADD-POST",Ge="profile/DEL-POST",He={posts:[{id:1,message:"Hi! how are you",likesCount:4},{id:2,message:"It's my first post.",likesCount:18}],userProfile:null,status:""},Be=function(e){return{type:"profile/SET_STATUS",status:e}},Je=function(e){return function(){var t=Object(J.a)(B.a.mark((function t(n){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",userProfile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:var n={id:3,message:t.text,likesCount:1};return Object(E.a)(Object(E.a)({},e),{},{posts:[].concat(Object(h.a)(e.posts),[n])});case Ge:return Object(E.a)(Object(E.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postID}))});case"profile/SET_USER_PROFILE":return Object(E.a)(Object(E.a)({},e),{},{userProfile:t.userProfile});case"profile/SET_STATUS":return Object(E.a)(Object(E.a)({},e),{},{status:t.status});case"profile/SET_MAIN_PHOTO":return Object(E.a)(Object(E.a)({},e),{},{userProfile:Object(E.a)(Object(E.a)({},e.userProfile),{},{photos:t.photos})});default:return e}},Ye=n(133),Ve=n.n(Ye),Ze=n(134),qe=n.n(Ze),Xe=function(e){return r.a.createElement("div",{className:qe.a.item},r.a.createElement("img",{src:"https://5koleso.ru/wp-content/uploads/2020/01/mercedes-benz-vision_avtr_concept-2020-1280-03-1024x768.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("button",null,"Like")," ",e.likesCount))},Ke=I(10),Qe=N("textarea"),$e=Object(w.a)({form:"post"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Your post",component:Qe,name:"text",validate:[x,Ke]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),et=function(e){return r.a.createElement("div",null,r.a.createElement($e,{onSubmit:function(t){e.addPost(t.text)}}))},tt=r.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return r.a.createElement(Xe,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Ve.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(et,e),t)})),nt=Object(D.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:Re,text:e}}(t))}}}))(tt),at=function(e){return r.a.createElement("div",null,r.a.createElement(Me,{userProfile:e.userProfile,addMainPhoto:e.addMainPhoto,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,saveProfile:e.saveProfile}),r.a.createElement(nt,null))},rt=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){e.match.params.userId!==this.props.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(at,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,userProfile:this.props.userProfile,status:this.props.status,updateStatus:this.props.updateStatus,addMainPhoto:this.props.addMainPhoto}))}}]),n}(r.a.Component),ot=Object(R.d)(Object(D.b)((function(e){return{userProfile:e.profilePage.userProfile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:Je,getStatus:function(e){return function(){var t=Object(J.a)(B.a.mark((function t(n){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(e);case 2:a=t.sent,n(Be(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(J.a)(B.a.mark((function t(n){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:0===t.sent.resultCode&&n(Be(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addMainPhoto:function(e){return function(){var t=Object(J.a)(B.a.mark((function t(n){var a;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(e);case 2:0===(a=t.sent).resultCode&&n({type:"profile/SET_MAIN_PHOTO",photos:a.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(J.a)(B.a.mark((function t(n,a){var r,o,c,i,u;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,$(e);case 3:if(o=t.sent,c=o.messages.length>0?o.messages[0]:"Some error",i=function(e){var t=e.indexOf("Contacts->");if(t>=0)return e.substring(t+10,e.length-1).toLowerCase()},0!==o.resultCode){t.next=10;break}n(Je(r)),t.next=13;break;case 10:return u=i(c),n(Object(ze.a)("profileInfo",{contacts:Object(De.a)({},u,"".concat(u," contact is incorrect"))})),t.abrupt("return",Promise.reject(c));case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),g.f)(rt),ct=n(93),it=n.n(ct),ut=function(e){return r.a.createElement("header",{className:it.a.header},r.a.createElement("img",{src:"https://s2.logaster.com/static/v3/img/products/logo.png"}),r.a.createElement("div",{className:it.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Logout")):r.a.createElement(p.b,{to:"/login"},"Login")))},st={id:null,email:null,login:null,isAuth:!1,isFetching:!1,captchaUrl:null},lt=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},mt=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ft=function(){return function(){var e=Object(J.a)(B.a.mark((function e(t){var n,a,r,o,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.email,c=a.login,t(lt(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pt=function(){return function(){var e=Object(J.a)(B.a.mark((function e(t){var n,a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:n=e.sent,a=n.url,t(mt(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},gt=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(ut,this.props)}}]),n}(r.a.Component),ht=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(J.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:0===e.sent.resultCode&&t(lt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(gt),Et=N("input"),vt=I(20),bt=Object(w.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},T("Email",[x,vt],Et,"email"),T("Password",[x,vt],Et,"password",{},"","password"),T(null,[],Et,"rememberMe",{},"Remember me","checkbox"),a&&r.a.createElement("img",{src:a}),a&&T("Symbols",[x],Et,"captcha"),n&&r.a.createElement("div",{className:k.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ot=Object(D.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(J.a)(B.a.mark((function r(o){var c,i;return B.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q(e,t,n,a);case 2:0===(c=r.sent).resultCode?o(ft()):(10===c.resultCode&&o(pt()),i=c.messages.length>0?c.messages[0]:"Some error",o(Object(ze.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(bt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),_t={initialized:!1},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},jt=n(135),St=n(127),wt=Object(R.c)({profilePage:We,dialogsPage:b,usersPage:ue,auth:dt,form:St.a,app:Pt}),Ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,yt=Object(R.e)(wt,Ct(Object(R.a)(jt.a)));window.store=yt;var kt=yt,Nt=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(Oe,null)},r.a.createElement(e,t))}},Tt=r.a.lazy((function(){return n.e(3).then(n.bind(null,291))})),xt=r.a.lazy((function(){return n.e(4).then(n.bind(null,292))})),It=r.a.lazy((function(){return n.e(5).then(n.bind(null,293))})),Ut=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ht,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ot,null)}}),r.a.createElement(g.b,{path:"/dialogs",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(Ot,null)}}),r.a.createElement(g.b,{path:"/news",render:Nt(Tt)}),r.a.createElement(g.b,{path:"/setting",render:Nt(xt)}),r.a.createElement(g.b,{path:"/videos",render:Nt(It)}))):r.a.createElement(Oe,null)}}]),n}(r.a.Component),At=Object(R.d)(g.f,Object(D.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ft());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(Ut),Lt=function(e){return r.a.createElement(p.a,null,r.a.createElement(D.a,{store:kt},r.a.createElement(At,null)))};c.a.render(r.a.createElement(Lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__105iv",dialogsItems:"Dialogs_dialogsItems__20dui",dialog:"Dialogs_dialog__Y1nJ0",active:"Dialogs_active__3xY94",messages:"Dialogs_messages__2l-jP",message:"Dialogs_message__1a79Z"}},37:function(e,t,n){e.exports={formControl:"FormsControl_formControl__2jLRp",error:"FormsControl_error__3u6HW",formSummaryError:"FormsControl_formSummaryError__1JgOO"}},44:function(e,t,n){e.exports={imgHead:"ProfileInfo_imgHead__303V_",deckriptionBlock:"ProfileInfo_deckriptionBlock__B2adT",userPic:"ProfileInfo_userPic__sAHHu",contact:"ProfileInfo_contact__226_3"}},68:function(e,t,n){e.exports=n.p+"static/media/user.70914ad2.png"},70:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2bZmv",allPages:"Paginator_allPages__2wRSW",paginatorComment:"Paginator_paginatorComment__1qDqB"}},93:function(e,t,n){e.exports={header:"Header_header__XMb0Z",loginBlock:"Header_loginBlock__2EoEo"}},95:function(e,t,n){}},[[162,1,2]]]);
//# sourceMappingURL=main.5355b316.chunk.js.map