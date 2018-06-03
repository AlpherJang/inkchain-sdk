/**
 * Created by zhanghao on 2018/5/10.
 */
require('../config');
let queryHandler = require('../query');

queryHandler.queryChaincode('peer1', 'mychannel', 'token', ["i4230a12f5b0693dd88bb35c79d7e56a68614b199"], 'getAccount', 'user', 'org1').then((result) => {
    console.log("2", result[0].toString());
}).then(() => {
    queryHandler.queryChaincode('peer1', 'mychannel', 'token', ["i97b0f7c7f29bb1477f9fb1dd7ee92770b5e42a64"], 'getAccount', 'user', 'org1').then((result) => {
        console.log("3", result[0].toString());
    });
})

