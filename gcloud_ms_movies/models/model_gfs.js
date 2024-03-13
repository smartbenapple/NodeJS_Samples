var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Google Firestore version
import Firestore from "@google-cloud/firestore";
// create instance of connection
const projectId = 'dauntless-bay-416001';
// @ts-ignore
const firestore = new Firestore({ projectId });
const collectionName = "Movies";
// Firestore: How to GetAll items.
// Success - Return all records without issue.
// https://cloud.google.com/firestore/docs/query-data/get-data
export function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            try {
                // TODO: GetAll testing.
                const collRef = firestore.collection(collectionName);
                const snapshot = yield collRef.get();
                // Success: Output IDs
                snapshot.forEach((doc) => {
                    console.log("Movies:[models/model_gfs.getAll] doc=" + doc.id);
                });
                // Success: Output data() sections - gives back the original documents.
                const docDatas = snapshot.docs.map((d) => d.data());
                docDatas.forEach((doc) => {
                    console.log(doc.Title);
                });
                return docDatas;
            }
            catch (e) {
                // @ts-ignore
                console.log("Error Occurred..." + e.toString());
            }
        }
        finally {
            // ...
        }
    });
}
export function create(movie) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            try {
                console.log(`Movies:[models/model_gfs.create] Create for ${collectionName}...`);
                const collRef = firestore.collection(collectionName);
                // Create item
                // @ts-ignore
                const addMovie = { "Title": movie.title ? movie.title : movie.Title, "Year": movie.year ? movie.year : movie.Year };
                const addMovieStg = JSON.stringify(addMovie);
                console.log(`Movies:[models/model_gfs.create] addMovie=${addMovieStg}`);
                // Auto-Generate ID -> Just use the Doc() call.
                // https://cloud.google.com/firestore/docs/manage-data/add-data
                const newMovieRef = collRef.doc();
                // Add Item
                const result = yield newMovieRef.set(addMovie);
                console.log(`Movie created successfully.`);
            }
            catch (e) {
                // @ts-ignore
                console.log("Error Occurred..." + e.toString());
            }
        }
        finally {
            // ...
        }
    });
}
//# sourceMappingURL=model_gfs.js.map