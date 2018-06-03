/**
 * Created by zhanghao on 2018/05/10.
 */
require('../config');
let invokeSignedHandler = require('../multi-invoke-shot');

invokeSignedHandler.invokeChaincodeSigned(
    [{org: "org1", peers: ["peer1"]}, {org: "org2", peers: ["peer1"]}],//peers
    'mychannel',//channel名称
    'xscc',//链码名称
    'lock',//请求方法
    [
        "ETH",//公链名称
        "ca99c5b6c54c74e7c362d11a9395e897e2d64982",//公链账户地址
        "150000100000000000",//金额
        "INK"
    ],
    'admin',//请求身份
    '50000000',//gas limit
    '',//desc
    '365954a24c5f7458ad356a17fc0825c5764313a6163809d526713588fb8cb3d3'//签名
).then((result) => {
    console.log(result);
});