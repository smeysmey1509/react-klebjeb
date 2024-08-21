import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const l=({name:r,title:m,imageUrl:g,description:f})=>e.jsxs("div",{className:"profile-card",children:[e.jsx("img",{src:g,alt:`${r}'s profile picture`}),e.jsx("h2",{children:r}),e.jsx("h3",{children:m}),e.jsx("p",{children:f})]}),n=l;l.__docgenInfo={description:"",methods:[],displayName:"ProfileCard",props:{name:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const v={title:"Components/ProfileCard",component:n},o={args:{name:"John Doe",title:"Frontend Developer",imageUrl:"https://via.placeholder.com/100",description:"A passionate developer who loves coding and coffee."},render:r=>e.jsx(n,{...r})},s={args:{name:"Sze",title:"Frontend Developer",imageUrl:"https://api.duniagames.co.id/api/content/upload/file/6566039981677832023.jpg",description:"A passionate developer who loves coding and coffee."},render:r=>e.jsx(n,{...r})};var a,i,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    title: "Frontend Developer",
    imageUrl: "https://via.placeholder.com/100",
    description: "A passionate developer who loves coding and coffee."
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />
}`,...(t=(i=o.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "Sze",
    title: "Frontend Developer",
    imageUrl: "https://api.duniagames.co.id/api/content/upload/file/6566039981677832023.jpg",
    description: "A passionate developer who loves coding and coffee."
  },
  render: (args: ProfileCardProps) => <ProfileCard {...args} />
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Default","Mey"];export{o as Default,s as Mey,j as __namedExportsOrder,v as default};
