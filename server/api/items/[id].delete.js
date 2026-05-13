import { getData, deleteItem } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;

    const data = await getData();

    const itemExist = data.findIndex((item) => item.id === Number(id));

    if (itemExist === -1) {
      throw createError({
        statusCode: 404,
        message: "Item not found",
      });
    }

    const deleted = await deleteItem(Number(id));

    if (deleted.success) {
      return {
        success: true,
        message: "Item deleted successfully",
      };
    } else {
      return {
        statusCode: 400,
        message: "not found"
      };
    }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred while deleting the item",
    });
  }
});
