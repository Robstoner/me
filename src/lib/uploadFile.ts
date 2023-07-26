import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { ApiError } from "next/dist/server/api-utils";
import { join } from "path";
import { env } from "process";

export async function uploadFile(file: Blob) {
  const fileBuffer = Buffer.from(await file.arrayBuffer());

  const date = new Date();
  const uploadDir = join(process.cwd(), env.UPLOAD_DIR as string);

  try {
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }
  } catch (error: any) {
    throw new ApiError(
      500,
      "Failed to create upload directory: " + error.message
    );
  }

  try {
    const name = `${file.name}-${date.getTime().toString().slice(0, 10)}`;
    const filePath = join(uploadDir, name);

    await writeFile(filePath, fileBuffer);

    return join(env.UPLOAD_DIR as string, name);
  } catch (error: any) {
    throw new ApiError(500, "Failed to upload file: " + error.message);
  }
}
