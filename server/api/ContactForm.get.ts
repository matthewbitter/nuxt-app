export default defineEventHandler(async () =>
{

    const database = FirestoreDatabase;
    const document = database.collection("ContactForm");
    const snapshot = await document.get();

    return snapshot.docs.map(record => record.data());

});