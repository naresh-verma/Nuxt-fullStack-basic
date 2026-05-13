import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.resolve("server/db/data.json");

export async function getData() {
  try {
    const data = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error reading data",
    });
  }
}

export async function saveData(data) {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Error saving data",
    });
  }
}

export async function deleteItem(id) {
  const data = await getData();

  data.items = data.filter((item) => item.id !== id);
  await saveData(data);

  return {
    success: true,
  };
}
