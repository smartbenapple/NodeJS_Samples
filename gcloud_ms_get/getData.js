var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import https from "https";
export function getData(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // An object of options to indicate where to post to
            // 'Access-Control-Allow-Origin' : '*',
            // 'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
            // 'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE',
            let options = {
                hostname: "gcloud-ms-api-axxh6chama-wl.a.run.app",
                port: "",
                path: "/movie",
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                    'Content-Type': 'application/json',
                    'Content-Length': 0
                }
            };
            let returnValue = "";
            yield new Promise((accept, reject) => {
                let post_req = https.request(options, function (res) {
                    res.setEncoding('utf8');
                    res.on('data', function (data) {
                        console.log('Response: ' + data);
                        accept({ "data": data });
                    });
                });
                post_req.end();
            }).then((acc) => {
                returnValue = JSON.parse(acc.data);
            });
            response.json({ "message": returnValue });
        }
        catch (e) {
            response.status(500).json(e);
        }
    });
}
