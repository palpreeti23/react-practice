import { Client, Databases, Storage, Query } from "appwrite";
import config from "../config/config";

class AppwriteService {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client

      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ staus, title, slug, content, featuredImage, userId }) {
    try {
      return await this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          staus,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite Service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { status, title, content, featuredImage }) {
    try {
      return await this.database.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featuredImage,
        }
      );
    } catch (error) {
      console.log("appwrite Service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite Service :: deletePost :: error", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite Service :: getPost :: error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite Service :: getPosts :: error", error);
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
