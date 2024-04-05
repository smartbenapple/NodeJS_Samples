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
    console.log("UsersFb:[model_gfs.getAll] Start");
    try
    {
        const collRef = firestore.collection(collectionName);
        const snapshot = await collRef.get();

        // Success: Output IDs
        snapshot.forEach((doc: { id: string; }) =>
        {
            console.log("UsersFb:[model_gfs.getAll] doc=" + doc.id);
        });

        // Success: Output data() sections - gives back the original documents.
        const docDatas = snapshot.docs.map((d: { data: () => any; }) => d.data());
        docDatas.forEach((doc: { username: any; }) =>
        {
            console.log("UsersFb:[model_gfs.getAll] username=" +doc.username);
        });

        console.log("UsersFb:[model_gfs.getAll] End with records=" + docDatas.length.toString());
        return docDatas;
    }
    catch(e)
    {
        // @ts-ignore
        console.log("UsersFb:[model.getAll] Error Occurred..." + e.toString());
    }
}

export async function create(user: { username: any; password: any; })
{
    console.log("UsersFb:[model_gfs.create] Start");
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

        console.log(`UsersFb:[model_gfs.create] User ${result.writeTime} created successfully.`);
    }
    catch(e)
    {
        // @ts-ignore
        console.log("UsersFb:[model.create] Error Occurred..." + e.toString());
    }
}