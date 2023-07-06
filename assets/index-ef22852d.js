import{j as a,A as x,v as l,w as h,k as e}from"./index-bfe98f7f.js";import{f,C as w}from"./index-25b59ef1.js";/**
 *@author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 *@fileoverview Sign In functionality <hook>
 *@copyright Arkadip Bhattacharya 2020
 *@license Apache-2.0
 *
 * Copyright 2020 Arkadip Bhattacharya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var r=a.useContext(x);if(r===null)throw new l("Auth Provider is missing. Please add the AuthProvider before Router");return function(t){var s=t.token,o=t.tokenType,n=t.authState,i=t.expiresIn,u=t.refreshToken,p=t.refreshTokenExpireIn,d=new Date(new Date().getTime()+i*60*1e3);if(r.authState.isUsingRefreshToken)if(u&&p){var m=new Date(new Date().getTime()+p*60*1e3);return r.dispatch(h({auth:{token:s,type:o,expiresAt:d},userState:n||null,refresh:{token:u,expiresAt:m}})),!0}else throw new l('Make sure you given "refreshToken" and  "refreshTokenExpireIn" parameter');else{if(u&&p)throw new Error(`The app doesn't implement 'refreshToken' feature.
So you have to implement refresh token feature from 'AuthProvider' before using it.`);return r.dispatch(h({auth:{token:s,type:o,expiresAt:d},userState:n||null,refresh:null})),!0}}}const k="_password__icon_d7v4l_1",j="_password__iconWrapper_d7v4l_5",v="_password_d7v4l_1",c={password__icon:k,password__iconWrapper:j,password:v};function T(r){return!r}const g=({name:r})=>{const[t,s]=a.useReducer(T,!1);return e.jsxs("div",{className:c.password,children:[e.jsx("input",{name:r,type:t?"text":"password"}),e.jsx("span",{className:c.password__iconWrapper,onClick:s,children:e.jsxs("svg",{className:c.password__icon,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})},y="_loginForm_1ec75_1",S={loginForm:y},A=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:e.jsx("strong",{children:"Bienvenido de vuelta"})}),e.jsx("input",{name:"email",type:"text"}),e.jsx(g,{name:"password"})]});function E(){const r=a.useRef(null),t=_(),s=a.useCallback(o=>{if(o.preventDefault(),!r.current)return;const n=new FormData(r.current),i=f(n);t({token:"sdsadasd",tokenType:"Bearer",expiresIn:new Date().getTime()}),console.dir(i)},[t]);return e.jsx("form",{className:S.loginForm,onSubmit:s,ref:r,children:e.jsx(w,{cardContent:e.jsx(A,{}),cardAction:e.jsx("button",{type:"submit",children:"Sign in"})})})}export{E as default};
