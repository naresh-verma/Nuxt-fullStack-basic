import {getData } from '../../db/utils';

export default defineEventHandler(async(event) => {
    
    const {id} = event.context.params;

    const data = await getData();
    const item = data.find(item => item.id === Number(id));

    if(!item) {
        throw createError({
            statusCode: 404,
            message: 'Data not Available'
        });
    }

    return {
        success: true,
        data: item
    };
})