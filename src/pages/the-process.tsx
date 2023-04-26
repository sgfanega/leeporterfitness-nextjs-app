import Container from 'react-bootstrap/Container'
import PageBanner from '../../components/page-banner'
import data from '../../json/data.json'
import { Col, Row } from 'react-bootstrap'

export default function TheProcess() {
  const theProcessData = data?.data[0].pageContent.theProcess

  return (
  <>
    <PageBanner title={theProcessData.title} bannerImageUrl={theProcessData.bannerImageUrl}/>
    <section className="the-process__main d-flex justify-content-center align-items-center">
      <Container className="my-5">
        <Row className="justify-content-between">
          <Col className="rounded-3 shadow px-lg-4 py-lg-3" lg={8}>
            <p className="fs-1 fc-halloween-orange fw-500">You did it!</p>
              <div className="fs-5 fc-bright-gray">
                Congratulations, you made the first step in your fitness journey, 
                for that, I am proud of you. Your journey is just starting, and I know you have a lot of questions 
                on what to eat, what exercises to do, when to do them, and how to do them. Lucky for you, I am 
                licensed to teach you about how to morph the human body.
                <br/>
                <br/>
                There are so many different modalities to fitness, such as:
                <br/>
                <ul>
                  <li>High-Intensity Interval Training (HIIT)</li>
                  <li>Bodybuilding</li>
                  <li>CrossFit</li>
                  <li>Boxing</li>
                  <li>Powerlifting</li>
                  <li>Martial Arts</li>
                  <li>Yoga</li>
                </ul>
                When you're first starting out, it can be extremely overwhemling and exhausting. How does someone figure out what workouts to do?
                How do you know it will work for you? How do you know you're not wasting your time and money on a gym or person who won't give you
                what you're looking for?
                <br/>
                <br/>
                I specialize in helping people find out what their goals are, and how to achieve those goals. Not just the:
                <span className="fc-halloween-orange fw-500">"I want to lose weight"</span>, <span className="fc-halloween-orange fw-500">"I want 
                to fit in my jeans like when I was 18"</span> or <span className="fc-halloween-orange fw-500">"I want to get strong and not get 
                bulky"</span>.
                <br/>
                <br/>
                But deeper and more detailed goals in every aspect of your life. What do you want to FEEL like? What do you want to LOOK like?
                What kind of atmosphere are you looking for? Do you want someone to teach you, or someone to guide you?
                <br/>
                <br/>
                I want my clients to learn how to workout according to what they want and be able to do it on their own. I don't want to milk
                my clients out of their money and receive nothing for it. I want to set you up for success for the run.
                <br/>
                <br/>
                So let's get this started. You tell me what you want, and I will show you how to get them.
            </div>
          </Col>
          <Col lg={4}>
            <div className="rounded-3 shadow px-lg-4 py-lg-3">
            <h2>Meet Your Trainer</h2>

            </div>
          </Col>
        </Row>

      </Container>
    </section>
  </>
  )
}