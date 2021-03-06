import React from 'react';
import {render} from 'react-dom';


class Main extends React.Component {
	

    constructor(props) {
        super(props)

    }

    doNothing() {

    }


    render() { return (
<div>
<div className="shareField">
    <div className="row row2">
    <div className="left">
        <span className="title">Rice Book!</span>
        <span className="searchbar">
            <input onChange={(e) => this.doNothing()} type="text" className="form-control" placeholder="Search..." 
            id="search" defaultValue=""/>
            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Search" 
            id="search-btn"/>
        </span>     
    </div>  
    <div className="align-right">
        <a href="profile.html" type="button" className="btn btn-default" 
        id="submitBtn">Profile Page</a>
        <a href="index.html" type="button" className="btn btn-default" 
        value="Logout" id="login">Logout</a>
    </div>
    </div>
</div>
<div className="share-container">   
    <div id="share" style={{display: 'block'}} className="row">
        <textarea type="text" className="form-control" 
        placeholder="share something" id="shareArea" defaultValue="Share something..."></textarea>
        <span>Upload Image:</span>
        <input onChange={(e) => this.doNothing()} type="file" className="btn btn-default" value="Upload Image" 
        id="upload-image"/>
        <div className="right right2">
            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Post Image" 
            id="postimage"/>
            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Post" 
            id="post"/>
            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Cancel" 
            id="clear"/>
        </div>
    </div>
</div>
<div className="container">
    <div className="col-md-2 sidebar profile-mini followers">
        <div className="row first">
            <a href="profile.html">
                <img src="https://upload.wikimedia.org/wikipedia/en/7/70/Shawn_Tok_Profile.jpg"/>
            </a>
            <h3 id="name">Kurt Ngyuen</h3>
            <div id="headline-wrapper">
                <p id="headline">
                    Learning Javacscript!
                </p>
            </div>
            <input onChange={(e) => this.doNothing()} type="text" className="form-control" 
            placeholder="How are you feeling?" id="headline-input onChange={(e) => this.doNothing()}" defaultValue=""/>
            <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Update" 
            id="update-headline"/>
        </div>
    </div>
    <div className="col-md-4">
        <div className="row">
            <div className=" first post">
                <img src="http://ieatgrass.com/wp-content/uploads/2015/02/fruit-platter-stuff-dreams-made.jpg"/>
                <span>On May 9, Scott said:</span>
                <div>Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On December 2, Joe said:</span>
            <div>Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem. Sed et est molestie, congue magna vitae, aliquet lacus. Ut in scelerisque ante. Curabitur ultricies est id consectetur suscipit. In ut lectus congue, dapibus lectus nec, hendrerit augue. Nullam dignissim pretium dictum. Fusce maximus condimentum orci at aliquet. Donec dictum eget leo non vehicula. Morbi consectetur dictum eros in rutrum. Sed quis rhoncus risus.
            </div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On November 3, Max said:</span>
            <div>Curabitur quis malesuada neque. Nulla quis mi congue, auctor ante id, cursus nunc. Vivamus dui nisl, pharetra quis risus eu, mattis congue mi. In pellentesque hendrerit eros eget porta. Praesent ut metus suscipit, aliquam arcu a, euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, dui sed porttitor placerat, felis mauris hendrerit tortor, non aliquet metus mi non ligula. Nunc velit purus, hendrerit ac pellentesque at, scelerisque non justo. Fusce ligula ex, sagittis sit amet justo ac, scelerisque facilisis lectus. Ut in efficitur turpis. Mauris scelerisque dapibus ligula, vel molestie risus viverra a. Donec in ultrices mauris. Nunc vestibulum quam mauris, sed sollicitudin quam eleifend fermentum.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
                <img src="http://blog.homeexchange.com/wp-content/uploads/2013/11/huevo.jpg"/>
                <span>On June 8, Eric said:</span>
                <div>Curabitur quis malesuada neque. Nulla quis mi congue, auctor ante id, cursus nunc. Vivamus dui nisl, pharetra quis risus eu, mattis congue mi.</div>
                <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>            
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On September 5, Scott said:</span>
            <div>Suspendisse sed vestibulum eros. Proin gravida quam id magna dictum, sed finibus arcu scelerisque. Phasellus varius urna eu ultricies ultrices. Curabitur pulvinar sit amet nisl vel hendrerit. Sed vestibulum tortor et mollis hendrerit. Integer tincidunt felis urna, sed faucibus lorem placerat facilisis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat turpis quis ante imperdiet scelerisque. Nullam aliquet vitae odio et eleifend.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
                <img src="http://images5.aplus.com/uc-up/ig-desktop-6PRkqyAk9r"/>
                <span>On September 5, Scott said:</span>
                <div>Suspendisse sed vestibulum eros. Proin gravida quam id magna dictum, sed finibus arcu scelerisque.</div>
                <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On June 8, Eric said:</span>
            <div>Curabitur quis malesuada neque. Nulla quis mi congue, auctor ante id, cursus nunc. Vivamus dui nisl, pharetra quis risus eu, mattis congue mi. In pellentesque hendrerit eros eget porta. Praesent ut metus suscipit, aliquam arcu a, euismod mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus, dui sed porttitor placerat, felis mauris hendrerit tortor, non aliquet metus mi non ligula. Nunc velit purus, hendrerit ac pellentesque at, scelerisque non justo. Fusce ligula ex, sagittis sit amet justo ac, scelerisque facilisis lectus. Ut in efficitur turpis. Mauris scelerisque dapibus ligula, vel molestie risus viverra a. Donec in ultrices mauris. Nunc vestibulum quam mauris, sed sollicitudin quam eleifend fermentum.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>

    </div>
    <div className="col-md-4">
        <div className="row">
            <div className="post first">
                <img src="https://s3.amazonaws.com/media.newbeauty.com/photos/50399-kayla_itsines.jpg"/>
                <span>On May 9, Scott said:</span>
                <div>Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem.</div>
                <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On July 7, Max said:</span>
            <div>Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem. Sed et est molestie, congue magna vitae, aliquet lacus. Ut in scelerisque ante. Curabitur ultricies est id consectetur suscipit. In ut lectus congue, dapibus lectus nec, hendrerit augue. Nullam dignissim pretium dictum. Fusce maximus condimentum orci at aliquet. Donec dictum eget leo non vehicula. Morbi consectetur dictum eros in rutrum. Sed quis rhoncus risus.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
                <img src="http://www.archive.dwell.com/sites/default/files/styles/article_photo/public/2015/12/15/screen_shot_2015-12-15_at_1.50.06_pm.png?itok=VcZY9qAc"/>
                <span>On May 9, Scott said:</span>
                <div>Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem.</div>
                <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On May 9, Scott said:</span>
            <div>Sed dictum malesuada ipsum, eget ornare enim molestie in. In id faucibus eros, at dapibus sem. Proin commodo nibh est, at porta magna auctor eu. Nunc sed elementum mauris. Mauris sollicitudin, nisl at finibus iaculis, velit diam ullamcorper arcu, quis luctus massa risus id turpis. Etiam vitae scelerisque risus. Nullam et facilisis nisi. Sed a libero posuere, facilisis odio vitae, gravida tortor. Ut vitae nunc augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non ante augue.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <img src="http://67.media.tumblr.com/5a0e455fa05ff1ff6fe6259fa9cf6196/tumblr_mh3emyKyo51r1thfzo2_1280.jpg"/>
            <span>On July 7, Max said:</span>
            <div>Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <span>On July 7, Max said:</span>
            <div>Aenean eget tortor et ipsum convallis convallis non sit amet massa. Donec nec vestibulum sem. Sed et est molestie, congue magna vitae, aliquet lacus. Ut in scelerisque ante. Curabitur ultricies est id consectetur suscipit. In ut lectus congue, dapibus lectus nec, hendrerit augue. Nullam dignissim pretium dictum. Fusce maximus condimentum orci at aliquet. Donec dictum eget leo non vehicula. Morbi consectetur dictum eros in rutrum. Sed quis rhoncus risus.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
        <div className="row">
            <div className="post">
            <img src="http://www.archive.dwell.com/sites/default/files/styles/article_photo/public/carlhansenandson_instagram_netherlands.png?itok=EZYD0EGR"/>
            <span>On December 2, Joe said:</span>
            <div>Aenean eget tortor et ipsum convallis convallis non sit amet massa.</div>
            <input onChange={(e) => this.doNothing()} type="button" className="btn btn-default" value="Comment" id="login"/>
            </div>
        </div>
    </div>
    <div className="col-md-2 followers">
        <input onChange={(e) => this.doNothing()} type="text" className="form-control" placeholder="Search..." id="search2" defaultValue=""/>
        <input onChange={(e) => this.doNothing()} className="btn btn-default" type="button" value="Add Friend" id="search2-btn"/>
        <div className="row first">
            <img src="http://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg"/>
            <h3>Kevin Leigh</h3>
            <p>"Never give up on things you can't live a day without. [Hong Kong China] 852 Pride. Got7."</p>
            <input onChange={(e) => this.doNothing()} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
        <div className="row">
            <img src="http://orig10.deviantart.net/b1f3/f/2011/258/1/8/profile_picture_by_ff_stock-d49yyse.jpg"/>
            <h3>Reagan Gettson</h3>
            <p>Mark Tuan SoCal. 626 Work Hard Play Hard</p>
            <input onChange={(e) => this.doNothing()} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
        <div className="row">
            <img src="http://orig00.deviantart.net/5250/f/2013/298/7/3/profile_picture_by_sd_stock-d6rt7w2.jpg"/>
            <p>BamBam(แบมแบม) 1997 🇹🇭🇰🇷</p>
            <input onChange={(e) => this.doNothing()} className="btn btn-default unfollow-btn" type="button" value="Unfollow"/>
        </div>
    </div>
</div>

<div className="footer">
    <span>Contact    |    </span>
    <span>About    |    </span>
    <span>FAQs        </span>
</div>
</div>


        
    )}
}

export default Main;