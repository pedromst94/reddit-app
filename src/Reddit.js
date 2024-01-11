export const categories = [
    {cat_name: 'Popular',
    cat_link: '/r/popular'},
    {cat_name: 'Hogar',
    cat_link: '/r/Home'
    },
    {cat_name: 'Ask Reddit...',
    cat_link: '/r/AskReddit'},
    {cat_name: 'Baldur`s Gate 3',
    cat_link: '/r/BaldursGate3'},
    {cat_name: 'Damn, that`s interesting',
    cat_link: '/r/Damnthatsinteresting'},
    {cat_name: 'Reddir pics',
    cat_link: '/r/pics'},
    {cat_name: 'Facepalm',
    cat_link: '/r/facepalm'},
    {cat_name: 'No stupid question',
    cat_link: '/r/NoStupidQuestions'},
    {cat_name: 'Divertido',
    cat_link: '/r/funny'},
    {cat_name: 'jukmifgguggh',
    cat_link: '/r/mildlyinfuriating'},
    {cat_name: 'Videojuegos',
    cat_link: '/r/gaming'},
    {cat_name: 'PC Master Race',
    cat_link: '/r/pcmasterrace'},
    {cat_name: 'League Of Legends',
    cat_link: '/r/leagueoflegends'},
    {cat_name: 'Am I the Asshole?',
    cat_link: '/r/AmItheAsshole'},
    {cat_name: 'Piracy',
    cat_link: '/r/Piracy'},
    {cat_name: 'AITAH',
    cat_link: '/r/AITAH'},
    {cat_name: 'Memes',
    cat_link: '/r/memes'},
    {cat_name: 'Medio interesante',
    cat_link: '/r/midlyinteresting'},
    {cat_name: 'Noticias del mundo',
    cat_link: '/r/worldnews'},
    {cat_name: 'LiveStream',
    cat_link: '/r/LivestreamFail'},
    {cat_name: 'Peter explains the joke',
    cat_link: '/r/PeterExplainsTheJoke'},
    {cat_name: 'Escape from Tarkov',
    cat_link: '/r/EscapefromTarkov'},
    {cat_name: 'Politics USA',
    cat_link: '/r/politics'},
    {cat_name: 'Movie News and Discussion',
    cat_link: '/r/movies'},
    {cat_name: 'Build computers',
    cat_link: '/r/buildapc'}
]

const baseURL = 'https://www.reddit.com/';



const redditAPI = {

    async getItems ( category ) {

        const URL = category? baseURL + category + '.json' : baseURL + '.json';

        try {
            const response = await fetch(URL);
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
    },

    async getItemsByTerm (term) {

        const searchParam = term.trim().replace(' ', '%20').toLowerCase();

        const URL = baseURL + 'search.json?q=' + searchParam;
        try {
            const response = await fetch(URL);
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