(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{180:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));n(186);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),s=n(16),l=n.n(s),c=n(21),u=n.n(c),d=n(17),p=n.n(d),f=n(18),h=n.n(f),m=n(8),g=n.n(m),b=n(5),y=n(24),w=n(118),x=n(58),I=n(359),v=n(66),E=n.n(v);n(198);n(130);E.a.initializeApp({apiKey:"AIzaSyDsxck7-EOJm0aGzNBIlfwziZdZGakHwN8",authDomain:"projects-39240.firebaseapp.com",databaseURL:"https://projects-39240.firebaseio.com",projectId:"projects-39240",storageBucket:"projects-39240.appspot.com",messagingSenderId:"736850757409",appId:"1:736850757409:web:7e1e25893d8d68de0b6060"});E.a.firestore(),n(67),n(360);var R=n(4).a.create({container:{flex:1,backgroundColor:"#DDFFE0",alignItems:"center",justifyContent:"center",padding:10},HomeImage:{width:220,height:156,resizeMode:"contain"},HomeHeading:{fontStyle:"normal",fontWeight:"normal",fontSize:30,textAlign:"center",color:"#FFAA00",width:100},TextInput:{width:200,borderWidth:2,borderColor:"#2F2E41",borderStyle:"solid",shadowOffset:{width:0,height:4},shadowRadius:4,shadowColor:"rgba(0, 0, 0, 0.25)",shadowOpacity:1},textInput:{height:40,paddingLeft:6,width:200,fontSize:30},button:{width:203,height:39,borderWidth:2,margin:5,marginTop:10,borderColor:"#FFAA00",borderStyle:"solid",boxSizing:"border-box",borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,borderBottomLeftRadius:20,alignItems:"center"},buttonText:{width:81,height:39,fontFamily:"Roboto",fontStyle:"normal",fontWeight:"500",fontSize:20,lineHeight:23,display:"flex",alignItems:"center",textAlign:"center",color:"#FFAA00"}});function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=g()(t);if(e){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var A=function(t){p()(a,t);var e=S(a);function a(t){var n;return l()(this,a),(n=e.call(this,t)).LogIn=function(t,e){return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(n.state,t,e),a.next=3,i.a.awrap(E.a.auth().signInWithEmailAndPassword(t,e).then((function(t){return alert("Logged In",t)})).catch((function(t){t.code;var e=t.message;return console.log(t),alert(e)})));case 3:case"end":return a.stop()}}),null,null,null,Promise)},n.state={input_email:"test@abc.com",input_password:"123456"},n}return u()(a,[{key:"render",value:function(){var t=this;return r.a.createElement(b.a,{style:R.container},r.a.createElement(x.a,{source:n(326),style:R.HomeImage}),r.a.createElement(y.a,{style:R.HomeHeading},"Barter"),r.a.createElement(I.a,{id:"email Input",label:"Email",defaultValue:this.state.input_email,onChange:function(e){var n=e.target.value;t.setState({input_email:n})},helperText:""}),r.a.createElement(I.a,{id:"password input",label:"Password",defaultValue:"",helperText:"",defaultValue:this.state.input_password,onChange:function(e){var n=e.target.value;t.setState({input_password:n})},type:"password"}),r.a.createElement(b.a,{style:{marginVertical:10}},r.a.createElement(w.a,{style:R.button,onPress:function(){t.LogIn(t.state.input_email,t.state.input_password)}},r.a.createElement(y.a,{style:R.buttonText},"Log In")),r.a.createElement(w.a,{style:R.button},r.a.createElement(y.a,{style:R.buttonText},"Sign Up"))))}}]),a}(a.Component);function F(){return r.a.createElement(A,null)}},185:function(t,e,n){t.exports=n(328)},326:function(t,e,n){t.exports=n.p+"static/media/splashhome.4ad830b7.svg"}},[[185,1,2]]]);
//# sourceMappingURL=app.bb72a658.chunk.js.map