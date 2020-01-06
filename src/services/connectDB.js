export default class GetPosts  {
    constructor(){
        this._urlBase ="https://my-json-server.typicode.com/vo1eriyah/reacttest";
    }

    async getResource(url){
        const resource= fetch('${this._urlBase}${url}');

        if (!(await resource).ok){
            throw new Error('Couldn\'t fetch ${url}, status: ${resource.status}');
        }

        return (await resource).json();
    }

    getAllPosts(){
        return this.getResource('/posts');
    }

    getPost(id){
        return this.getResource('/posts/${id}')
    }
}

const posts = new GetPosts();

/*posts.getAllPosts()
    .then(resource => {
        resource.array.forEach(element => {
            console.log(element);
        });
    })*/


