# Proxy App

## Getting Started

```sh
git clone https://github.com/tartexs/local-proxy.git nodeproxy
cd nodeproxy
npm install # or yarn install
```

*NOTE:* Make sure you have an up-to-date version of [Node.js](https://nodejs.org/en/) installed on your system.

### Local Proxy

* How to runs the proxy app (using npm or yarn)

```sh
npm start # runs the proxy on default port 4000 pointing to http://localhost:80/
npm start http://www.somecoolsite.com # runs the proxy on default port (4000) pointing to http://www.somecoolsite.com
npm start 3007 http://www.somecoolsite.com # runs the proxy on port 3007 pointing to http://www.somecoolsite.com
```
