
import React from "react";

class MusicListPage extends React.Component {

    state = {
        musicList: [
        {
            id: "12b8fa8a-c768-438e-8dd9-ee004e6093e3",
            user_id: "a92434c5-5278-4d51-9d25-9b923f44d472",
            title: "Abdfgggdil Su",
            author: "Bob Segdghhdher",
            date: 1600376863354,
            file: "fohdddodc",
            genre: "Rdddock",
            album: "Akddddddfffoee"
        },
        {
            id: "dad34459a-c768-438e-8twreyewyetdd9-ee004e6093e3",
            user_id: "a92434c5-5278-4d51-rtyert9d25-9b923f44d472",
            title: "Abdfgggdil Su",
            author: "adsfladghlr",
            date: 1600376863354,
            file: "fohdddodc",
            genre: "Rdddock",
            album: "Akddddddfffoee"
        }
    ]
    }

    render () {
        return (

            <div>
             {this.state.musicList.map(music =>{
                 return (
                 <li>
                    <p>{music.title}</p>
                    <p>{music.author}</p> 
                    <p>{music.date}</p> 
                    <p>{music.file}</p> 
                    <p>{music.genre}</p>
                    <p>{music.album}</p>
                 
                 </li>
                 

                 )
             })}
            </div>
        );
    }

}

export default MusicListPage;