// Google Firestore version
import Firestore from "@google-cloud/firestore";

// create instance of connection
const projectId = 'dauntless-bay-416001';
// @ts-ignore
const firestore = new Firestore({ projectId });
const collectionName = "Users";

// https://cloud.google.com/firestore/docs/query-data/get-data
export async function getAll()
{
    try
    {
        try
        {
            const collRef = firestore.collection(collectionName);
            const snapshot = await collRef.get();

            // Success: Output IDs
            snapshot.forEach((doc: { id: string; }) =>
            {
                console.log("[model_gfs.getAll] doc=" + doc.id);
            });

            // Success: Output data() sections - gives back the original documents.
            const docDatas = snapshot.docs.map((d: { data: () => any; }) => d.data());
            docDatas.forEach((doc: { Title: any; }) =>
            {
                console.log(doc.Title);
            });

            return docDatas;
        }
        catch(e)
        {
            // @ts-ignore
            console.log("[model.getAll] Error Occurred..." + e.toString());
        }
    }
    finally
    {
        // ...
    }
}

export async function create(user: { username: any; password: any; })
{
    try
    {
        try
        {
            const collRef = firestore.collection(collectionName);

            // Create item
            const addItem = { "username": user.username, "password": user.password };

            // Auto-Generate ID -> Just use the Doc() call.
            // https://cloud.google.com/firestore/docs/manage-data/add-data
            const newAddRef = collRef.doc();
            // Add Item
            const result = await newAddRef.set(addItem);

            console.log(`User ${result.writeTime} created successfully.`);
        }
        catch(e)
        {
            // @ts-ignore
            console.log("[model.create] Error Occurred..." + e.toString());
        }
    }
    finally
    {
        // ...
    }
}