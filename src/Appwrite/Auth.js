import conf from "../confvar/conf.js";
import { Client, Account, ID } from "appwrite";

export class Authsevice {
  client = new Client();
  account;

  constructor() {
    this.client
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try{
     const user =  await this.account.create(ID.unique(), email, password, name);
     if (user){
        return this.signIn({ email, password})
     }
     else {
        return user;
     }
    }catch(error){
        throw error;
    }
  }

  async signIn({ email, password }) {
    try{
      return await this.account.createEmailPasswordSession(email, password)
    }catch(error){
        
        throw error;
    }
  }

  async getAccount() {
    try {
        return await this.account.get()
    } catch (error) {
        console.log("Appwrite service :: getAccount error: " + error);
    }

    return null;
  }

    async logout(){
        try{
            return await this.account.deleteSessions();

        }catch(error) {
            console.log("Appwrite service :: deleteSessions error: " + error)
        }
    }
}


const authsevice = new Authsevice();

export default authsevice;
