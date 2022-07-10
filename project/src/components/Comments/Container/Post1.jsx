import React from "react";

const Post1 = function (){
    return(
        <div className="post1">
            <div className="photo"></div>
                    <div className="postBy">post by</div>
                    <div className="name">Smuckersreg Toppings <a href="#">reply</a></div>
                    <div className="date">6/10/2014</div>
                    <div className="more">
                        <div className="share">456 </div>
                        <div className="likes">15 👍</div>
                    </div>
                    <div className="food"></div>
                    <div className="thanks">Thanks for the recipe</div>
                    <div className="answer">
                        <div className="answerPhoto"></div>
                        <div className="answerPostBy">post by</div>
                        <div className="answerName">Smuckersreg Toppings <a href="#">reply</a></div>
                        <div className="answerDate">6/10/2014</div>
                        <div className="answerMore">
                            <div className="share">456 </div>
                            <div className="likes">15 👍</div>
                        </div>
                        <div className="comment">Thanks for the recipe lorem ipsum bla bla bla  Thanks for the recipe lore</div>
                        <div className="moreComments">24 more comments</div>
                    </div>
        </div>
    );
}

export default Post1;