Pucman.Interface = (function() {
    return {
        preloadInterface: function(that) {
            that.load.image('homePageButtonPic', 'resources/homePageButton.png');
            that.load.image('plusButtonPic', 'resources/plus.png');
            that.load.image('minusButtonPic', 'resources/minus.png');

            // music
            that.load.audio('music', 'resources/test.mp3');
            that.load.audio('ouch', 'resources/ouch.mp3');
        },

        createInterface: function(that) {
            //button to got to homepage
            homepageButton = that.game.add.button(((that.game.width / 20) * 17), (that.game.height - 64), 'homePageButtonPic', function() {
                window.location.href = 'http://pcai042.informatik.uni-leipzig.de/~swp15-gkp/';
            }, that);
            //button to increase volume
            plusButton = that.game.add.button(((that.game.width / 20) * 19), (homepageButton.y - ((that.game.cache.getImage('plusButtonPic').height + 32) * 2)), 'plusButtonPic', function() {
                that.backGroundMusic.volume = Math.min(1, that.backGroundMusic.volume + 0.05);
            }, that);
            //button to  decrease volume
            minusButton = that.game.add.button(((that.game.width / 20) * 19), (homepageButton.y - (that.game.cache.getImage('plusButtonPic').height + 32)), 'minusButtonPic', function() {
                that.backGroundMusic.volume = Math.max(0, that.backGroundMusic.volume - 0.05);
            }, that);

            //  Lives
            that.livesText = that.add.text((that.game.width / 20), (that.game.height - 64), 'Lives: ' + that.game.lives, {
                fontSize: '32px',
                fill: '#000'
            });
            //  Score
            that.scoreText = that.add.text((that.game.width / 2), (that.game.height - 64), 'Score: 0', {
                fontSize: '32px',
                fill: '#000'
            });


            // music
            that.backGroundMusic = that.game.add.audio('music', 0.2, true);
            that.backGroundMusic.play();
        },

        eatDot: function(game) {
            //  Score
            game.scoreText.text = 'Score: ' + game.score;
        }

        /*
        funktionInterface : function(that) {

			homepageButtonClicked: function() {
				window.location.href = 'http://pcai042.informatik.uni-leipzig.de/~swp15-gkp/';
			},

			plusButtonClicked: function() {
				that.backGroundMusic.volume = Math.min(1, that.backGroundMusic.volume + 0.05);
			},

			minusButtonClicked: function() {
				that.backGroundMusic.volume = Math.max(0, that.backGroundMusic.volume - 0.05);
			}		
		}
		*/
    };
})();
