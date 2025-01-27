import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "@studio-freight/react-lenis";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextAppear from "../../components/anime/TextAppear";
import LineAppear from "../../components/anime/LineAppear";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Privacy = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMatches(true);
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <ReactLenis root options={{ smoothTouch: true }}>
      <main className="privacyPage">
        <section className="bnr-privacy">
          <div className="heading-wrapper">
            <h1>Privacy Policy</h1>
            <Box sx={{ flexGrow: 1 }} className="">
              <div className="wrapper">
                <LineAppear>
                  <div className="line-appear"></div>
                </LineAppear>
                <Grid container className="row">
                  <Grid size={{ md: 6 }}>
                    <TextAppear>
                      <h3>Terms Of Use</h3>
                    </TextAppear>
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <p>
                      The material, images, renderings, and information on this
                      website is provided on an ‘as is’ basis solely for the
                      reader’s general knowledge. The information is not
                      intended to be a comprehensive review of all matters and
                      developments concerning Crescent Legacy Properties, and
                      therefore assumes no responsibility and provides no
                      warranty, either express or implied, as to its accuracy,
                      completeness, or currency. In no event will Crescent
                      Legacy Properties be liable for any special, incidental,
                      indirect, or consequential damages of any kind, or any
                      damages whatsoever arising out of or in connection with
                      the use or performance of this information, including
                      without limitation, those resulting from loss of use, data
                      or profits, whether or not advised of the possibility of
                      damage. This site may contain links to external
                      organizations. We do not control the relevance,
                      timeliness, or accuracy of materials produced by other
                      organizations, nor do we endorse their views, products, or
                      services. Your access and use of this website constitutes
                      your agreement to be governed by the contents of the
                      disclaimer set forth above.
                    </p>
                  </Grid>
                </Grid>
              </div>
              <div className="wrapper">
                <LineAppear>
                  <div className="line-appear"></div>
                </LineAppear>
                <Grid container className="row">
                  <Grid size={{ md: 6 }}>
                    <TextAppear>
                      <h3>Privacy Policy</h3>
                    </TextAppear>
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <p>
                      Crescent Legacy Properties and each of our affiliates and
                      partnerships are committed to maintaining the accuracy,
                      confidentiality, and security of your personal
                      information. This Privacy Policy describes the personal
                      information that Crescent Legacy Properties collects from
                      or about you, how we use that information, and to whom we
                      disclose that information.
                    </p>
                  </Grid>
                </Grid>
              </div>
              <div className="wrapper hasMargin">
                <LineAppear>
                  <div className="line-appear"></div>
                </LineAppear>
                <Grid container className="row">
                  <Grid size={{ md: 6 }}>
                    <TextAppear>
                      <h3>
                        Collecting Personal
                        <br />
                        Information
                      </h3>
                    </TextAppear>
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <p>
                      Crescent Legacy Properties collects personal information
                      to better serve your needs, whether purchasing products
                      and services from us or obtaining service or warranty
                      work. To provide you with our wide variety of services,
                      products, and promotions, we may collect the following
                      information:
                    </p>
                    <p>
                      - Contact and mailing information such as name, address,
                      telephone numbers, fax numbers, and email addresses.
                      <br />
                      - The plans, specifications, and other particulars about
                      the home that is being built for you.
                      <br />
                      - Municipal and legal descriptions for your home.
                      <br />
                      - Any other relevant information necessary to provide you
                      with our products and services.
                      <br />
                      - We may need to collect other personal information, but
                      we will ask you directly and ensure that you agree.
                      <br />
                    </p>
                  </Grid>
                </Grid>
              </div>
              <div className="wrapper">
                <LineAppear>
                  <div className="line-appear"></div>
                </LineAppear>
                <Grid container className="row">
                  <Grid size={{ md: 6 }}>
                    <TextAppear>
                      <h3>
                        Personal Information
                        <br />
                        Security
                      </h3>
                    </TextAppear>
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <p>
                      Like you, Crescent Legacy Properties values our personal
                      information. Part of valuing your personal information is
                      making sure that it is protected and kept confidential.
                    </p>
                  </Grid>
                </Grid>
              </div>
              <div className="wrapper hasMargin">
                <LineAppear>
                  <div className="line-appear"></div>
                </LineAppear>
                <Grid container className="row">
                  <Grid size={{ md: 6 }}>
                    <TextAppear>
                      <h3>
                        Personal Information
                        <br />
                        Updating
                      </h3>
                    </TextAppear>
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <p>
                      Crescent Legacy Properties wants to ensure that your
                      personal information is always correct up to date. If your
                      personal information changes or is incorrect, updates can
                      be made by contacting your representative with the change
                      and any other information you feel is necessary.
                    </p>
                    <p>
                      We will keep your information as long as is necessary to
                      continue to meet your customer needs and any legal
                      requirements we may have. However, once your personal
                      information is no longer needed, we will destroy it.
                    </p>
                  </Grid>
                </Grid>
              </div>
              <div className="wrapper hasMargin">
                <LineAppear>
                  <div className="line-appear"></div>
                </LineAppear>
                <Grid container className="row">
                  <Grid size={{ md: 6 }}>
                    <TextAppear>
                      <h3>Personal Data</h3>
                    </TextAppear>
                  </Grid>
                  <Grid size={{ md: 6 }}>
                    <p>
                      We only collect Personal Data from you, such as first and
                      last name, phone number, e-mail, when you register to
                      receive information. We collect data about your activities
                      that does not personally or directly identify you when you
                      visit our website, or the websites and online services
                      where we display advertisements. This information may
                      include the content you view, the date and time that you
                      view this content, the products you purchase, or your
                      location information associated with your IP address. We
                      use the information we collect to serve you more relevant
                      advertisements (referred to as “Retargeting”). We collect
                      information about where you saw the ads we serve you and
                      what ads you clicked on.
                    </p>
                    <p>
                      As you browse online ad networks we work with may place
                      anonymous cookies on your computer, and use similar
                      technologies, in order to understand your interests based
                      on your (anonymous) online activities, and thus to tailor
                      more relevant ads to you. If you do not wish to receive
                      such tailored advertising, you can visit this page to
                      opt-out of most companies that engage in such advertising.
                      (This will not prevent you from seeing ads; the ads simply
                      will not be delivered through these targeting methods.)
                    </p>
                    <p>
                      We do not target ads to you based on sensitive personal
                      data, such as information related to race or ethnic
                      origins, political opinions, religious beliefs or other
                      beliefs of a similar nature, trade union membership,
                      physical or mental health or condition or sexual life. We
                      may target ads based on data provided by Advertisers or
                      partners alone or in combination with the data we collect
                      ourselves. Any data used to serve targeted advertisements
                      is de-identified and is not used to personally or directly
                      identify you. In order to allow us to reach the best
                      inventory online, we work with third-party advertising
                      companies (our “Advertising Partners”) to help us
                      recognize you and serve relevant advertisements to you
                      when you visit a website or online service in their
                      network. We also work with Advertising Partners who help
                      us recognize you across different devices in order to show
                      you relevant advertisements. Our Advertising Partners may
                      collect information about your activities on our website,
                      and other websites or online services in their networks.
                      We also work with third-party companies to assist us with
                      website analytics such as evaluating the use and operation
                      of our website so that we can continue to enhance the
                      website and our services.
                    </p>
                    <p>
                      We and our third-party partners use session cookies and
                      persistent cookies to make it easier for you to navigate
                      and enhance the experience of our site, and to monitor and
                      evaluate our website’s operation and use. To modify or
                      delete your personal information, or to opt-out of future
                      communications, please contact us at{" "}
                      <Link to="mailto:info@crescentlegacy.com">
                        info@crescentlegacy.com
                      </Link>
                      .
                    </p>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
};

export default Privacy;
