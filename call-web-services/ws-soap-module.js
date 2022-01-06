var soap = require('soap');

var url = 'https://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL';
var args = {Arg1: 8, Arg2: 4};
soap.createClient(url, function (err, client) {
  client.AddInteger(args, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });

  // client.DivideInteger(args, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });

  // client.FindPerson({id:2}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result);
  //   }
  // });

  // client.GetByName({name:"A"}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result.GetByNameResult.diffgram.ListByName.SQL);
  //   }
  // });

  // client.QueryByName({name:"A"}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(result.QueryByNameResult.diffgram.QueryByName_DataSet);
  //   }
  // });
});