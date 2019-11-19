import React from 'react';
import Carousel from 'react-multi-carousel';
import './react-multi-carousel.css';
import './index.css'

export default (props) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 2,
        }
      };
    return(
        <>
            <Carousel  responsive={responsive} showDots={true}>
                <div className="news_slider_update__card">
                    <div className="news_slider_update__card_date red__text">
                    26.12.2019
                    </div>
                    <div className="news_slider_card__container_headline white__text">
                        NEWS HEADLINE
                    </div>
                    <div className="news_slider_card__container_appeal">Dear user!</div>
                    <div className="news_slider_card__container_message">
                        Bibox, a Chinese digital asset exchange, has acquired 100 percent of shares in Dex.top...Some blablabla goes here.
                        Consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                        Proin sodales pulvinar sic tempor. 
                        Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </div>
                    <div className="news_slider_card__container_bot_line">Please update your bookmarks.</div>
                </div>
                <div className="news_slider_update__card">
                    <div className="news_slider_update__card_date red__text">
                    26.12.2019
                    </div>
                    <div className="news_slider_card__container_headline white__text">
                        NEWS HEADLINE
                    </div>
                    <div className="news_slider_card__container_appeal">Dear user!</div>
                    <div className="news_slider_card__container_message">
                        Bibox, a Chinese digital asset exchange, has acquired 100 percent of shares in Dex.top...Some blablabla goes here.
                        Consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                        Proin sodales pulvinar sic tempor. 
                        Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </div>
                    <div className="news_slider_card__container_bot_line">Please update your bookmarks.</div>
                </div>
                <div className="news_slider_update__card">
                    <div className="news_slider_update__card_date red__text">
                    26.12.2019
                    </div>
                    <div className="news_slider_card__container_headline white__text">
                        NEWS HEADLINE
                    </div>
                    <div className="news_slider_card__container_appeal">Dear user!</div>
                    <div className="news_slider_card__container_message">
                        Bibox, a Chinese digital asset exchange, has acquired 100 percent of shares in Dex.top...Some blablabla goes here.
                        Consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                        Proin sodales pulvinar sic tempor. 
                        Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </div>
                    <div className="news_slider_card__container_bot_line">Please update your bookmarks.</div>
                </div>
                <div className="news_slider_update__card">
                    <div className="news_slider_update__card_date red__text">
                    26.12.2019
                    </div>
                    <div className="news_slider_card__container_headline white__text">
                        NEWS HEADLINE
                    </div>
                    <div className="news_slider_card__container_appeal">Dear user!</div>
                    <div className="news_slider_card__container_message">
                        Bibox, a Chinese digital asset exchange, has acquired 100 percent of shares in Dex.top...Some blablabla goes here.
                        Consectetur adipiscing elit. Aenean euismod bibendum laoreet. 
                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 
                        Proin sodales pulvinar sic tempor. 
                        Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                    </div>
                    <div className="news_slider_card__container_bot_line">Please update your bookmarks.</div>
                </div>
            </Carousel>
        </>
    );
}