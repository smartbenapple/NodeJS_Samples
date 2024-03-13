"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.logRating = void 0;
// Using allowJs in tsconfig.json.
// https://bobbyhadz.com/blog/typescript-import-javascript-files
const firestore_1 = __importDefault(require("@google-cloud/firestore"));
// create instance of connection
const projectId = 'dauntless-bay-416001';
// @ts-ignore
const firestore = new firestore_1.default({ projectId });
const collectionName = "Movies";
const ratings = {
    imdb: 8.4,
    metacritic: 83,
};
function logRating(key) {
    console.log(ratings[key]);
}
exports.logRating = logRating;
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            try {
                // TODO: GetAll testing.
                const collRef = firestore.collection(collectionName);
                const snapshot = yield collRef.get();
                // Success: Output IDs
                snapshot.forEach((doc) => {
                    console.log("Movies:[model_gfs.getAll] doc=" + doc.id);
                });
                // Success: Output data() sections - gives back the original documents.
                const docDatas = snapshot.docs.map((d) => d.data());
                docDatas.forEach((doc) => {
                    console.log(doc.Title);
                });
                return docDatas;
            }
            catch (e) {
                console.log("Error Occurred..." + e.toString());
            }
        }
        finally {
            // ...
        }
    });
}
exports.getAll = getAll;
//logRating("invalid"); // error
const seasonCounts = new Map([
    ["I love lucy", 6],
    ["The golden girls", 7]
]);
const maybeValue = seasonCounts.get("I love lucy");
// book says error will be "undefined".
//console.log(maybeValue.toUpperCase());
// book says this will compile at runtime only as undefined.
const knownValue = seasonCounts.get("mickie");
function tellJoke(joke) {
    if (joke.style === "one-liner") {
        console.log(joke.style);
    }
}
const narrowJoke = {
    style: "one-liner",
};
tellJoke(narrowJoke); // ok
const wideJoke = {
    style: "one-liner"
};
function getLast(node) {
    return node.next ? getLast(node.next) : node.value;
}
let lastDate = getLast({ value: new Date("09-13-1993") });
let lastFruit = getLast({ next: { value: "banana" }, value: "apple" });
//let lastMismatch = getLast({ next: {value:123}, value: false}); // book says error occurs here.
// Book: p148
class CurriedCallback {
    constructor(callback) {
        this._callback = (input) => {
            console.log("Input: ", input);
            callback(input);
        };
    }
    call(input) {
        this._callback(input);
    }
}
new CurriedCallback((input) => { console.log(input.length); });
//new CurriedCallback( (input) => { console.log(input.length) } ); // book says should be unknown error
// Test
let myInstance = new CurriedCallback((input) => { console.log("internal 2nd callback."); });
myInstance.call("apples");
let explicit = { value: 123 };
let implicit = { value: "stuff" };
let allExplicit = {
    key: "Ratings",
    value: 10
};
let oneDefaulting = {
    value: "ten",
    key: "rating"
};
function logWithLength(input) {
    console.log(`Length: ${input.length}`);
    return input;
}
logWithLength("passes in text");
logWithLength([false, true]);
logWithLength({ length: 123 });
let myDate = new Date();
//logWithLength(new Date()); // compiler immediately sees the 'length' requirement is missing.
// Book p156 - constraint/keyof with generic types
function get(container, key) {
    return container[key];
}
const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "NomadLand"],
};
const fav = get(roles, "favorite"); // type: string
console.log("Roles for 'favorite' = " + fav);
const others = get(roles, "others"); // type: string[]
console.log("Roles for 'others' = " + others);
// Book shows using keyof only causes a union of types
function get2(container, key) {
    return container[key];
}
const found = get2(roles, "favorite");
// Book p158 - Promise<T>
const textEventually = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
});
textEventually.then((text) => { console.log(`Promise result=${text.length}`); });
//# sourceMappingURL=sample.js.map