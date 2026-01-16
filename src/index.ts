import { ExpoImageUploader } from "./core/media-uploader.ts";
import { AzureBlobUploader } from "./core/uploader.ts";
import type {
	AzureBlobUploaderInterface,
	ExpoImageUploaderInterface,
	AzureBlobConfig,
} from "./types/index.ts";
export type { AzureBlobConfig } from "./types/index.ts";
export type { ImagePickerOptions } from "./types/index.ts";
export type { MediaItem } from "./types/index.ts";
export type { MediaType } from "./types/index.ts";
export type { UploadProgress } from "./types/index.ts";
export type { UploadResult } from "./types/index.ts";
export { AzureBlobUploader } from "./core/uploader.ts";
export { ExpoImageUploader } from "./core/media-uploader.ts";

export const createAzureBlobUploader = (
	config: AzureBlobConfig,
): AzureBlobUploaderInterface => {
	return new AzureBlobUploader(config);
};

export const createExpoImageUploader = (
	config: AzureBlobConfig,
): ExpoImageUploaderInterface => {
	return new ExpoImageUploader(config);
};
