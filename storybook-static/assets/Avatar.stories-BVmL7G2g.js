import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";const o=({src:e="",alt:m="Avatar",size:s=50,shape:f="circle",fallback:v="A",object:g="cover"})=>{const b={width:`${s}px`,height:`${s}px`,borderRadius:f==="circle"?"50%":"0%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#e0e0e0",fontSize:`${s/2}px`,color:"#555",overflow:"hidden"};return t.jsx("div",{style:b,children:e?t.jsx("img",{src:e,alt:m,style:{width:"100%",height:"100%",objectFit:g}}):v})};o.getDefaultAttributes=()=>({src:"",alt:"",size:50,shape:"circle",fallback:"A",object:"cover"});const c=o;o.__docgenInfo={description:"",methods:[{name:"getDefaultAttributes",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"AvatarProps"}}}],displayName:"Avatar",props:{src:{defaultValue:{value:'""',computed:!1},required:!1},alt:{defaultValue:{value:'"Avatar"',computed:!1},required:!1},size:{defaultValue:{value:"50",computed:!1},required:!1},shape:{defaultValue:{value:'"circle"',computed:!1},required:!1},fallback:{defaultValue:{value:'"A"',computed:!1},required:!1},object:{defaultValue:{value:'"cover"',computed:!1},required:!1}}};const x={title:"Components/Avatar",tags:["autodocs"],component:c,argTypes:{src:{control:"text"},alt:{control:"text"},size:{control:{type:"number",min:50,max:200}},shape:{control:{type:"radio",options:["circle","square"]}},fallback:{control:"text"},object:{control:"text"},status:{control:"boolean"}}},a={args:{src:"https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",alt:"Avatarrrr",size:210,shape:"circle",fallback:"sze",object:"cover"},render:e=>t.jsx(c,{...e})},r={args:{src:"https://media.suara.com/pictures/970x544/2024/03/30/64518-onic-kairi.jpg",alt:"kairi",size:230,shape:"circle",fallback:"kairi",object:"cover"},render:e=>t.jsx(c,{...e})};var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    alt: "Avatarrrr",
    size: 210,
    shape: "circle",
    fallback: "sze",
    object: "cover"
  },
  render: (args: AvatarProps) => <Avatar {...args} />
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: "https://media.suara.com/pictures/970x544/2024/03/30/64518-onic-kairi.jpg",
    alt: "kairi",
    size: 230,
    shape: "circle",
    fallback: "kairi",
    object: "cover"
  },
  render: (args: AvatarProps) => <Avatar {...args} />
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const A=["Sze","Kairi"];export{r as Kairi,a as Sze,A as __namedExportsOrder,x as default};
