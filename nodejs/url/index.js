const url=require('url');
//解析网址  编码网址
//  http://skipper.fun:80/pb/getAllContact?_id=123123&password=456456
// console.log(url.parse('http://skipper.fun:80/pb/getAllContact?_id=123123&password=456456'))

// //Url {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'skipper.fun:80',
//   port: '80',
//   hostname: 'skipper.fun',
//   hash: null,
//   search: '?_id=123123&password=456456',
//   query: '_id=123123&password=456456',
//   pathname: '/pb/getAllContact',
//   path: '/pb/getAllContact?_id=123123&password=456456',
//   href: 'http://skipper.fun:80/pb/getAllContact?_id=123123&password=456456' }


console.log(url.resolve('http://skipper.fun:80/pb/getAllContact?_id=123123&password=456456','asdasdasd'))
//http://skipper.fun:80/pb/asdasdasd