"use strict";(self.webpackChunkjan_docusaurus=self.webpackChunkjan_docusaurus||[]).push([[1236],{7340:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(7624),o=t(2172);const i={sidebar_position:3},s="Integrate With a Remote Server",a={id:"models/integrate-remote",title:"Integrate With a Remote Server",description:"This is currently under development.",source:"@site/docs/models/integrate-remote.mdx",sourceDirName:"models",slug:"/models/integrate-remote",permalink:"/jan-docusaurus/docs/models/integrate-remote",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/models/integrate-remote.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Import Models Manually",permalink:"/jan-docusaurus/docs/models/import-models"},next:{title:"Customize Engine Settings",permalink:"/jan-docusaurus/docs/models/customize-engine"}},l={},d=[{value:"OpenAI Platform Configuration",id:"openai-platform-configuration",level:2},{value:"1. Create a Model JSON",id:"1-create-a-model-json",level:3},{value:"2. Configure OpenAI API Keys",id:"2-configure-openai-api-keys",level:3},{value:"3. Start the Model",id:"3-start-the-model",level:3},{value:"Engines with OAI Compatible Configuration",id:"engines-with-oai-compatible-configuration",level:2},{value:"1. Configure a Client Connection",id:"1-configure-a-client-connection",level:3},{value:"2. Create a Model JSON",id:"2-create-a-model-json",level:3},{value:"3. Start the Model",id:"3-start-the-model-1",level:3},{value:"Assistance and Support",id:"assistance-and-support",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"integrate-with-a-remote-server",children:"Integrate With a Remote Server"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This is currently under development."})}),"\n",(0,r.jsx)(n.p,{children:"In this guide, we will show you how to configure Jan as a client and point it to any remote & local (self-hosted) API server."}),"\n",(0,r.jsx)(n.h2,{id:"openai-platform-configuration",children:"OpenAI Platform Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"1-create-a-model-json",children:"1. Create a Model JSON"}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"~/jan/models"})," folder. Create a folder named ",(0,r.jsx)(n.code,{children:"gpt-3.5-turbo-16k"})," and create a ",(0,r.jsx)(n.code,{children:"model.json"})," file inside the folder including the following configurations:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure the filename must be ",(0,r.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"format"})," property is set to api."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"engine"})," property is set to openai."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"state"})," property is set to ready."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/gpt-3.5-turbo-16k/model.json"',children:'{\r\n  "sources": [\r\n    {\r\n      "filename": "openai",\r\n      "url": "https://openai.com"\r\n    }\r\n  ],\r\n  "id": "gpt-3.5-turbo-16k",\r\n  "object": "model",\r\n  "name": "OpenAI GPT 3.5 Turbo 16k",\r\n  "version": "1.0",\r\n  "description": "OpenAI GPT 3.5 Turbo 16k model is extremely good",\r\n  "format": "api",\r\n  "settings": {},\r\n  "parameters": {},\r\n  "metadata": {\r\n    "author": "OpenAI",\r\n    "tags": ["General", "Big Context Length"]\r\n  },\r\n  "engine": "openai"\r\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You can find the list of available models in the OpenAI Platform."}),"\n",(0,r.jsx)(n.li,{children:"Please note that the id property need to match the model name in the list. For example, if you want to use the GPT-4 Turbo, you need to set the id property as gpt-4-1106-preview."}),"\n"]})}),"\n",(0,r.jsx)(n.h3,{id:"2-configure-openai-api-keys",children:"2. Configure OpenAI API Keys"}),"\n",(0,r.jsxs)(n.p,{children:["You can find your API keys in the ",(0,r.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI Platform"})," and set the OpenAI API keys in ",(0,r.jsx)(n.code,{children:"~/jan/engines/openai.json"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\r\n  "full_url": "https://api.openai.com/v1/chat/completions",\r\n  "api_key": "sk-<your key here>"\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-start-the-model",children:"3. Start the Model"}),"\n",(0,r.jsx)(n.p,{children:"Restart Jan and navigate to the Hub. Then, select your configured model and start the model."}),"\n",(0,r.jsx)(n.h2,{id:"engines-with-oai-compatible-configuration",children:"Engines with OAI Compatible Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["In this section, we will show you how to configure a client connection to a remote/local server, using Jan's API server that is running model ",(0,r.jsx)(n.code,{children:"mistral-ins-7b-q4"})," as an example."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Currently, you can only connect to one OpenAI compatible endpoint at a time."})}),"\n",(0,r.jsx)(n.h3,{id:"1-configure-a-client-connection",children:"1. Configure a Client Connection"}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"~/jan/engines"})," folder and modify the ",(0,r.jsx)(n.code,{children:"openai.json"})," file. Please note that at the moment the code that supports any openai compatible endpoint only reads ",(0,r.jsx)(n.code,{children:"engine/openai.json"})," file, thus, it will not search any other files in this directory."]}),"\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.code,{children:"full_url"})," properties with the endpoint server that you want to connect. For example, if you want to connect to Jan's API server, you can configure it as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/engines/openai.json"',children:'{\r\n  // "full_url": "https://<server-ip-address>:<port>/v1/chat/completions"\r\n  "full_url": "https://<server-ip-address>:1337/v1/chat/completions"\r\n  // Skip api_key if your local server does not require authentication\r\n  // "api_key": "sk-<your key here>"\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-create-a-model-json",children:"2. Create a Model JSON"}),"\n",(0,r.jsxs)(n.p,{children:["Navigate to the ",(0,r.jsx)(n.code,{children:"~/jan/models"})," folder. Create a folder named ",(0,r.jsx)(n.code,{children:"mistral-ins-7b-q4"})," and create a ",(0,r.jsx)(n.code,{children:"model.json"})," file inside the folder including the following configurations:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure the filename must be ",(0,r.jsx)(n.code,{children:"model.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"id"})," property matches the folder name you created."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"format"})," property is set to api."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"engine"})," property is set to openai."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"state"})," property is set to ready."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="~/jan/models/mistral-ins-7b-q4/model.json"',children:'{\r\n  "sources": [\r\n    {\r\n      "filename": "janai",\r\n      "url": "https://jan.ai"\r\n    }\r\n  ],\r\n  "id": "mistral-ins-7b-q4",\r\n  "object": "model",\r\n  "name": "Mistral Instruct 7B Q4 on Jan API Server",\r\n  "version": "1.0",\r\n  "description": "Jan integration with remote Jan API server",\r\n  "format": "api",\r\n  "settings": {},\r\n  "parameters": {},\r\n  "metadata": {\r\n    "author": "MistralAI, The Bloke",\r\n    "tags": ["remote", "awesome"]\r\n  },\r\n  "engine": "openai"\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"3-start-the-model-1",children:"3. Start the Model"}),"\n",(0,r.jsx)(n.p,{children:"Restart Jan and navigate to the Hub. Locate your model and click the Use button."}),"\n",(0,r.jsx)(n.h2,{id:"assistance-and-support",children:"Assistance and Support"}),"\n",(0,r.jsxs)(n.p,{children:["If you have questions or are looking for more preconfigured GGUF models, please feel free to join our ",(0,r.jsx)(n.a,{href:"https://discord.gg/Dt7MxDyNNZ",children:"Discord community"})," for support, updates, and discussions."]})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var r=t(1504);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);