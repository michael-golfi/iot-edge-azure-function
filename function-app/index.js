var decompressor = require('./node_modules/iot-gateway-compression-gzip-nodejs/decompressor');

module.exports = function (context, messages) {
    decompressor.decompress(messages, (err, msg) => {
        if (err){
            context.log(err);
            return
        }
        
        // Do something with the message
        context.log(`Message: ${msg}`);
        context.done();
    });    
};