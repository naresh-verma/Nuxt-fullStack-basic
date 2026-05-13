import {getData, saveData} from '../../db/utils';

export default defineEventHandler(async (event) => {
    try {
        const {id} = event.context.params;

        if(!id) {
            throw createError({
                statusCode: 400,
                message: 'ID parameter is required'
            });
        };


        const body = await readBody(event);

        if(!body || Object.keys(body).length === 0) {
            throw createError({
                statusCode: 400,
                message: 'Request body is required'
            });
        };
        
        const data = await getData();
        
        const itemIndex = data.findIndex(item => item.id === Number(id));

        if(itemIndex === -1) {
            throw createError({
                statusCode: 404,
                message: 'Item not found'
            });
        };

        const updatedItem = {
            ...data[itemIndex],
            ...body
        };

        data[itemIndex] = updatedItem;
        await saveData(data);

        return {
            success: true,
            message: 'Item updated successfully',
            data: updatedItem
        };
    } catch (error) {
        throw createError({
            statusCode: error.statusCode || 500,
            message: error.message || 'An error occurred while updating the item'
        });
    }
})