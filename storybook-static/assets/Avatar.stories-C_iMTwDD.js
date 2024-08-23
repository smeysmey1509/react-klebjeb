import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";const u=({src:e="",alt:m="Avatar",size:s=50,shape:f="circle",fallback:v="A",object:g="cover"})=>{const h={width:`${s}px`,height:`${s}px`,borderRadius:f==="circle"?"50%":"0%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#e0e0e0",fontSize:`${s/2}px`,color:"#555",overflow:"hidden"};return t.jsx("div",{style:h,children:e?t.jsx("img",{src:e,alt:m,style:{width:"100%",height:"100%",objectFit:g}}):v})},o=u;u.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Avatar"',computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"50",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'}]},description:"",defaultValue:{value:'"circle"',computed:!1}},fallback:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"A"',computed:!1}},object:{defaultValue:{value:'"cover"',computed:!1},required:!1}}};const j={title:"Components/Avatar",tags:["autodocs"],component:o,argTypes:{src:{control:"text"},alt:{control:"text"},size:{control:{type:"number",min:50,max:200}},shape:{control:{type:"radio",options:["circle","square"]}},fallback:{control:"text"},object:{control:"text"},status:{control:"boolean"}}},a={args:{src:"https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",alt:"Avatarrrr",size:210,shape:"circle",fallback:"sze",object:"cover"},render:e=>t.jsx(o,{...e})},r={args:{src:"https://media.suara.com/pictures/970x544/2024/03/30/64518-onic-kairi.jpg",alt:"kairi",size:230,shape:"circle",fallback:"kairi",object:"cover"},render:e=>t.jsx(o,{...e})};var c,n,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: "https://cdn.oneesports.id/cdn-data/sites/2/2024/01/404190197_741995521203885_4533792470800801052_n.jpg",
    alt: "Avatarrrr",
    size: 210,
    shape: "circle",
    fallback: "sze",
    object: "cover"
  },
  render: (args: AvatarProps) => <Avatar {...args} />
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: "https://media.suara.com/pictures/970x544/2024/03/30/64518-onic-kairi.jpg",
    alt: "kairi",
    size: 230,
    shape: "circle",
    fallback: "kairi",
    object: "cover"
  },
  render: (args: AvatarProps) => <Avatar {...args} />
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const A=["Sze","Kairi"];export{r as Kairi,a as Sze,A as __namedExportsOrder,j as default};
