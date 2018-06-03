/**
 * Created by zhanghao on 2018/05/10.
 */
require('../config');
let multiInvokeHandler = require('../multi-invoke-shot');
multiInvokeHandler.invokeChaincodeSigned(
    [{org: "org1", peers: ["peer1"]}, {org: "org2", peers: ["peer1"]}],//peer
    'mychannel',//通道名称
    'xscc',//链码名称
    'registerPlatform',//方法名称
    ['QTUM'],//参数 公链名称
    'user',//请求身份
    '100000000',//gas limit
    '',//desc
    'bc4bcb06a0793961aec4ee377796e050561b6a84852deccea5ad4583bb31eebe'//签名
).then((result) => {
    console.log(result);
    multiInvokeHandler.invokeChaincodeSigned(
        [{org: "org1", peers: ["peer1"]}, {org: "org2", peers: ["peer1"]}],//peer
        'mychannel',//通道名称
        'xscc',//链码名称
        'registerPlatform',//方法名称
        ['ETH'],//参数 公链名称
        'user',//请求身份
        '100000000',//gas limit
        '',//desc
        'bc4bcb06a0793961aec4ee377796e050561b6a84852deccea5ad4583bb31eebe'//签名
    ).then((result) => {
        console.log(result);
    })
});
