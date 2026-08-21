import type { ServiceAccount } from "firebase-admin/app";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import ServiceAccountJSON from "../../../matthewbitterv2-firebase-adminsdk-fbsvc-9a96501a7a.json";

const apps = getApps();

if (!apps.length)
{

    // Use environment variables for your service account details
    initializeApp({
        credential: cert(ServiceAccountJSON as ServiceAccount)
    });

}

export const FirestoreDatabase = getFirestore();