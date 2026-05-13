import { saveData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    
    if (!body || Object.keys(body).length === 0) {
        throw createError({
            statusCode: 400,
            message: 'Request body is required'
        });
    };

    const {id, name, description, price} = body;
    const newItem = {
        id: id || Date.now(),
        name: name || 'Unnamed Item',
        description: description || '',
        price: price || 0
    };

    await saveData(newItem);
    return {
        success: true,
        message: 'Item added successfully',
        data: newItem
    }
});