(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{125:function(e,a,t){e.exports=t(208)},130:function(e,a,t){},208:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),o=t.n(r),i=(t(130),t(36)),c=t(24),s=t(30),m=t(61),d=t(209),u=t(12),p=t(212),g=t(213),E=function(){var e=window.location.hash;return e.includes("portfolio")?e.replace("/portfolio/",""):e.replace("#/","")},h=function(){return"portfolio"===window.location.pathname.replace(/\//g,"")?"/portfolio/images":"/images"},f=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2),r=t[0],o=t[1],s=Object(n.useState)(!1),E=Object(i.a)(s,2),h=E[0],f=E[1];return Object(n.useEffect)((function(){var e=function(e){o(e.target.documentElement.scrollTop)};return h||window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[r,h]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"profile-picture"},l.a.createElement(d.a,{size:125,icon:"user",src:"portfolio"===window.location.pathname.replace(/\//g,"")?"/portfolio/images/profile-picture.jpg":"/images/profile-picture.jpg"})),l.a.createElement("div",{className:"name"},l.a.createElement("span",null,"Syamsul Mohd Jafri")),l.a.createElement("div",{className:"job"},"Full Stack Software Engineer"),l.a.createElement("div",{className:"social-media"},l.a.createElement("a",{href:"https://www.linkedin.com/in/syamsul-mohd-jafri-3370a1158/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",null,l.a.createElement(u.a,{type:"linkedin"}))),l.a.createElement("a",{href:"https://github.com/syamsulmj",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",null,l.a.createElement(u.a,{type:"github"}))),l.a.createElement("a",{href:"mailto:syamsulmj94@gmail.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",null,l.a.createElement(u.a,{type:"mail"}))))),l.a.createElement("div",{className:"about-me"},l.a.createElement(p.a,{className:"custom-row"},l.a.createElement(g.a,{span:12},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"About me")),l.a.createElement("div",{className:"description"},"I am an ambitious, extra hardworking, committed and a self-taught person. I have a vast knowledge in programming skills. My specialities field are more into web development and I also have a strong base in data structure and programming algorithm."),l.a.createElement("div",{className:"title child"},l.a.createElement("span",null,"Experience")),l.a.createElement("div",{className:"description"},l.a.createElement("ul",null,l.a.createElement("li",null,"Fullstack Software Engineer at Naluri Hidup Sdn. Bhd."),l.a.createElement("li",null,"Software Engineer (Software Graphics & Media Engineer) at Intel malaysia"),l.a.createElement("li",null,"Freelance Web Developer"),l.a.createElement("li",null,"Software Internship (web maintainer) at Fave Malaysia")),l.a.createElement("div",{className:"custom-button"},l.a.createElement(c.b,{to:"/experiences",className:"btn",onClick:function(){return e.changeNavbarActive("experiences")}},"See more experiences details",l.a.createElement(u.a,{type:"double-right"}))),l.a.createElement("div",{className:"custom-button"},l.a.createElement(c.b,{to:"/projects",className:"btn",onClick:function(){return e.changeNavbarActive("projects")}},"Previous Projects",l.a.createElement(u.a,{type:"double-right"}))))),l.a.createElement(g.a,{span:12,className:"custom-col ".concat(!m.isMobile||h?null:window.scrollY>125&&!h?(f(!0),null):"vanished")},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Technology used")),l.a.createElement("div",{className:"skills"},l.a.createElement("li",null,l.a.createElement("span",{className:"skill-70"},l.a.createElement("span",{className:"range r-70"},"70%")),l.a.createElement("em",null,"Elixir")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-70"},l.a.createElement("span",{className:"range r-70"},"70%")),l.a.createElement("em",null,"Phoenix Framework")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-60"},l.a.createElement("span",{className:"range r-60"},"60%")),l.a.createElement("em",null,"PHP")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-60"},l.a.createElement("span",{className:"range r-60"},"60%")),l.a.createElement("em",null,"Laravel")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-50"},l.a.createElement("span",{className:"range r-50"},"50%")),l.a.createElement("em",null,"Javascript")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-50"},l.a.createElement("span",{className:"range r-50"},"50%")),l.a.createElement("em",null,"React.JS")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-50"},l.a.createElement("span",{className:"range r-50"},"50%")),l.a.createElement("em",null,"Shell Script")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-50"},l.a.createElement("span",{className:"range r-50"},"50%")),l.a.createElement("em",null,"Linux")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-70"},l.a.createElement("span",{className:"range r-70"},"70%")),l.a.createElement("em",null,"HTML5")),l.a.createElement("li",null,l.a.createElement("span",{className:"skill-70"},l.a.createElement("span",{className:"range r-70"},"70%")),l.a.createElement("em",null,"CSS/SASS")))))))},b=t(113),v=t.n(b),y=t(210).a.Paragraph,w=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],o=t[1],c={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,accessibility:!0,afterChange:function(e){o(!0),setTimeout((function(){o(!1)}),6e3)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"project-tools"},l.a.createElement("div",{className:"project-logo ".concat(r?"show":null)},"Tools",e.logo.map((function(e,a){return l.a.createElement("img",{src:e,alt:"project-logo-".concat(a),key:a})})))),l.a.createElement(v.a,Object.assign({className:"image-carousel ".concat(m.isMobile?"mobile":null)},c),e.slides.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("img",{src:e.image,alt:"project-".concat(a),className:"".concat(e.mobileImage?"mobile-image":null)}),l.a.createElement("div",{className:"title"},l.a.createElement("span",null,e.title)),l.a.createElement("div",{className:"description"},l.a.createElement("span",null,l.a.createElement(y,{ellipsis:{rows:3,expandable:!0}},e.description))))}))))},N=function(){var e={projects:[{rows:[{projectInfo:[{image:"".concat(h(),"/project-1/p-1.png"),mobileImage:!0,title:"Voice Recognition for Smart Home System Using Intel Usquared IoT Board",description:l.a.createElement(n.Fragment,null,"- Created an API to convert any voice command that has been received by the Micro Controller into a form of actions. The API will received the voice command and then it will find the keywords that matched with the registered device name and also the keywords for the actions whether to turning it on or off.",l.a.createElement("br",null),"- Created simple CRUD process to create new users account, new devices, edit users profiles, edit devices info, API for the the Micro controller to read new set of actions for the registered devices and deleting registered devices.",l.a.createElement("br",null),"- use Bootstrap framework for css")},{image:"".concat(h(),"/project-1/p-2.png"),mobileImage:!0,title:"Voice Recognition for Smart Home System Using Intel Usquared IoT Board",description:"Users can add new devices in this views."},{image:"".concat(h(),"/project-1/p-3.png"),mobileImage:!0,title:"Voice Recognition for Smart Home System Using Intel Usquared IoT Board",description:l.a.createElement(n.Fragment,null,"- Using Onesignal to send notifications to user mobile when the system detected a security breach.",l.a.createElement("br",null),"- User have the ability to turn on or off devices manually from the web app or from voice recognition.")},{image:"".concat(h(),"/project-1/p-4.png"),mobileImage:!0,title:"Voice Recognition for Smart Home System Using Intel Usquared IoT Board",description:"User profiles page that shows how many active devices"},{image:"".concat(h(),"/project-1/p-5.jpeg"),mobileImage:!1,title:"Voice Recognition for Smart Home System Using Intel Usquared IoT Board",description:"Project prototype"}],toolsLogo:["".concat(h(),"/laravel-logo.png"),"".concat(h(),"/onesignal-logo.png"),"".concat(h(),"/bootstrap-logo.png")]},{projectInfo:[{image:"".concat(h(),"/project-2/p-1.png"),mobileImage:!1,title:"Simple Ecommerce Website",description:l.a.createElement(n.Fragment,null,"- Create CRUD for admin panel to add new banner, new product, delete product, delete banner, update banner & products, read list of registered users & products & banner and list of ordered products from users.",l.a.createElement("br",null),"- Products are shown in card manners with a price tag and can be separated by categories.",l.a.createElement("br",null),"- User can check the product info of the product when they clicked on the product card")},{image:"".concat(h(),"/project-2/p-2.png"),mobileImage:!0,title:"Simple Ecommerce Website",description:"Mobile view"}],toolsLogo:["".concat(h(),"/laravel-logo.png"),"".concat(h(),"/onesignal-logo.png"),"".concat(h(),"/bootstrap-logo.png")]}]},{rows:[{projectInfo:[{image:"".concat(h(),"/grey-background.jpeg"),mobileImage:!1,title:"Library System",description:l.a.createElement(n.Fragment,null,"- Authentication for admin to entered the admin panel.",l.a.createElement("br",null),"- Create CRUD API to show list of books, create books, search for books by (id, title, book order number, rack position and genre), delete books and update existing books info")}],toolsLogo:["".concat(h(),"/laravel-logo.png"),"".concat(h(),"/onesignal-logo.png"),"".concat(h(),"/bootstrap-logo.png")]},{projectInfo:[{image:"".concat(h(),"/grey-background.jpeg"),mobileImage:!1,title:"Report Writing System",description:l.a.createElement(n.Fragment,null,"- Authentication for users, lecturers, and admin that have different views and access",l.a.createElement("br",null),"- Users can write new report and it will be auto generated in pdf forms and users will have an ability to directly send the link to lecturers whatsapp number",l.a.createElement("br",null),"- Lecturers have the ability to see submitted reports based on class that they are assigned to",l.a.createElement("br",null),"- Admin have the ability to assigned lecturers to which classes and create a new lecturers and students account")}],toolsLogo:["".concat(h(),"/laravel-logo.png"),"".concat(h(),"/onesignal-logo.png"),"".concat(h(),"/bootstrap-logo.png")]}]},{rows:[{projectInfo:[{image:"".concat(h(),"/grey-background.jpeg"),mobileImage:!1,title:"Shop Inventory System",description:l.a.createElement(n.Fragment,null,"- Create admin panel for admin and staff that have different access and views",l.a.createElement("br",null),"- Admin will have the ability to add new product, delete product, check list of transaction, graph of current inventory quantity with a specific amount maximum quantity that has been set and also the ability to check different data for different branch",l.a.createElement("br",null),"- Staff will have the ability to add new transaction per day and it will automatically calculate the total gross income and total income after deducted with item price.",l.a.createElement("br",null),"- Staff will also have the ability to insert the quantity of new items that they received.")}],toolsLogo:["".concat(h(),"/laravel-logo.png"),"".concat(h(),"/onesignal-logo.png"),"".concat(h(),"/bootstrap-logo.png")]},{projectInfo:[{image:"".concat(h(),"/grey-background.jpeg"),mobileImage:!1,title:"Hospital Schedule System",description:l.a.createElement(n.Fragment,null,"- Create an admin panel that have the ability to create a list of new staff and it will automatically assigned the staff into the scheduling systems based on their roles and department.",l.a.createElement("br",null),"- Simple CRUD systems that have the ability to edit manually the schedule, edit staff info, create new staff, read list of staff, read list of schedule based on month and delete staff info or schedule",l.a.createElement("br",null),"- Admin have the ability to re-generate the schedule based on month")}],toolsLogo:["".concat(h(),"/laravel-logo.png"),"".concat(h(),"/onesignal-logo.png"),"".concat(h(),"/bootstrap-logo.png")]}]}]};return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"projects"},e.projects.map((function(e,a){return l.a.createElement(p.a,{className:"custom-row",key:a},e.rows.map((function(e,a){return l.a.createElement(g.a,{span:12,key:a},l.a.createElement(w,{logo:e.toolsLogo,slides:e.projectInfo}))})))}))))},k=function(){return l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"job-div"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Fullstack Software Engineer at Naluri Hidup Sdn. Bhd. \u2014 2019 - Present")),l.a.createElement("ul",{className:"description"},l.a.createElement("div",{className:"heading-description"},l.a.createElement("span",null,"I was assigned to handle the Frontend and also the Backend of our company system. My job scope mostly involved in these field:")),l.a.createElement("li",null,"Creating multiple new API for the Frontend system"),l.a.createElement("li",null,"Improve performance issues in the Backend and also Frontend system"),l.a.createElement("li",null,"Design and Plan better infrastructure in code structure and also database structure wise of the existing system and for new features"),l.a.createElement("li",null,"Maintaining and improving existing system by fixing bugs and improving the code structure to increase it readability level and also improving it in performance wise."),l.a.createElement("li",null,"Creating unit test for the code based and also creating a Postman test"),l.a.createElement("li",null,"Delivering new requested features for the current system"),l.a.createElement("li",null,"Change system\u2019s structurized from relying based on ordering into slug unique name."),l.a.createElement("div",{className:"heading-description child"},l.a.createElement("span",{className:"special"},"Technology Involved:")),l.a.createElement("li",null,"Elixir - (Phoenix Framework, distillery for deployment, Genserver)"),l.a.createElement("li",null,"ReactJS - (Redux, Hooks, React-Rekit, Material-UI, Ant design)"),l.a.createElement("li",null,"Postgres sql"),l.a.createElement("li",null,"AWS - (S3 bucket, EC2 instance, Nginx)"),l.a.createElement("li",null,"Firebase - (Dynamic link, Analytics)"),l.a.createElement("li",null,"Github - (Circle CI)"))),l.a.createElement("div",{className:"job-div"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Software Engineer (Software Graphics & Media Engineer) at Intel Malaysia \u2014 2018 - 2019")),l.a.createElement("ul",{className:"description"},l.a.createElement("div",{className:"heading-description"},l.a.createElement("span",null,"Responsible in Android and Linux Kernel and also driver level development and debugging.",l.a.createElement("br",null)),l.a.createElement("span",{className:"special"},"Accomplishment:")),l.a.createElement("li",null,"Bring up virtualised Android for Intel automotive platform. Which is using Android P as a guest OS for on top of Linux hypervisor."),l.a.createElement("li",null,"Deploy CoreU (Core User mode) backend and frontend driver inside virtualised Android and Linux hypervisor Service OS."),l.a.createElement("li",null,"Build script for Android.mk file and also shell script for compiling, replacing and also shell script for compiling, replacing and development testing."),l.a.createElement("li",null,"Sustaining and maintenance for Android Display, Graphics & Media which involved the Hardware Composer, Surface Flinger and media drivers."),l.a.createElement("li",null,"Implement fixes related to sepolicy, driver initialisation and defects."),l.a.createElement("li",null,"Ramp up on Video Acceleration API for decode and Video Post Processing."))),l.a.createElement("div",{className:"job-div"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Software Internship (Web Maintainer) at Fave Malaysia \u2014 2017")),l.a.createElement("ul",{className:"description"},l.a.createElement("div",{className:"heading-description"},l.a.createElement("span",null,"Was assigned to maintain their company's E-Commerce website and I was given a recognition in a team meeting for my excellent support.",l.a.createElement("br",null)),l.a.createElement("span",{className:"special"},"Expose to:")),l.a.createElement("li",null,"MVC STRUCTURE"),l.a.createElement("li",null,"PHOENIX FRAMEWORK"),l.a.createElement("li",null,"ELIXIR"),l.a.createElement("li",null,"POSTGRES DB"),l.a.createElement("li",null,"HTML SLIM"),l.a.createElement("li",null,"SCSS"),l.a.createElement("li",null,"SHELL SCRIPT"),l.a.createElement("li",null,"GIT WORKFLOW"),l.a.createElement("li",null,"RUBY"))),l.a.createElement("div",{className:"job-div"},l.a.createElement("div",{className:"title"},l.a.createElement("span",null,"Freelance Web Developer \u2014 2016 - Present")),l.a.createElement("ul",{className:"description"},l.a.createElement("div",{className:"heading-description"},l.a.createElement("span",null,"Developed and done quite decent amount of maintaining job previously."),l.a.createElement("span",{className:"special"},"Development tools mostly involved:")),l.a.createElement("li",null,"Laravel"),l.a.createElement("li",null,"PHP"),l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"IoT Projects"),l.a.createElement("li",null,"Elixir (Phoenix Framework)"))))},S=t(211),I=function(e){return l.a.createElement(S.a,{onClick:e.handleNavbarClick,selectedKeys:e.current,mode:"horizontal",theme:"dark"},l.a.createElement(S.a.Item,{key:"none"},l.a.createElement(u.a,{type:"api"}),"Syamsul MJ"),l.a.createElement(S.a.Item,{key:"home"},l.a.createElement(c.b,{to:"/"},l.a.createElement(u.a,{type:"home"}),"Home")),l.a.createElement(S.a.Item,{key:"experiences"},l.a.createElement(c.b,{to:"/experiences"},l.a.createElement(u.a,{type:"area-chart"}),"Experiences")),l.a.createElement(S.a.Item,{key:"projects"},l.a.createElement(c.b,{to:"/projects"},l.a.createElement(u.a,{type:"project"}),"Projects")))},j=function(){var e=Object(n.useState)(""===E()?"home":E()),a=Object(i.a)(e,2),t=a[0],r=a[1],o=function(e){r(e)};return l.a.createElement(c.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{current:t,handleNavbarClick:function(e){"none"!==e.key&&r(e.key)}}),l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:function(){return l.a.createElement(f,{changeNavbarActive:o})}}),l.a.createElement(s.a,{path:"/experiences",component:k}),l.a.createElement(s.a,{path:"/projects",component:N})))))},x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[125,1,2]]]);
//# sourceMappingURL=main.7d5f63de.chunk.js.map