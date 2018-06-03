/**
 * Created by zhanghao on 2018/05/10.
 */
require('../config');
let queryHandler = require('../query');

queryHandler.queryChaincode(
    'peer1',
    'mychannel',
    'xscc',
    ["a13951cbec6781a8bfc3c5f17c1483e13ea16dbabcf5d831e388c088eadd7351"],
    'querySignature',
    'user', 'org1').then((result) => {
    console.log("1", result[0].toString());
}).then(() => {
    queryHandler.queryChaincode(
        'peer1',
        'mychannel',
        'xscc',
        ["a13951cbec6781a8bfc3c5f17c1483e13ea16dbabcf5d831e388c088eadd7351"],
        'querySignature',
        'user', 'org2').then((result) => {
        console.log("2", result[0].toString());
    });
})