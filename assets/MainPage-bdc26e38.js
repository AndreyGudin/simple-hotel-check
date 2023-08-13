import{j as e,r as n,u as j,a as c,b as x,g as B,h as P,l as w}from"./index-67331bef.js";import{u as N,T as p,a as C,B as F,b as R,c as O,I,d as D}from"./Input-324f7abb.js";const y=t=>({city:t.hotels.city,checkIn:t.hotels.checkIn,count:t.hotels.count}),_=t=>t.hotels.values,M=t=>t.hotels.isLoading,q=({className:t="",active:r=!1,onClick:o})=>{const a=()=>{console.log("click"),o()};return e("svg",{className:`${t} cursor-pointer w-[23px] h-[20px]`,onClick:a,width:"23",height:"20",viewBox:"0 0 23 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z",fill:r?"#E55858":"white",stroke:"#C4C4C4",strokeLinecap:"round",strokeLinejoin:"round"})})},H=t=>t.favorite.liked,V=t=>t.favorite.sortType,Z=n.memo(({className:t=""})=>{const r=N(),o=n.useCallback(()=>{r(j.logout())},[r]);return c("nav",{className:`${t} flex justify-between p-8`,children:[e(p,{text:"Simple Hotel Check",size:C.VeryBig}),e(F,{theme:R.CLEAR,onClick:o,children:"Выйти"})]})}),A=(t,r)=>{const o=new Date(t),a=o.getDate()+parseInt(r,10),s=o.getMonth(),i=o.getFullYear();return new Date(i,s,a).toISOString().split("T")[0]},U=({className:t=""})=>{const{register:r,handleSubmit:o,formState:{errors:a}}=O({mode:"onChange",defaultValues:{city:"Москва",checkIn:new Date().toUTCString(),count:"1"}}),s=N(),i=x(y),d=({checkIn:h,count:l,city:u})=>{const m=A(h,l);s(B(u,h,m)),s(P.book({checkIn:h,count:l,city:u}))};return n.useEffect(()=>{const h=A(i.checkIn,i.count);s(B(i.city,i.checkIn,h))},[]),e("div",{className:"w-[360px] h-[410px] bg-white rounded-2xl p-8 flex flex-col gap-8",children:c("form",{onSubmit:o(d),className:"flex flex-col gap-4",children:[e(I,{title:"Локация",titleTheme:D.BOLD_TITLE,...r("city",{required:!0})}),a.city&&e("span",{children:"This field is required"}),e(I,{title:"Дата заселения",type:"date",titleTheme:D.BOLD_TITLE,...r("checkIn",{required:!0})}),a.checkIn&&e("span",{children:"This field is required"}),e(I,{title:"Количество дней",type:"number",titleTheme:D.BOLD_TITLE,...r("count",{required:!0})}),a.count&&e("span",{children:"This field is required"}),e(F,{type:"submit",children:"Найти"})]})})},L=({className:t="",data:r,stars:o})=>c("svg",{className:`${t} cursor-pointer`,width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z",fill:"#6C6845"}),e("path",{d:"M7.65985 2.01554C7.19357 3.13037 6.62617 4.48735 6.39865 5.03221C6.17254 5.57559 5.98153 6.02595 5.98153 6.02595C5.98153 6.02595 5.54896 6.06287 5.0237 6.10273C4.49984 6.1426 3.54342 6.21495 2.89878 6.26368C2.25413 6.31388 1.37214 6.38033 0.939574 6.41282C0.507005 6.4453 0.117973 6.47631 0.0758401 6.48074L0 6.4896L0.0688178 6.559C0.108142 6.59591 0.540712 7.00197 1.02946 7.46119C1.51961 7.92041 2.16144 8.52138 2.45638 8.7975C4.23581 10.466 4.64731 10.8514 4.66416 10.8647C4.68804 10.8839 4.76809 10.5281 3.90295 14.2092C3.54342 15.7389 3.2527 16.9999 3.2527 16.9999C3.2527 16.9999 4.47316 16.2631 5.96047 15.3506C7.44637 14.4381 8.67245 13.6939 8.68509 13.6968C8.69633 13.6998 9.24406 14.0541 9.89994 14.4824C10.5572 14.912 11.5361 15.5514 12.0768 15.9043C12.6175 16.2572 13.2158 16.6485 13.4068 16.7725C13.5964 16.8981 13.7622 16.9999 13.7622 16.9999C13.7622 16.9999 13.7678 16.9748 13.7622 16.9438C13.7537 16.8936 13.1849 14.1427 12.6723 11.6754C12.5501 11.0818 12.449 10.5856 12.449 10.5724C12.449 10.5532 13.3605 9.74104 16.6581 6.81888C17.0205 6.49846 17.0247 6.49403 16.9811 6.48369C16.9559 6.47779 15.5613 6.33013 13.8815 6.15441C12.2018 5.9787 10.8142 5.82957 10.7974 5.82218C10.7763 5.81332 10.7103 5.65828 10.5179 5.16362C10.3803 4.80629 9.93926 3.66784 9.53899 2.63276C9.13873 1.59767 8.74689 0.583254 8.66824 0.380962C8.58959 0.177193 8.52218 0.00738525 8.51656 1.90735e-06C8.51234 -0.00590515 8.12612 0.900721 7.65985 2.01554Z",fill:+r<=o?"#CDBC1E":"white",fillOpacity:"0.6","data-rating":r})]}),X=({className:t="",stars:r})=>c("div",{className:`${t} flex gap-1`,children:[e(L,{data:"1",stars:r}),e(L,{data:"2",stars:r}),e(L,{data:"3",stars:r}),e(L,{data:"4",stars:r}),e(L,{data:"5",stars:r})]}),Y=t=>n.createElement("svg",{width:35,height:35,viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},n.createElement("g",{clipPath:"url(#clip0_6_124)"},n.createElement("path",{d:"M15.9359 1.33499C15.1648 2.06053 12.0586 4.98008 9.03711 7.82127C6.01289 10.6596 3.11719 13.3847 2.59766 13.8722C2.07812 14.3598 1.33984 15.0534 0.957031 15.4104C0.574219 15.7702 0.202344 16.1214 0.13125 16.1939L0 16.3245L0.902344 17.3983C1.39727 17.9875 1.82109 18.4692 1.84023 18.4692C1.86211 18.4663 3.48906 16.9572 5.45781 15.1143C15.7883 5.44442 17.4562 3.88887 17.4754 3.89468C17.4863 3.90048 18.7605 5.09326 20.3082 6.54723C21.8531 8.0012 25.3449 11.2806 28.0629 13.8374C30.7809 16.3942 33.0176 18.4866 33.0312 18.4866C33.0449 18.4866 33.0641 18.4721 33.0723 18.4576C33.0859 18.4344 33.1023 18.4373 33.1297 18.4605C33.1816 18.504 33.1023 18.5911 34.0566 17.4419C34.475 16.9398 34.8578 16.4813 34.9098 16.4232L35.0027 16.3187L32.7113 14.1741C31.4508 12.9929 28.4895 10.2184 26.127 8.00991C23.7672 5.79848 20.8797 3.09659 19.7094 2.00248L17.5875 0.0145168H17.4645H17.3414L15.9359 1.33499Z",fill:"#41522E"}),n.createElement("path",{d:"M15.6051 8.00708C14.6098 8.94157 11.859 11.5274 9.49375 13.7504L5.19531 17.7931L5.20078 26.1281L5.20898 34.4631L5.26914 34.5821C5.30195 34.6489 5.38125 34.7504 5.44414 34.8056C5.67109 35.0145 5.37852 35 9.7125 35H13.6172L13.6227 31.3056C13.6309 27.6315 13.6309 27.614 13.6883 27.4834C13.7594 27.3151 13.8961 27.17 14.0547 27.0946C14.1777 27.0336 14.1969 27.0336 17.4016 27.0249C20.9672 27.0162 20.8141 27.0104 21.0164 27.199C21.1586 27.3325 21.2379 27.4805 21.2707 27.6721C21.2926 27.7882 21.3008 28.9897 21.3008 31.4217V35L25.3586 34.9942L29.4191 34.9855L29.5012 34.9014C29.5477 34.8549 29.6242 34.7185 29.6734 34.5966L29.7637 34.3761L29.7691 26.0759L29.7746 17.7757L23.6496 12.044C20.177 8.79356 17.5 6.30932 17.4699 6.30932C17.4344 6.30642 16.7945 6.88975 15.6051 8.00708Z",fill:"#41522E"})),n.createElement("defs",null,n.createElement("clipPath",{id:"clip0_6_124"},n.createElement("rect",{width:35,height:35,fill:"white"})))),z=({className:t="",liked:r=!1,path:o="",displayImage:a=!1,title:s,stars:i,bookingDate:d,bookingCount:h,price:l,onLiked:u=()=>{}})=>{const m=new Date(d),g=new Intl.DateTimeFormat("ru",{day:"numeric",month:"long",year:"numeric"}),v=new Intl.NumberFormat("ru"),E=g.format(m),S=v.format(parseInt(l,10)),f=a?"":"inline-block overflow-hidden whitespace-nowrap max-w-[267px]";return c("div",{className:`${t} flex gap-6 items-center border-b border-[#878787]/5 py-4 pr-4`,children:[a?o.length>0?e("div",{className:"w-[64px] h-[64px] rounded-full bg-[#41522E]/10 flex items-center justify-center",children:e("img",{src:o,alt:""})}):e("div",{className:"w-[64px] h-[64px] rounded-full bg-[#41522E]/10 flex items-center justify-center",children:e(Y,{})}):null,c("div",{className:"flex-grow",children:[c("div",{className:"flex justify-between",children:[e(p,{text:s,className:`text-ellipsis ${f}`}),e(q,{onClick:()=>u(),active:r})]}),c("div",{children:[e(p,{text:E,size:C.Light}),e(p,{text:" - ",size:C.Light}),e(p,{text:`${h} день`,size:C.Light})]}),e("div",{children:c("div",{className:"flex gap-2 justify-between mt-[5px]",children:[e(X,{stars:i}),c("div",{className:"flex gap-6 items-center",children:[e(p,{text:"Price",size:C.Small}),e(p,{text:`${S} ₽`,size:C.Normal,className:"font-medium"})]})]})})]})]})},$=({className:t="",onSort:r=()=>{},text:o,active:a=!1})=>{const[s,i]=n.useState(!0),d="border-[#41522E] border rounded w-fit px-2 py-1 text-[#41522E] flex items-center gap-[9px] cursor-pointer",h="border-[#E5E5E5] border rounded w-fit px-2 py-1 text-[#99A0A3] flex items-center gap-[9px] cursor-pointer",l=a&&s?"after:border-[#41522E]":"after:border-[#41522E]/30",u=a?s?"before:border-[#41522E]/30":"before:border-[#41522E]":"before:border-[#41522E]/30",m=a?d:h,g=()=>{r(s?"desc":"asc"),i(v=>!v)};return n.useEffect(()=>{a||i(!0)},[a]),c("div",{className:`${t} ${m}`,onClick:g,children:[o,e("div",{className:`before:block before:w-[8px] before:h-[8px] before:border-l-[2px] before:border-t-[2px] ${u} before:rotate-45 after:block after:w-[8px] after:h-[8px] after:border-r-[2px] after:border-b-[2px] ${l} after:rotate-45`})]})};var k=(t=>(t.RATE="rate",t.PRICE="price",t))(k||{});const G=({className:t=""})=>{const r=x(H),o=N(),a=x(y),s=x(V),i=(l,u,m)=>{o(w.add({hotel:l,bookingDate:u,bookingCount:m}))},d=n.useCallback(l=>{o(w.sortByRate(l)),o(w.setSortType(k.RATE))},[o]),h=n.useCallback(l=>{o(w.sortByPrice(l)),o(w.setSortType(k.PRICE))},[o]);return c("div",{className:"w-[360px] h-[472px] flex flex-col p-8 gap-8 bg-white rounded-2xl",children:[e(p,{text:"Избранное",size:C.Big}),c("div",{className:"flex gap-2",children:[e($,{text:"Рейтинг",onSort:d,active:s===k.RATE}),e($,{text:"Цена",onSort:h,active:s===k.PRICE})]}),e("div",{className:"overflow-auto flex-grow scrollbar",children:r.map(l=>e(z,{title:l.hotel.hotelName,bookingCount:l.bookingCount,bookingDate:l.bookingDate,price:l.hotel.priceAvg.toString(),stars:l.hotel.stars,liked:!0,onLiked:()=>{i(l.hotel,a.checkIn,a.count)}},l.hotel.hotelName))})]})},J=({className:t="",children:r})=>{const[o,a]=n.useState(4),[s,i]=n.useState(n.Children.count(r)),[d,h]=n.useState(n.Children.count(r)>4),[l,u]=n.useState(!0);n.useEffect(()=>{i(n.Children.count(r)),h(n.Children.count(r)>4)},[r]),n.useEffect(()=>{d&&(o===4||o===s)&&u(!0)},[o,d,s]);const m=()=>{(d||o<s-4)&&a(f=>f+1)},g=()=>{(d||o>0)&&a(f=>f-1)},v=()=>{d&&(o<=0?(u(!1),a(s)):o>=s+4&&(u(!1),a(4)))},E=()=>{const f=[],T=n.Children.toArray(r);for(let b=0;b<4;b++)f.push(T[s-1-b]);return f.reverse(),f},S=()=>{const f=[],T=n.Children.toArray(r);for(let b=0;b<4;b++)f.push(T[b]);return f};return e("div",{className:"w-full flex flex-col",children:e("div",{className:"w-full flex relative",children:c("div",{className:"overflow-hidden w-full h-full",children:[e("button",{onClick:g,className:"absolute z-[1] top-1/2 -translate-y-1/2 rotate-45 w-[36px] h-[36px] border-l-4 border-b-4 border-solid border-red-600 left-6"}),c("div",{className:"carousel-content show-4 flex gap-1 transition-all duration-300",style:{transform:`translateX(-${o*25.35}%)`,transition:l?void 0:"none"},onTransitionEnd:()=>v(),children:[s>4&&d&&E(),r,s>4&&d&&S()]}),e("button",{onClick:m,className:"absolute z-[1] top-1/2 -translate-y-1/2 rotate-45 w-[36px] h-[36px] border-t-4 border-r-4 border-solid border-red-600 right-6"})]})})})},K=({className:t=""})=>{const r=x(y),o=r.checkIn?new Date(r.checkIn):new Date,s=new Intl.DateTimeFormat("ru",{day:"numeric",month:"long",year:"numeric"}).format(o);return c("div",{className:`${t} flex items-center justify-between`,children:[c("div",{className:"flex gap-5 items-center",children:[e(p,{text:"Отели",size:C.VeryBig}),e("div",{className:"rotate-45 w-[12px] h-[12px] border-t-4 border-r-4 border-solid border-[#A7A7A7]"}),e(p,{text:r.city,size:C.VeryBig})]}),e(p,{text:s??"",size:C.Big})]})},Q=n.memo(({className:t=""})=>e("div",{className:`${t} w-full h-full flex justify-center items-center`,children:e("div",{className:"inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:e("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})),W=({className:t=""})=>{const r=x(_),o=x(H),a=N(),s=x(y),i=x(M),d=(l,u,m)=>{a(w.add({hotel:l,bookingDate:u,bookingCount:m}))},h=l=>[...o].findIndex(g=>g.hotel.hotelName===l)>-1;return c("div",{className:"w-[664px] h-[902px] px-7 py-8 flex flex-col bg-white gap-7 rounded-2xl",children:[e(K,{}),c(J,{children:[e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"}),e("img",{src:"https://placehold.co/300x200",alt:"placeholder"})]}),c("div",{children:[e(p,{text:"Добавлено в избранное: "}),e(p,{text:`${o.length}`,className:"font-medium"}),e(p,{text:" отеля"})]}),e("div",{className:"w-full h-full flex flex-col gap-3 overflow-auto scrollbar",children:i?e(Q,{}):r.map(l=>e(z,{stars:l.stars,title:l.hotelName,bookingDate:s.checkIn,bookingCount:s.count,price:l.priceAvg.toString(),displayImage:!0,liked:h(l.hotelName),onLiked:()=>d(l,s.checkIn,s.count)},l.hotelId))})]})},re=({className:t=""})=>c("div",{className:`${t} bg-[#F4F4F4] min-h-screen flex flex-col `,children:[e(Z,{}),c("div",{className:"flex gap-6 flex-wrap justify-center",children:[c("div",{className:"flex flex-col gap-6",children:[e(U,{}),e(G,{})]}),e(W,{})]})]});export{re as default};
