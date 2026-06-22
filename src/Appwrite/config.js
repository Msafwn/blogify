import conf from "../confvar/conf.js";
import { Client, ID, Databases,Storage, Query } from "appwrite";


export class Service {
    client = new Client;
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }


    async createPost({title, slug, content, featuredImage, status, userId}){
       try {
        return await this.databases.createDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,{
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )

       } catch (error) {
        console.log("Database service :: createPost error: " + error);

        
       }

    }

    async updatePost( slug, {title, content, featuredImage, status}){
       try {
        return await this.databases.updateDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,{
                title,
                content,
                featuredImage,
                status,
            }
        )
       } catch (error) {
        console.log("Database service :: updatePost error: " + error);

        
       }

    }

    async deletePost(slug){
       try {
        await this.databases.deleteDocument(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug

        )

        return true;
       } catch (error) {
        console.log("Database service :: deletePost error: " + error);
        return false;
       }
    }

    async getPost(slug){
        try {
           return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            
        } catch (error) {
        console.log("Database service :: getPost error: " + error);
        return false;
            
        }

    }


    async getPosts(queries= [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
            conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            queries,
        )
        } catch (error) {
        console.log("Database service :: getPosts error: " + error);
        return false;
        }
    }


    //// file upload 

    async uploadfile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Database service :: uploadfile error: " + error);
            return false;
            
        }
    }
    


    async deletefile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
        console.log("Database service :: deleteile error: " + error);
        return false; 
            
        }
    }

    getfilepreview(fileId){
        if (!fileId) {
            console.warn("No file ID provided for preview");
            return null;
        }
        try {
            // Construct URL directly from Appwrite API endpoint
            const baseUrl = conf.appWriteUrl.replace('/v1', '');
            const previewUrl = `${baseUrl}/v1/storage/buckets/${conf.appWriteBucketId}/files/${fileId}/preview?width=2000&height=2000&gravity=top&quality=100&project=${conf.appWriteProjectId}`;
            console.log("Image URL:", previewUrl);
            return previewUrl;
        } catch (error) {
            console.error("Error constructing file preview URL: ", error);
            return null;
        }
    }
}

const service = new Service();

export default service
