"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[5098],{2021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],c={title:"Interactive code block!",authors:"joshcena",tags:["personal page","front end"]},l=void 0,s={permalink:"/blog/2021/05/06/codeblock",source:"@site/blog/2021-05-06-codeblock.mdx",title:"Interactive code block!",description:"Hey!",date:"2021-05-06T00:00:00.000Z",formattedDate:"May 6, 2021",tags:[{label:"personal page",permalink:"/blog/tags/personal-page"},{label:"front end",permalink:"/blog/tags/front-end"}],readingTime:1,truncated:!0,authors:[{name:"Joshua Chen",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"joshcena"}],prevItem:{title:"Caroline: a script font",permalink:"/blog/2021/06/09/font"},nextItem:{title:"Champions league reached!",permalink:"/blog/2021/04/26/champion"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hey!")),(0,r.kt)("p",null,"I just found it fun to include an interactive code block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,"Try it out with your own code in React!"))}d.isMDXComponent=!0}}]);