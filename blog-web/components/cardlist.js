import Card from "./carditem";
import cardListStyle from '../styles/cardlist.module.css'

const CardList = ({blogs}) => {

    //accept the blogs as props and pass them to the single card items
    return ( <div className={cardListStyle.cardlist}>
        {blogs.map((blog)=><Card blog={blog} key={blog.key}/>)}
    </div> );
}

 

export default CardList;