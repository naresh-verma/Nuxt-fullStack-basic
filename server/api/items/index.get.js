import { getData } from '../../db/utils';

export default defineEventHandler(async (event) => {
    const data = await getData();

    return {
        success: true,
        items: data,
        count: data ? data.length : 0
    }
});
