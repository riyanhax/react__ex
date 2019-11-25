import React from 'react';
import NewsUpdateSlider from '../../components/newsUpdateSlider/multi-carousel'; 
import './newsPage.css'

export default function NewsPage(){
    return(
        <>
            <div className="news_updates__container">
              <div className="container__logo">
                <span className="white__text">NEWS AND &nbsp;</span><span className="red__text">UPDATES</span>
              </div>
              <div className="news_updates__card_container">
              <NewsUpdateSlider />
              </div>
            </div>
            <div className="news__container">
              <div className="news_card__container">
                <div className="news_card__container_date red__text">26.12.2019</div>
                <div className="news_card__container_headline white__text">NEWS HEADLINE</div>
                <div className="news_card__container_appeal">Dear user!</div>
                <div className="news_card__container_message">
                  Bibox, a Chinese digital asset exchange, has acquired__text 100 percent of shares in Dex.top...Some blablabla goes here.
                  Consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                  Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </div>
                <div className="news_card__container_bot_line">Please update your bookmarks.</div>
              </div>
              <div className="news_card__container">
                <div className="news_card__container_date red__text">26.12.2019</div>
                <div className="news_card__container_headline white__text">NEWS HEADLINE</div>
                <div className="news_card__container_appeal">Dear user!</div>
                <div className="news_card__container_message">
                  Bibox, a Chinese digital asset exchange, has acquired__text 100 percent of shares in Dex.top...Some blablabla goes here.
                  Consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                  Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </div>
                <div className="news_card__container_bot_line">Please update your bookmarks.</div>
              </div>
              <div className="news_card__container">
                <div className="news_card__container_date red__text">26.12.2019</div>
                <div className="news_card__container_headline white__text">NEWS HEADLINE</div>
                <div className="news_card__container_appeal">Dear user!</div>
                <div className="news_card__container_message">
                  Bibox, a Chinese digital asset exchange, has acquired__text 100 percent of shares in Dex.top...Some blablabla goes here.
                  Consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                  Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </div>
                <div className="news_card__container_bot_line">Please update your bookmarks.</div>
              </div>
              <div className="news_card__container">
                <div className="news_card__container_date red__text">26.12.2019</div>
                <div className="news_card__container_headline white__text">NEWS HEADLINE</div>
                <div className="news_card__container_appeal">Dear user!</div>
                <div className="news_card__container_message">
                  Bibox, a Chinese digital asset exchange, has acquired__text 100 percent of shares in Dex.top...Some blablabla goes here.
                  Consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
                  Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                </div>
                <div className="news_card__container_bot_line">Please update your bookmarks.</div>
              </div>

            </div>
        </>
    );
}