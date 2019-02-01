var nforce = require('nforce');

var org = nforce.createConnection({
    // clientId: process.env.SF_CLIENT_ID,
    // clientSecret: process.env.SF_CLIENT_SECRET,
    // redirectUri: 'http://localhost:3000/oauth/_callback',
    // apiVersion: process.env.SF_API_VERSION,  // optional, defaults to current salesforce API version
    // environment: process.env.SF_ENVIRONMENT,  // optional, salesforce 'sandbox' or 'production', production default
    // mode: 'single' // optional, 'single' or 'multi' user mode, multi default
    clientId: '3MVG959Nd8JMmavQH6fiwc1JsRcOBxbOjHUqE3ieGeTXvxDpS1JkXzudt.PBPMzvChmqR10M4iR8WtOHLCs7i',
    clientSecret: '5032470199689215904',
    redirectUri: 'http://localhost:3000/oauth/_callback',
    apiVersion: 'v44.0',  // optional, defaults to current salesforce API version
    environment: 'sandbox',  // optional, salesforce 'sandbox' or 'production', production default
    mode: 'single', // optional, 'single' or 'multi' user mode, multi default
    autoRefresh: true
});

org.authenticate({ username: 'chikara.noge@altrobo.co.jp.geechsdev', password: 'geechs0824e2Vv3gk7PT2AGDmhm11DbnTvQ'}, function(err, resp){
    // the oauth object was stored in the connection object
    if(!err) console.log('Cached Token: ' + org.oauth.access_token)
    else console.log(err)
});

module.exports = {
    loginEngineer(req){
        const { body } = req;
        const email = body.email;
        const { password } = body;

        return new Promise(function(resolve, reject){
            org.query({
                query: "Select LastName, FirstName, Id, MypageId__c FROM Contact where MypageId__c='"+email+"' and MypagePassword__c='"+password+"'"
            }, function(err, resp){
                if(!err && resp.records){
                    var acc = resp.records[0];
    
                    resolve(acc);
                }
                else{
                    reject(err);
                }
            });
        });
    }
};