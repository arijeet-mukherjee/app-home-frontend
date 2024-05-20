const carouselProps = {
    title: "What we’re offering in the current subscription",
    description: "",
    toggleScrollButtonPosition: true,
    hideIndicator: true,
    isBackgroundDark: true,
    cardProps: [{
      image: "/utc.svg",
      title: "Understanding Terms and Conditions 0",
      description: "Tired of deciphering dense legal jargon? We've got you covered. Our platform provides easily digestible summaries of terms and conditions, so you can understand exactly what you're getting yourself into.",
      url: "/carousel-card-link",
      toggleButton: false,
      buttonText: "Learn More"
    }, {
      image: "/helpdesk.svg",
      title: "Helpdesk 1",
      description: "Need assistance navigating the complexities of cybersecurity? Our helpdesk is here to lend a helping hand. Reserve a 30-minute call with our security experts and get answers to all your burning security questions.",
      url: "/carousel-card-link",
      toggleButton: true,
      buttonText: "Subscribe"
    }, {
      image: "/leakcred.svg",
      title: "Leaked Credentials 2",
      description: "Safeguard your online accounts and check whether your credentials have leaked on the internet. Whether it's a password leak or a data breach, our system keeps a watchful eye on the web, ensuring that you're always one step ahead of cyber threats.",
      url: "/carousel-card-link",
      toggleButton: false,
      buttonText: "Learn More"
    }, {
      image: "/utc.svg",
      title: "Understanding Terms and Conditions 3",
      description: "Tired of deciphering dense legal jargon? We've got you covered. Our platform provides easily digestible summaries of terms and conditions, so you can understand exactly what you're getting yourself into.",
      url: "/carousel-card-link",
      toggleButton: false,
      buttonText: "Learn More"
    }, {
      image: "/helpdesk.svg",
      title: "Helpdesk 4",
      description: "Need assistance navigating the complexities of cybersecurity? Our helpdesk is here to lend a helping hand. Reserve a 30-minute call with our security experts and get answers to all your burning security questions.",
      url: "/carousel-card-link",
      toggleButton: true,
      buttonText: "Subscribe"
    }, {
      image: "/leakcred.svg",
      title: "Leaked Credentials 5",
      description: "Safeguard your online accounts and check whether your credentials have leaked on the internet. Whether it's a password leak or a data breach, our system keeps a watchful eye on the web, ensuring that you're always one step ahead of cyber threats.",
      url: "/carousel-card-link",
      toggleButton: false,
      buttonText: "Learn More"
    }, {
      image: "/leakcred.svg",
      title: "Leaked Credentials 6",
      description: "Safeguard your online accounts and check whether your credentials have leaked on the internet. Whether it's a password leak or a data breach, our system keeps a watchful eye on the web, ensuring that you're always one step ahead of cyber threats.",
      url: "/carousel-card-link",
      toggleButton: false,
      buttonText: "Learn More"
    }],
  };

  <Carousel {...carouselProps} />
      {/* <div className="carousel-container" style={{ "position": 'relative', "padding": '155px 215px 155px 215px' }}>
      </div> */}