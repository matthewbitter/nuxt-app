import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const apps = getApps();

if (!apps.length)
{

    const serviceAccount = useRuntimeConfig().FirebaseServiceAccountKey as unknown as ServiceAccountKey;
    const serviceAccountData: ServiceAccountKey = { ...serviceAccount };

    // Use environment variables for your service account details
    initializeApp({
        credential: cert({
            projectId: serviceAccountData.project_id,
            clientEmail: serviceAccountData.client_email,
            privateKey: serviceAccountData.private_key?.replace(/\\n/g, "\n")
        })
    });

}

export const FirestoreDatabase = getFirestore();


interface ServiceAccountKey
{

    type: string
    project_id: string
    private_key_id: string
    private_key: string
    client_email: string
    clinet_id: string
    auth_uri: string
    token_uri: string
    auth_provider_x509_cert_url: string
    client_x509_cert_url: string
    universe_domain: string

}