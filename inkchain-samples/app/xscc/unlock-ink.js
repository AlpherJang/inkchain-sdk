/**
 * Created by zhanghao on 2018/05/10.
 */
require('../config');
let invokeSignedHandler = require('../multi-invoke-shot');
invokeSignedHandler.invokeChaincodeSigned(
    [{org: "org1", peers: ["peer1"]}, {org: "org2", peers: ["peer1"]}],//peer
    'mychannel',//通道名称
    'xscc',//合约名称
    'unlock', //方法名称
    [
        "ETH",//公链平台
        "ee9497cee12f148a5ac2f9c8d49ef6deb65807dc",//公链账户address
        "1000000000",//金额
        "i97b0f7c7f29bb1477f9fb1dd7ee92770b5e42a64",//联盟链address
        "0xf67bc7fe712d562ccca3fcdd78cf5cf89c059f435f31d1e0ed23559ee7eaca7a"//公链txId
    ],
    'admin',//请求身份
    '50000000',//gas limit
    '',//desc
    'bc4bcb06a0793961aec4ee377796e050561b6a84852deccea5ad4583bb31eebe'//签名
).then((result) => {
    console.log(result);
});

