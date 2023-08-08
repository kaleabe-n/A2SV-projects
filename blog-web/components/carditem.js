import cardstyle from '../styles/carditem.module.css'
import Link from 'next/link';

const Card = ({blog,key}) => {
    //accept the prop and render the card
    return ( <div className={cardstyle.card} key={key}>
        <Link href={`/blogs/${blog.id}`} className={cardstyle.link}>
            <h2 className={cardstyle.cardtitle}>{blog.title}</h2>
            <p className={cardstyle.cardcontent}>{blog.content}</p>
        </Link>
    </div> );
}
 
export default Card;