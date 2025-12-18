import { Client, Account, ID } from "appwrite";
import config from "../config/config";
import { read } from "fs";

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

      return true;
    } catch (error) {
      console.loh("authservice :: createAccount :: error", error);
      return null;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.loh("authservice :: login :: error", error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.loh("authservice :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logOut() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.loh("authservice :: logOut :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
