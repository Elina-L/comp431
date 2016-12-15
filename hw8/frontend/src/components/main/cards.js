import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export const Cards = () => (
	<div>
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
	</div>
)


Cards.propTypes = {
}

export default connect(null, (dispatch) => {
	return {
		profile: () => dispatch({ type: 'NAVIGATION', location: 'PROFILE'})
	}
})(Cards)