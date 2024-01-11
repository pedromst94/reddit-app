const categories = {
    videojuegos: {
        categorie_name: 'Videojuegos',
        categorie_url: 't/gaming.json'
        
    }
}

const baseURL = 'https://www.reddit.com/';



const redditAPI = {

    async getItems () {
        const generalURL = baseURL + '/r/popular.json'

        try {
            const response = await fetch(generalURL);
            if(response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                let formatedData = []
                jsonResponse.data.children.forEach((element) => {
                    formatedData.push({
                        title: element.data.title,
                        subreddit: element.data.subreddit,
                        author: element.data.author,
                        permalink: element.data.permalink,
                        id: element.data.id,
                        text: element.data.selftext,
                        text_html: element.data.selftext_html,
                        image: element.data.preview,
                        image_url: element.data.url_overridden_by_dest,
                        is_video: element.data.is_video,
                        video: element.data.media
                    })
                });
                console.log(formatedData);
                return formatedData;
            }
            throw new Error('Solicitud fallida');
        } catch(err){
            console.log(err);
        }
    }
}

export default redditAPI;