
import Config from '../Conf/config';

import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(Config.appwrite)
            .setProject(Config.PROJECT_ID);
        this.account = new Account(this.client);
            
    }

    async createAccount({Email, Password, FullName , Phone}) {
        
        try {
            const userAccount = await this.account.create(ID.unique(), Email, Password, FullName);
            console.log(userAccount , "userdata from createAccount in Auth.js ");
            if (userAccount) { 
                return this.login({Email, Password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({Email, Password}) {
       
        try {
            return await this.account.createEmailPasswordSession(Email, Password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService
