exports.success_function =  function(api_data) {
    var response = {
        success : true,
        statusCode : api_data.status,
        data : api_data.data?api_data.data:null,
        message : api_data.message?api_data.message:null,
    }

    return response;
}

exports.error_function =  function (api_data) {
    var response = {
        success : false,
        statusCode : api_data.status,
        data : api_data.data?api_data.data:null,
        message : api_data.message?api_data.message:null,
    }
}

// module.exports = {
//     success_function,
//     error_function,
// }