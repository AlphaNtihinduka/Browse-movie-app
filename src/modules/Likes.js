import DEFAULT from "../../config/default";

export const getLike = async() => {
    try {
        const Likes = await fetch(`${DEFAULT.INVOLVEMENT_API_BASEURL}/likes/`);
        const likeData = await Likes.json();
        return likeData;
    } catch (error) {
        console.log('getLikes', error);
    }
}

export const postLike = async(item_id) => {
    try {
        const createLike = await fetch(`${DEFAULT.INVOLVEMENT_API_BASEURL}/likes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item_id
            })
        });
        const status = await createLike.text();
        console.log('status', status);
    } catch (error) {
        console.log('PostError', error);
    }
}