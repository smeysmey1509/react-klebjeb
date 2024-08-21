import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const p=({name:s,title:m,imageUrl:f,posts:u,followers:g,following:h})=>e.jsxs("div",{className:"profile-card",children:[e.jsx("div",{className:"profile-card-header",children:e.jsx("img",{src:f,alt:`${s}'s profile picture`,className:"profile-card-image"})}),e.jsxs("div",{className:"profile-card-body",children:[e.jsx("h2",{children:s}),e.jsx("h3",{children:m}),e.jsxs("div",{className:"profile-card-stats",children:[e.jsxs("div",{children:[e.jsx("span",{className:"stat-number",children:u}),e.jsx("span",{className:"stat-label",children:"Posts"})]}),e.jsxs("div",{children:[e.jsxs("span",{className:"stat-number",children:[g,"k"]}),e.jsx("span",{className:"stat-label",children:"Followers"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-number",children:h}),e.jsx("span",{className:"stat-label",children:"Following"})]})]})]}),e.jsxs("div",{className:"profile-card-footer",children:[e.jsx("button",{className:"btn follow-btn",children:"Follow"}),e.jsx("button",{className:"btn message-btn",children:"Message"})]})]}),a=p;p.__docgenInfo={description:"",methods:[],displayName:"ProfileCard",props:{name:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},posts:{required:!0,tsType:{name:"number"},description:""},followers:{required:!0,tsType:{name:"number"},description:""},following:{required:!0,tsType:{name:"number"},description:""}}};const v={title:"Components/ProfileCard",tags:["autodocs"],component:a},r={args:{name:"John Doe",title:"Backend Developer",imageUrl:"https://via.placeholder.com/100",description:"A passionate developer who loves coding and coffee.",age:14,status:!0,posts:13,followers:154,following:3},render:s=>e.jsx(a,{...s})},o={args:{name:"Sze",title:"Frontend Developer",imageUrl:"https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",description:"A passionate developer who loves coding and coffee.",age:10,status:!0,posts:13,followers:154,following:3},render:s=>e.jsx(a,{...s})};var n,t,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    title: "Backend Developer",
    imageUrl: "https://via.placeholder.com/100",
    description: "A passionate developer who loves coding and coffee.",
    age: 14,
    status: true,
    posts: 13,
    followers: 154,
    following: 3
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "Sze",
    title: "Frontend Developer",
    imageUrl: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    description: "A passionate developer who loves coding and coffee.",
    age: 10,
    status: true,
    posts: 13,
    followers: 154,
    following: 3
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const w=["Default","Mey"];export{r as Default,o as Mey,w as __namedExportsOrder,v as default};
