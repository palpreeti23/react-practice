import { Client, Account, ID } from "appwrite";
import config from "../config/config";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userData = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userData) {
        return this.login(email, password);
      } else {
        return userData;
      }

      // return true;
    } catch (error) {
      console.log("authservice :: createAccount :: error", error);
      return null;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("authservice :: login :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("authservice :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("authservice :: logOut :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
