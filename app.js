const express = require("express");
const uuid = require('uuid').v4;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.send(`
<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="/logo192.png"/><link rel="manifest" href="/manifest.json"/><title>React App</title><link href="/static/css/main.5f361e03.chunk.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div><script>!function(e){function r(r){for(var n,l,f=r[0],i=r[1],a=r[2],c=0,s=[];c<f.length;c++)l=f[c],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&s.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,f=1;f<t.length;f++){var i=t[f];0!==o[i]&&(n=!1)}n&&(u.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={1:0},u=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/";var f=this.webpackJsonpken=this.webpackJsonpken||[],i=f.push.bind(f);f.push=r,f=f.slice();for(var a=0;a<f.length;a++)r(f[a]);var p=i;t()}([])</script><script src="/static/js/2.ef518517.chunk.js"></script><script src="/static/js/main.2c5addf9.chunk.js"></script></body></html>
    `);
});

let people = [
]

app.get('/getPersons', function(req, res) {
  res.json({
    people
  })
});

app.get('/addPerson', function(req, res) {
  const { name } = req.query;
  if (name) {
    people.push({
      name,
      id: uuid()
    })
  };
  res.json({
    people
  });
});

app.get('/addAge', function(req, res) {
  const { age, id } = req.query;
  people = people.map(p => {
    if (p.id === id) {
      p.age = age;
    }
    return p;
  });
  return res.json({
    people
  })
});

app.get('/addGender', function(req, res) {
  const { gender, id } = req.query;
  people = people.map((p) => {
    if (p.id === id) {
      p.gender = gender;
    }
    return p;
  })
  return res.json({
    people
  })
})

app.get('/updatePerson', function(req, res) {
  const { name, id } = req.query;
  people = people.map(p => {
    if (p.id === id) {
      p.name = name;
    }
    return p;
  });
  return res.json({
    people
  });
});

app.get('/updateAge', function(req, res) {
  const { age, id } = req.query;
  people = people.map(p => {
    if (p.id === id) {
      p.age = age;
    }
    return p;
  });
  return res.json({
    people
  })
})

app.get('/updateGender', function(req, res) {
  const { gender, id } = req.query;
  people = people.map(p => {
    if (p.id === id) {
      p.gender = gender;
    }
    return p;
  });
  return res.json({
    people
  });
});

app.get('/removePerson', function(req, res) {
  const { id } = req.query;
  people = people.filter(p => p.id !== id);
  return res.json({
    people
  });
});

app.listen(3000, function() {
  console.log("http://localhost:3000");
});


// 1. name, age, gender를 등록, 업데이트