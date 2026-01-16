import { ImagePickerResult } from "expo-image-picker";
import { AzureBlobUploader } from "../core/uploader";

export interface UploadProgress {
    totalBytesWritten: number;
    totalBytesExpectedToWrite: number;
  }
  
export interface UploadResult {
    success: boolean;
    fileName?: string;
    url?: string;
    size?: number;
    contentType?: string;
    error?: string;
    response?: any;
  }
  
export interface MediaItem {
    id: string;
    url: string;
    type: 'image' | 'video';
    width?: number;
    height?: number;
  }
  
export interface AzureBlobConfig {
    storageAccount: string;
    containerName: string;
    sasToken: string;
}
  
export type MediaType = 'image' | 'video';
  
  export interface AzureUploadOptions {
    generateUniqueFileName?: boolean;
    customFileName?: string;
    mediaType?: MediaType;
    onProgress?: (progress: UploadProgress) => void;
  }
  
  export interface ImagePickerOptions {
    quality?: number;
    aspect?: [number, number];
    allowsEditing?: boolean;
    allowsMultipleSelection?: boolean;
    selectionLimit?: number;
  }

  export interface Config {
    storageAccount: string; 
    containerName: string; 
    baseUrl: string
  }
  
  export interface AzureBlobUploaderInterface {
    uploadFile: ( fileUri: string, originalName: string, mediaType: MediaType) => Promise<UploadResult>;
    uploadWithProgress: ( fileUri: string, originalName: string, mediaType: MediaType, onProgress?: (progress: UploadProgress) => void) => Promise<UploadResult>;
    getConfig: () => Config
  }

  export interface UploadOptions {
    fileName?: string,
    options?: ImagePickerOptions, 
    onProgress?: (progress: UploadProgress) => void
  }

  export interface ExpoImageUploaderInterface {
    requestMediaLibraryPermission: () => Promise<boolean>;
    requestCameraPermission: () => Promise<boolean>;
    checkPermissions: () => Promise<{ camera: boolean; mediaLibrary: boolean }>;
    pickImageFromLibrary: (options: ImagePickerOptions) => Promise<ImagePickerResult>;
    pickMultipleImagesFromLibrary: (options: ImagePickerOptions & { selectionLimit?: number }) => Promise<ImagePickerResult>;
    takePhoto: (options: ImagePickerOptions) => Promise<ImagePickerResult>;
    processAndUploadMultipleImages: ( result: ImagePickerResult, fileNamePrefix: string, onProgress?: (fileIndex: number, progress: UploadProgress) => void, onFileComplete?: (fileIndex: number, result: UploadResult) => void) => Promise<UploadResult[]>;
    quickUploadFromLibrary: (opts: UploadOptions) => Promise<UploadResult | null>;
    quickUploadFromCamera: (opts: UploadOptions) => Promise<UploadResult | null>;
    getUploader: () => AzureBlobUploader;
  }