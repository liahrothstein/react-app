import React from "react";

const PostComment = function (){
    return(
        <div className="postComment">
            <div className="container">
                <div className="header">
                    <div className="text">Post a Comment</div>
                    <div className="socialMedia">
                        <div className="facebook">Facebook</div>
                        <div className="stick">|</div>
                        <div className="twitter">Twitter</div>
                    </div>
                </div>
                <div className="postContainer">
                    <div className="photo"></div>
                    <form action="">
                        <input type="text" />
                        <input type="submit" value="POST" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostComment;