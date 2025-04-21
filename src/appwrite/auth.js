import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    cleint = new Client();
    account;
    
    constructor(){
        this.cleint.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.cleint);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method
                return this.login({email, password})
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession(email,password)
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const user = await account.get();
            return user
        } catch (err) {
            // Not logged in
            console.log("Appwrite service :: getCurrentUser :: error: ", err)
        }

        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions();
        }catch(err){
            console.log("Appwrite Service :: logOut :: error ", err);
        }
    }


}

const authService = new AuthService();

export default authService;
