export default defineEventHandler(async () =>
{

    const database = FirestoreDatabase;
    const document = database.collection("ContactForm");
    const snapshot = await document.get();

    console.log("docs", snapshot.docs);

    return snapshot.docs;

});