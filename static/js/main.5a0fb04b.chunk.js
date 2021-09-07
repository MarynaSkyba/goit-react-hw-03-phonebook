(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var a,r,o,i,c,s,l,d,b,u,p,h=e(1),x=e.n(h),m=e(9),f=e.n(m),j=(e(19),e(12)),g=e(4),O=e(5),y=e(7),k=e(6),v=e(25),w=e(2),C=e(3),S=C.a.button(a||(a=Object(w.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"]))),z=C.a.ul(r||(r=Object(w.a)(["\n  list-style: none;\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),A=C.a.p(o||(o=Object(w.a)(["\n  display: block;\n  padding: 0 15px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n"]))),I=C.a.li(i||(i=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  border-radius: 20px;\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.2);\n"]))),B=e(0),R=function(n){var t=n.contacts,e=n.onDeleteContacts;return Object(B.jsx)(z,{children:t.map((function(n){var t=n.id,a=n.name,r=n.number;return Object(B.jsxs)(I,{children:[Object(B.jsxs)(A,{children:[a," : ",r]}),Object(B.jsx)(S,{onClick:function(){return e(t)},children:"Delete"})]},t)}))})},D=e(11),L=C.a.form(c||(c=Object(w.a)(["\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),N=C.a.label(s||(s=Object(w.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  font-size: 14px;\n"]))),F=C.a.input(l||(l=Object(w.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),J=C.a.button(d||(d=Object(w.a)(["\n  display: block;\n  width: 103%;\n  margin: 40px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"]))),q=function(n){Object(y.a)(e,n);var t=Object(k.a)(e);function e(){var n;Object(g.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.nameId=Object(v.a)(),n.telId=Object(v.a)(),n.handleNameChange=function(t){var e=t.currentTarget,a=e.name,r=e.value;n.setState(Object(D.a)({},a,r))},n.handleSubmit=function(t){var e=n.state,a=e.name,r=e.number;t.preventDefault(),n.props.onSubmit(a,r),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(O.a)(e,[{key:"render",value:function(){return Object(B.jsxs)(L,{onSubmit:this.handleSubmit,children:[Object(B.jsxs)(N,{htmlFor:this.nameId,children:["Name",Object(B.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameId,value:this.state.name,onChange:this.handleNameChange})]}),Object(B.jsxs)(N,{htmlFor:this.telId,children:["Telephone",Object(B.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.telId,value:this.state.number,onChange:this.handleNameChange})]}),Object(B.jsx)(J,{type:"submit",children:"Add to contacts"})]})}}]),e}(h.Component),T=C.a.label(b||(b=Object(w.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n"]))),H=C.a.input(u||(u=Object(w.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),M=function(n){var t=n.value,e=n.onChange,a=n.onBlur;return Object(B.jsxs)(T,{children:["Find contacts by name",Object(B.jsx)(H,{type:"text",value:t,onChange:e,onBlur:a})]})},Z=C.a.h2(p||(p=Object(w.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 34px;\n"]))),E=function(n){Object(y.a)(e,n);var t=Object(k.a)(e);function e(){var n;Object(g.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.deleteContacts=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n.formSubmitHandler=function(t,e){if(n.state.contacts.find((function(n){return n.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts!"));else{var a={id:Object(v.a)(),name:t,number:e};n.setState((function(n){var t=n.contacts;return{contacts:[a].concat(Object(j.a)(t))}}))}},n.changeFilter=function(t){n.setState({filter:t.currentTarget.value})},n.changeBlur=function(n){n.currentTarget.value=""},n.filteredContacts=function(){var t=n.state,e=t.filter;return t.contacts.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))},n}return Object(O.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),t=JSON.parse(n);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(n){this.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(Z,{children:"Phonebook"}),Object(B.jsx)(q,{onSubmit:this.formSubmitHandler}),Object(B.jsx)(Z,{children:"Contacts"}),Object(B.jsx)(M,{value:this.state.filter,onChange:this.changeFilter,onBlur:this.changeBlur}),Object(B.jsx)(R,{contacts:this.filteredContacts(),onDeleteContacts:this.deleteContacts})]})}}]),e}(h.Component);f.a.render(Object(B.jsx)(x.a.StrictMode,{children:Object(B.jsx)(E,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5a0fb04b.chunk.js.map