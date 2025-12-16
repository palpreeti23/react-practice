import { Client, Databases, Query, Storage, ID } from "appwrite";
import config from "../config/config";

class AppwriteService {
  client = new Client();
  databases;
  bucket;
  //we want client to be created when someone create appwriteservice object. constructor is called when an object is created hence constructor

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: createPost :: error", error);
      return null;
    }
  }

  async updatePost(slug, { title, content, featuedImage, status }) {
    try {
      await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuedImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite service :: updatePost :: error", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: grtPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  //storage

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    this.bucket.getFileView(config.appwriteBucketId, fileId);
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite service :: getFilePreview :: error", error);
      return false;
      //so if the catch throws any error by any chance then the return false will handle it.
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
