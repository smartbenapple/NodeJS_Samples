import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import axios from "axios";
import { Events } from '../events/EventEmitter';
import { MessagesService } from "../messages/messages.service";
const url = 'https://gcloud-ms-api-axxh6chama-wl.a.run.app/movie'; // locally: http://localhost:8181/movie
const url2 = 'https://gcloud-ms-get-axxh6chama-wl.a.run.app/get';
let MoviesService = class MoviesService {
    constructor() {
        this.movies = [{ "Title": "Bambi", "Year": "1956" }, { "Title": "Snow White", "Year": "1934" }];
        // Success: testing event.
        // https://www.w3schools.com/nodejs/nodejs_events.asp
        this.EventName = "GetAllCompleted";
        this.EventGetAllCompleted = new Events();
        // Concern: Messaging Service
        this.messagesService = inject(MessagesService);
        //this._postMsgCallback = postMsgCallback;
        this.movies = [{ "Title": "Mary Poppins", "Year": "1956" }, { "Title": "Dumbo", "Year": "1967" }];
        this.getAll();
    }
    // TODO: Test if adds record.
    add(item) {
        this.messagesService.pushMessage("Ui:[Movies.add] Triggered.");
        let itemStg = JSON.stringify(item);
        //let lengthStg = getByteLengths(item);
        const axiosConfig = { headers: {
                Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                "Content-Type": "application/json;charset=UTF-8"
            } };
        // todo: CORS worked for url2 test.
        axios.post(url, itemStg, axiosConfig).then(response => {
            this.messagesService.pushMessage("Ui:[Movies.add] axios-post response." + response.data);
        }).catch(this.err);
        {
            this.messagesService.pushMessage("Ui:[Movies.add] axios-post failed!" + this.err?.toString());
        }
        ;
    }
    getAll() {
        this.messagesService.pushMessage("GetAll Triggered.");
        // Using setTimeout in Javascript: https://masteringjs.io/tutorials/node/sleep
        /*setTimeout(() => {
          console.log('This printed after about 1 second');
          this.EventGetAllCompleted.emit(this.EventName);
          this._postMsgCallback("Ui:[Movies.GetAll] setTimeout completed.");
        }, 3000);*/
        const axiosConfig = { headers: {
                Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                "Content-Type": "application/json;charset=UTF-8",
            } };
        // Success: CORS worked for url2 test.
        /*axios.post(url2, {}, axiosConfig).then( response =>
          {
            this._postMsgCallback("Ui:[Movies.GetAll] axios-post response." + response.data);
          }).catch(this.err)
        {
          this._postMsgCallback("Ui:[Movies.GetAll] axios-post failed!" + this.err?.toString());
        };*/
        // Success: CORS worked for url;url2 test.
        axios.get(url2, axiosConfig).then(response => {
            //this._postMsgCallback("Ui:[Movies.GetAll] axios-post response." + response.data.message);
            this.movies = response.data.message;
            this.EventGetAllCompleted.emit(this.EventName);
            //this.outputArray(this.movies);
        }).catch(this.err);
        {
            this.messagesService.pushMessage("Ui:[Movies.GetAll] axios-post failed!" + this.err?.toString());
        }
        ;
        //getData();
        //this.getData2();
        //return [{"title":"testing", "year":"2024"}];
    }
    getData2() {
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                a: 10,
                b: 20,
            }),
        };
        fetch(url2).then((response) => response.json()).then((data) => {
            console.log(data);
            this.messagesService.pushMessage("Fetch Called!");
        }).catch((err) => {
            console.log("Unable to fetch -", err);
            this.messagesService.pushMessage("Fetch Failed! err" + err);
        });
    } // end
    outputArray(array) {
        //this._postMsgCallback("OutputArray Triggered.");
        for (let index in array) {
            let movie = array[index];
            this.messagesService.pushMessage(movie.Title);
        }
    }
};
MoviesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MoviesService);
export { MoviesService };
//# sourceMappingURL=movies.service.js.map