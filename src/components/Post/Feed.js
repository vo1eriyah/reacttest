import React from 'react'
import Post from './Post'

class Feed extends React.Component {
    constructor (Feed){
        super(Feed)
    }

    render (props){
        return (
            <div>
            <Post 
            author_photo_url="https://st.kp.yandex.net/im/kadr/8/0/8/kinopoisk.ru-Matthew-McConaughey-808168.jpg"
            author_name="Mathew" 
            author_nickname="@maccounaughey"
            postcontent="The Venom symbiote requires a perfect match to bond with its host; otherwise, the host is doomed. The Venom movie plays like a midnight horror that has invaded a superhero movie, and while there are some laffs to be had, it's far from a perfect match." 
            hashtags ="123"
            location_name="Batu bolong, Bali, Indonesia"
            post_date="02.01.2020"
            photourl="https://st.kp.yandex.net/im/kadr/3/2/6/kinopoisk.ru-Venom-3260983.jpg"
            />

            <Post 
            author_photo_url="https://i.ytimg.com/vi/Gg-Ps4flCxE/maxresdefault.jpg"
            author_name="Hulk" 
            author_nickname="@Hulk"
            postcontent="The Incredible Hulk is an ongoing comic book series featuring the Marvel Comics superhero the Hulk and his alter ego Dr. Bruce Banner. First published in May 1962, the series ran for six issues before it was cancelled in March 1963, and the Hulk character began appearing in Tales to Astonish. With issue #102, Tales to Astonish was renamed to The Incredible Hulk in April 1968, becoming its second volume. The series continued to run until issue #474 in March 1999 when it was replaced with the series Hulk which ran until February 2000 and was retitled to The Incredible Hulk's third volume, running until March 2007 when it became The Incredible Hercules with a new title character. The Incredible Hulk returned in September 2009 beginning at issue #600, which became The Incredible Hulks in November 2010 and focused on the Hulk and the modern incarnation of his expanded family. The series returned to The Incredible Hulk in December 2011 and ran until January 2013, when it was replaced with The Indestructible Hulk as part of Marvel's Marvel NOW! relaunch." 
            hashtags ="about #hulk"
            location_name="New York, USA"
            post_date="02.01.2020"
            //photourl="https://st.kp.yandex.net/im/kadr/3/2/6/kinopoisk.ru-Venom-3260983.jpg"
            />

            <Post 
            author_photo_url="https://st.kp.yandex.net/im/kadr/8/0/8/kinopoisk.ru-Matthew-McConaughey-808168.jpg"
            author_name="Mathew" 
            author_nickname="@maccounaughey"
            postcontent="The Venom symbiote requires a perfect match to bond with its host; otherwise, the host is doomed. The Venom movie plays like a midnight horror that has invaded a superhero movie, and while there are some laffs to be had, it's far from a perfect match." 
            hashtags ="123"
            location_name="Batu bolong, Bali, Indonesia"
            post_date="02.01.2020"
            photourl="https://st.kp.yandex.net/im/kadr/3/2/6/kinopoisk.ru-Venom-3260983.jpg"
            />

</div>
        )
    }
}

export default Feed

