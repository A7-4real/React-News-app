import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import sssLoader from "../sssLoader.gif";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: { id: null, name: "Sputnik International" },
      author: "Sputnik International",
      title:
        "Russia's Polyanskiy Dismisses Reports About Attack on Mariupol Hospital as Fake News",
      description:
        "UNITED NATIONS (Sputnik) - Russia's First Deputy Permanent Representative to the United Nations Dmitry Polyanskiy has dismissed reports about an attack on a hospital in Mariupol as fake news.",
      url: "https://sputniknews.com/20220310/russias-polyanskiy-dismisses-reports-about-attack-on-mariupol-hospital-as-fake-news-1093733828.html",
      urlToImage:
        "https://cdnn1.img.sputniknews.com/images/sharing/article/eng/1093733828.jpg?10937336891646891351",
      publishedAt: "2022-03-10T05:34:58Z",
      content:
        "Polyanskiy wrote on Twitter in response to Guterres' statement: \"Thats how #Fakenews is born. We warned in our statement back on 7 March (https://russiaun.ru/en/news/070322n) that this hospital has b… [+117 chars]",
    },
    {
      source: { id: null, name: "Snopes.com" },
      author: "Nur Ibrahim",
      title: "Red Flags: How to Identify Suspicious Rumors",
      description:
        "For International Fact-Checking Day, we look at common techniques used to identify dubious stories online.",
      url: "https://www.snopes.com/articles/401830/red-flags-suspicious-rumors/",
      urlToImage:
        "https://www.snopes.com/tachyon/2022/03/GettyImages-1151025209.jpg",
      publishedAt: "2022-03-28T21:34:00Z",
      content:
        "Image via Getty Images\r\nOn International Fact Checking Day on April 2, 2022, it is more important than ever to keep an eye out for false information online, particularly in a time when major events c… [+9293 chars]",
    },
    {
      source: { id: null, name: "VOA News" },
      author: "webdesk@voanews.com (Margaret Besheer)",
      title:
        "Pregnant Women in Russia’s Crosshairs as Health Care Comes Under Attack in Ukraine",
      description:
        "As health care facilities are increasingly being targeted in Russia’s war on Ukraine, the U.N. Population Fund said Thursday that about 80,000 women are due to give birth in the coming three months and must be protected.\n\n\n“All these women who are giving birt…",
      url: "https://www.voanews.com/a/6479611.html",
      urlToImage:
        "https://gdb.voanews.com/093a0000-0a00-0242-283e-08da02d9f75b_w1200_r1.jpg",
      publishedAt: "2022-03-10T21:17:19Z",
      content:
        "new york  As health care facilities are increasingly being targeted in Russias war on Ukraine, the U.N. Population Fund said Thursday that about 80,000 women are due to give birth in the coming three… [+3573 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Red Wave",
      title: "The Biggest Lies (so Far) Surrounding Russia and Ukraine",
      description:
        "As many of my readers already know I am not the biggest fan of Vladimir Putin, and for good reason. The war in Ukraine is not a factor; rather, it’s Putin’s duplicity, or at the very least it’s the manner in which he has been presented to conservatives. The n…",
      url: "https://freerepublic.com/focus/f-chat/4049701/posts",
      urlToImage: null,
      publishedAt: "2022-03-25T18:29:19Z",
      content:
        "Skip to comments.\r\nThe Biggest Lies (so Far) Surrounding Russia and UkraineRed Wave ^\r\n | 3/25/2022\r\n | Brandon Smith \r\nPosted on 03/25/2022 11:29:19 AM PDT by Beave Meister\r\nAs many of my readers al… [+1895 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Agencies",
      title:
        "China reports first coronavirus deaths in over a year amid omicron surge",
      description:
        "China reports first coronavirus deaths in over a year amid omicron surge Two deaths reported on Saturday, the first since January 2021, as China continues to pursue ‘zero-Covid’ strategy Agencies Sat 19 Mar 2022 04.01 GMT China’s national health authorities r…",
      url: "https://freerepublic.com/focus/f-news/4048152/posts",
      urlToImage: null,
      publishedAt: "2022-03-20T00:04:39Z",
      content:
        "Skip to comments.\r\nChina reports first coronavirus deaths in over a year amid omicron surgeAgencies ^\r\n | 19 Mar 2022\r\nPosted on 03/19/2022 5:04:39 PM PDT by TigerLikesRoosterNew\r\nChina reports first… [+2160 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Breitbart",
      title:
        "Ron DeSantis rips reporter for peddling fake news on Parental Rights Bill: 'It's why people don't trust people like you'",
      description:
        "Florida Gov. Ron DeSantis (R) on Monday ripped a reporter after he peddled fake news about the parental rights bill in the state legislature, which leftists have mischaracterized as the “Don’t Say Gay” bill. SNIP “We’re going to make sure that parents are goi…",
      url: "https://freerepublic.com/focus/f-news/4045015/posts",
      urlToImage: null,
      publishedAt: "2022-03-09T03:26:48Z",
      content:
        "Skip to comments.\r\nRon DeSantis rips reporter for peddling fake news on Parental Rights Bill: 'It's why people don't trust people like you'Breitbart ^\r\n | 3/8/2022\r\n | Hannah Bleau\r\nPosted on 03/08/2… [+2323 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "msn",
      title:
        "Former Cracker Barrel Hostess Says Employees Have 'Code Word' For Black People",
      description:
        "A former hostess at an Arizona Cracker Barrel says the restaurant used a “code word” to refer to Black people, Newsweek reports. The former Cracker Barrel employee shared the news on TikTok, in a video that’s been viewed over 260,000 times. In the 15-second v…",
      url: "https://freerepublic.com/focus/f-news/4051674/posts",
      urlToImage: null,
      publishedAt: "2022-04-02T06:18:44Z",
      content:
        "Skip to comments.\r\nFormer Cracker Barrel Hostess Says Employees Have 'Code Word' For Black Peoplemsn ^\r\n | 4/2/22\r\n | Kui Mwai \r\nPosted on 04/01/2022 11:18:44 PM PDT by DeathBeforeDishonor1\r\nA former… [+1803 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Us news",
      title: "New Coronavirus Variant XE Identified, Spreading in U.K.",
      description:
        "A new coronavirus variant that could be the most transmissible yet has been identified in the United Kingdom. The variant, known as XE, is a combination of the omicron subvariants BA.1 and BA.2. It was first detected in the U.K. on Jan. 19, according to the W…",
      url: "https://freerepublic.com/focus/f-news/4053219/posts",
      urlToImage: null,
      publishedAt: "2022-04-08T00:27:19Z",
      content:
        "Skip to comments.\r\nNew Coronavirus Variant XE Identified, Spreading in U.K.Us news ^\r\n | 04/07/2022\r\n | Cecelia Smith-Schoenwalder\r\nPosted on 04/07/2022 5:27:19 PM PDT by ChicagoConservative27\r\nA new… [+2591 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "RealPepeEscobar Twitter",
      title: "Alleged Link Between NATO-run Bio Lab and Metabiota",
      description:
        "RealPepeEscobar Twitter \"MARIUPOL 1/3 THIS is going to be THE explosive story of the whole 404 saga, not the Bucha false flag. Yes, there's an array of NATO honchos still holed up with the Azov neo-Nazis in the bowels of Azovstal. Yet the key is what was goin…",
      url: "https://freerepublic.com/focus/f-chat/4052324/posts",
      urlToImage: null,
      publishedAt: "2022-04-04T22:03:02Z",
      content:
        "Skip to comments.\r\nAlleged Link Between NATO-run Bio Lab and MetabiotaRealPepeEscobar Twitter ^\r\n | 04 04 2022\r\n | Real Pepe Escobar\r\nPosted on 04/04/2022 3:03:02 PM PDT by yesthatjallen\r\nRealPepeEsc… [+2115 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "thesun.co.uk",
      title:
        "President Zelensky fights back tears as he surveys brutal aftermath of invasion in Bucha that saw 400 civilians killed",
      description:
        "PRESIDENT Volodymyr ­Zelensky fought back tears as he visited the town of Bucha where Vladimir Putin’s troops have been accused of butchering civilians and burying them in mass graves. The Ukrainian leader, who was visibly emotional, was flanked by security a…",
      url: "https://freerepublic.com/focus/f-news/4052409/posts",
      urlToImage: null,
      publishedAt: "2022-04-05T06:04:49Z",
      content:
        "Skip to comments.\r\nPresident Zelensky fights back tears as he surveys brutal aftermath of invasion in Bucha that saw 400 civilians killedthesun.co.uk ^\r\n | April 4, 2022\r\n | Stephen MoyesJulia Atherl… [+2404 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Tass",
      title:
        "Orban Tells EU’s Michel Hungary’s Economy Would Collapse Without Russian Gas.",
      description:
        "The Hungarian Prime Minister made it clear that the extension of sanctions to the energy sector is going to put a disproportionate burden on people, households and companies...",
      url: "https://freerepublic.com/focus/f-news/4045272/posts",
      urlToImage: null,
      publishedAt: "2022-03-09T21:16:25Z",
      content:
        "Skip to comments.\r\nOrban Tells EUs Michel Hungarys Economy Would Collapse Without Russian Gas.Tass ^\r\n | 3/9/22\r\n | Tass\r\nPosted on 03/09/2022 1:16:25 PM PST by hardspunned\r\nThe Hungarian Prime Minis… [+2129 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Fox News",
      title:
        "‘Simply Embarrassing’: Miami Herald mocked for calling Babylon Bee ‘Fake News’ in DeSantis hit piece",
      description:
        'The Miami Herald slammed Gov. Ron DeSantis, R-Fla., for working with a "fake news site" on Tuesday, after the governor’s campaign committee spent thousands of dollars on fundraising help from the popular conservative political satire site The Babylon Bee. In …',
      url: "https://freerepublic.com/focus/f-news/4052639/posts",
      urlToImage: null,
      publishedAt: "2022-04-06T02:05:07Z",
      content:
        "Skip to comments.\r\nSimply Embarrassing: Miami Herald mocked for calling Babylon Bee Fake News in DeSantis hit pieceFox News ^\r\n | Apr 5, 2022\r\n | Gabriel Hays\r\nPosted on 04/05/2022 7:05:07 PM PDT by … [+2491 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "The Los Angeles Times",
      title:
        "News Analysis: Trump delayed weapons to Ukraine and praised Putin. Did that trigger war? (barf alert)",
      description:
        "The last time (and maybe the first time) most Americans heard of Volodymyr Zelensky, the Ukrainian president was at the center of a scandal that would lead to the impeachment of then-President Trump. Trump in 2019 threatened to hold up weapons deliveries to U…",
      url: "https://freerepublic.com/focus/f-news/4048537/posts",
      urlToImage: null,
      publishedAt: "2022-03-21T18:07:16Z",
      content:
        "Skip to comments.\r\nNews Analysis: Trump delayed weapons to Ukraine and praised Putin. Did that trigger war? (barf alert)The Los Angeles Times ^\r\n | March 21, 2022\r\n | Tracy Wilkinson\r\nPosted on 03/21… [+3527 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "NBC News / Comcast",
      title: "Chris Cuomo demanding $125 million from CNN in arbitration bid",
      description:
        "Former CNN anchor Chris Cuomo is seeking a $125 million arbitration award, claiming the network wrongly terminated him, the TV host's legal team said Wednesday. Cuomo was let go after it emerged that he played an active role in advising his brother, then-New …",
      url: "https://freerepublic.com/focus/f-news/4047274/posts",
      urlToImage: null,
      publishedAt: "2022-03-16T20:01:40Z",
      content:
        "Skip to comments.\r\nChris Cuomo demanding $125 million from CNN in arbitration bidNBC News / Comcast ^\r\n | March 16, 2022\r\n | By Diana Dasrath and David K. Li\r\nPosted on 03/16/2022 1:01:40 PM PDT by O… [+3302 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Fox News",
      title:
        "CNN analyst blames Trump for aftermath of Will Smith-Chris Rock Oscars incident",
      description:
        'CNN’s Asha Rangappa decided the Dolby Theater crowd stuck around because of Trump. "So did like anyone walk out after that happened??? Or are we getting an independent psychological case study on how Trump got normalized?" Rangappa asked on Twitter. Rangappa …',
      url: "https://freerepublic.com/focus/f-news/4050364/posts",
      urlToImage: null,
      publishedAt: "2022-03-28T16:04:56Z",
      content:
        "Skip to comments.\r\nCNN analyst blames Trump for aftermath of Will Smith-Chris Rock Oscars incidentFox News ^\r\n | March 28, 2022 \r\n | Brian Flood\r\nPosted on 03/28/2022 9:04:56 AM PDT by conservative98… [+2437 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Faux News",
      title:
        "Why US gas prices are at a record and why they'll stay high for a long time",
      description:
        "HOUSTON – As U.S. gas prices hit record highs amid Russia's war on Ukraine, energy industry insiders say Americans can expect soaring prices to linger at least as long as Russian President Vladimir Putin's brutal invasion lasts.",
      url: "https://freerepublic.com/focus/f-chat/4045240/posts",
      urlToImage: null,
      publishedAt: "2022-03-09T19:19:06Z",
      content:
        "Skip to comments.\r\nWhy US gas prices are at a record and why they'll stay high for a long timeFaux News ^\r\n | 3/9/22\r\n | Tyler Olson \r\nPosted on 03/09/2022 11:19:06 AM PST by conservative98\r\nHOUSTON … [+3949 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Breitbart",
      title:
        "‘Still Working’: Colin Kaepernick Posts Video Claiming to be NFL Ready Before Free Agency",
      description:
        "National anthem protester and former NFL quarterback Colin Kaepernick posted a video to Twitter showing him training with the caption “still working.” In the video, the woke activist performs a quarterback drill ending with a pass to an unseen receiver. Accor…",
      url: "https://freerepublic.com/focus/f-chat/4045635/posts",
      urlToImage: null,
      publishedAt: "2022-03-10T23:31:50Z",
      content:
        "Skip to comments.\r\nStill Working: Colin Kaepernick Posts Video Claiming to be NFL Ready Before Free AgencyBreitbart ^\r\n | 3/10/22\r\n | WARNER TODD HUSTON\r\nPosted on 03/10/2022 3:31:50 PM PST by conser… [+4546 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Thegatewaypundit",
      title:
        "Sovereign ‘Democracy’ Ukraine: Zelenskyy Suspends 11 Opposition Parties Becoming Head Of A One-Party State",
      description:
        "Ukrainian President Volodymyr Zelenskyy, with the backing of Ukraine’s National Security and Defence Council, declared that all opposition parties would be suspended indefinitely until martial law is declared over. In a statement issued yesterday evening, Pre…",
      url: "https://freerepublic.com/focus/f-news/4048362/posts",
      urlToImage: null,
      publishedAt: "2022-03-20T23:22:31Z",
      content:
        "Skip to comments.\r\nSovereign Democracy Ukraine: Zelenskyy Suspends 11 Opposition Parties Becoming Head Of A One-Party StateThegatewaypundit ^\r\n | March 20 2022\r\n | Of A One-Party State By Cassandra F… [+4611 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Washington Times",
      title: "Fauci shamefully suggests Trump has COVID deaths on his hands",
      description:
        "National Institute of Allergy and Infectious Disease director Anthony Fauci, on a recent interview on CNN with host Chris Wallace, said the former president, Donald Trump, was to blame for many, oh so many — how many? He wouldn’t say — but many, oh so many de…",
      url: "https://freerepublic.com/focus/f-chat/4052920/posts",
      urlToImage: null,
      publishedAt: "2022-04-06T23:55:48Z",
      content:
        "Skip to comments.\r\nFauci shamefully suggests Trump has COVID deaths on his handsWashington Times ^\r\n | April 6, 2022\r\n | Cheryl K. Chumley \r\nPosted on 04/06/2022 4:55:48 PM PDT by conservative98\r\nNat… [+3823 chars]",
    },
    {
      source: { id: null, name: "Freerepublic.com" },
      author: "Daily Mail",
      title:
        "Putin loses ANOTHER top commander: Black Sea Fleet captain, 51, is ‘shot dead near Mariupol’ in latest hammer blow for invading troops",
      description:
        "Ukraine claimed today that its forces had shot dead the deputy commander of Russia's Black Sea Fleet in another significant blow to Vladimir Putin's forces. First rank captain Andrey Paliy, 51, is the only senior naval officer allegedly killed in the war in U…",
      url: "https://freerepublic.com/focus/f-news/4048309/posts",
      urlToImage: null,
      publishedAt: "2022-03-20T17:40:56Z",
      content:
        "Skip to comments.\r\nPutin loses ANOTHER top commander: Black Sea Fleet captain, 51, is shot dead near Mariupol in latest hammer blow for invading troopsDaily Mail ^\r\n | 3/20/2022\r\n | Will Stewart\r\nPos… [+3569 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello I am constructor from news component");

    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=a8fa805eb05642b5897838122c877de2&page=1&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    window.scrollTo(0, 0);
    console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=a8fa805eb05642b5897838122c877de2&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    window.scrollTo(0, 0);
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apikey=a8fa805eb05642b5897838122c877de2&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        {this.state.loading && <Spinner />}

        <h1 className="d-flex justify-content-center fw-bolder mt-3 mb-3">
          Top Headlines
        </h1>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mt-4 mb-4 h-auto" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?s=612x612"
                    }
                    srcUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

        {!this.state.loading && (
          <div className="container d-flex justify-content-between mt-5 pt-5">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              &larr; Prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
              }
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
