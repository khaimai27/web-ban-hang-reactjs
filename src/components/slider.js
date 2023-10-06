import React, { Component } from "react";

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotNews: [
        {
          id: 1,
          imageUrl: "slide1.jpg",
          title: "Tin tức hot 1",
        },
        {
          id: 2,
          imageUrl: "slide2.jpg",
          title: "Tin tức hot 2",
        },
        {
          id: 3,
          imageUrl: "slide3.jpg",
          title: "Tin tức hot 3",
        },
        
      ],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.showNextSlide, 3000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.hotNews.length,
    }));
  };

  render() {
    const { hotNews, currentIndex } = this.state;
    const currentNews = hotNews[currentIndex];

    return (
      <div className="slide-container">
        <img src={currentNews.imageUrl} alt={currentNews.title} />
        <h3>{currentNews.title}</h3>
      </div>
    );
  }
}

export default Slide;
