const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.scan({
    TableName: "kkk"
    }).promise();
            
    } catch (err) {
        // error handling goes here
    };
    
    return {"message": "Successfully executed"};
};