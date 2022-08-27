export const fetchPhotoData = async (page = 1)  => {
        const data = fetch(`https://jsonplaceholder.typicode.com/albums/${page}/photos`)
            .then(response => { 
                if(!response.ok) throw new Error('Something was wrong with the request');
                return response.json();
            })
            .then(result => {
                return result
            })
            .catch(err => console.log(err))

        return data;
}