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
export async function getAll()
{
  try
  {
    // TODO: GetAll testing.
    const collRef = firestore.collection(collectionName);
    const snapshot = await collRef.get();

    // Success: Output IDs
    snapshot.forEach((doc: { id: string; }) =>
    {
      console.log("MoviesFB:[models:model_gfs.getAll] doc=" + doc.id);
    });

    // Success: Output data() sections - gives back the original documents.
    const docDatas = snapshot.docs.map((d: { data: () => any; }) => d.data());
    docDatas.forEach((doc: { title: any; }) =>
    {
      console.log(doc.title);
    });

    return docDatas;
  }
  catch(e)
  {
    // @ts-ignore
    console.log("MoviesFB:[models:model_gfs.getAll] Error Occurred..." + e.toString());
  }
}

export async function create(movie: { title: string; year: string; } | { Title:string; Year:string; })
{
  try
  {
    console.log(`MoviesFB:[models:model_gfs.create] Create for ${collectionName}...`);
    const collRef = firestore.collection(collectionName);

    // Create item
    // @ts-ignore
    const addMovie = { "Title": movie.title ? movie.title : movie.Title , "Year": movie.year ? movie.year : movie.Year };

    const addMovieStg = JSON.stringify(addMovie);
    console.log(`MoviesFB:[models:model_gfs.create] addMovie=${addMovieStg}`);

    // Auto-Generate ID -> Just use the Doc() call.
    // https://cloud.google.com/firestore/docs/manage-data/add-data
    const newMovieRef = collRef.doc();
    // Add Item
    const result = await newMovieRef.set(addMovie);

    console.log(`MoviesFB:[models:model_gfs.create] Movie created successfully.`);
  }
  catch(e)
  {
    // @ts-ignore
    console.log("MoviesFB:[models:model_gfs.create] Error Occurred..." + e.toString());
  }
}