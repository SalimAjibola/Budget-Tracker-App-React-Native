import { KindeSDK } from '@kinde-oss/react-native-sdk-0-7x';

export const client = new KindeSDK(
    'https://gorillacoders.kinde.com',  // Replace with your Kinde domain
    'exp://192.168.1.103:8081',      // Replace with your redirect URI if necessary
    'ceaa9dc3ae144a5f82d52578f62b502b',            // Replace with your Kinde SDK Key
    'exp://192.168.1.103:8081'       // Replace with your redirect URI if necessary
);