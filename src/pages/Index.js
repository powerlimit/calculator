import React from 'react';

import {
  Link,
} from "react-router-dom";

import logo from '../assets/images/tru-logo.svg';
import girl from '../assets/images/girl.png';
import img1 from '../assets/images/q-img.png';
import img2 from '../assets/images/img-2.png';
import img3 from '../assets/images/img-3.png';
import whiteLogo from '../assets/images/tru-logo-white.svg';
import videoBg from '../assets/images/video-bg.png';
import {Video} from '../components/Video';

export const Index = () => {
  return (
    <div className="index-page">
      <div className="index-header">
        <div className="container">
          <div className="desktop-content">
            <div className="index-header-content flex-box start">
              <img src={logo} alt="" className="logo"/>
              <div className="stripe mt-lg-auto"/>
              <div className="colored title mb-2">
                <span className="colored-first">tru goals</span>
                <span className="colored-second">tru goals</span>
                <span className="colored-third">tru goals</span>
              </div>
              <p style={{maxWidth: 640}} className="mb-1">
                This quick 8 question quiz will allow you to understand what products {<br/>} are best suited for you
                to reach your goal and greatest potential.
              </p>
              <Link className="button filled hide-tablet mb-auto" to="/quiz">
                Take the quiz
              </Link>
            </div>
            <div className="index-header-img">
              <img src={videoBg} className="main-img my-auto" alt=""/>
              <Video id={512866536} />
            </div>
            <div className="text-center show-tablet mt-2">
              <Link className="button filled button-index" to="/quiz">
                Take the quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row reverted">
            <div>
              <div style={{maxWidth: 580}}>
                <div className="colored title mb-2">
                  <span className="colored-first">Tru committed</span>
                  <span className="colored-second">Tru committed</span>
                  <span className="colored-third">Tru committed</span>
                </div>
                <h2 className="h2 mb-1">
                  TRU is committed to your health and wellness goals and that starts with your daily nutrition.
                </h2>
                <p className="mb-1">
                  We have designed this calculator to take a decade of my nutrition coaching experience and give you
                  the exact info you need to start a healthier and more effective nutrition plan tailored for your
                  exact goals, TODAY.
                </p>
              </div>
            </div>
            <div>
              <img src={girl} alt="Girl" className="index-img"/>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg">
        <div className="container">
          <div className="row">
            <div>
              <div style={{maxWidth: 770}}>
                <div className="colored title mb-2">
                  <span className="colored-first">1. Find your calories.</span>
                  <span className="colored-second">1. Find your calories.</span>
                  <span className="colored-third">1. Find your calories.</span>
                </div>
                <p className="mb-1">Imagine trying to get somewhere you’ve never been to before without a map. Chances
                  are you would endlessly be driving around in circles non-stop not knowing what you’re doing. The
                  same is true for dieting. Dieting is based upon one simple principle - calories in versus calories
                  out. Knowing how many calories you should be consuming is a key for weight loss, healthy life style
                  nutrition, or even building lean muscle.</p>
              </div>
            </div>
            <div>
              <img src={img1} alt="" className="index-img"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row reverted">
            <div>
              <div style={{maxWidth: 835}}>
                <div className="colored title mb-2">
                  <span className="colored-first">2. Know your macros.</span>
                  <span className="colored-second">2. Know your macros.</span>
                  <span className="colored-third">2. Know your macros.</span>
                </div>
                <p className="mb-1">Figuring out the ins and outs of how your diet should be framed in terms of calories is hard enough. Add in the need to know how much protein, carbs, and fat you should consume on a daily basis; and it becomes even more tricky. The final step, taking one step further to use those macros and figure out how much of each to actually eat for breakfast, lunch, dinner, and everything in between can be yet again even more confusing.
                </p>
              </div>
            </div>
            <div>
              <img src={img2} alt="" className="index-img"/>
            </div>
          </div>
        </div>
      </section>

      <section className="section-bg">
        <div className="container">
          <div className="row">
            <div>
              <div style={{maxWidth: 770}}>
                <div className="colored title mb-2">
                  <span className="colored-first">3. Get a game plan.</span>
                  <span className="colored-second">3. Get a game plan.</span>
                  <span className="colored-third">3. Get a game plan.</span>
                </div>
                <p className="mb-1">
                  This calculator is based on not only your individual goals and caloric needs; but also your diet style
                  preference AND your lifestyle preference of how many meals you want to eat per day. My Nutrition & Lifestyle
                  Calculator uses a given set of basic variables including your age, gender, size and activity. After
                  determining your baseline number of calories, the calculator will then make adjustments based on:
                </p>
                <p className={'mb-5'}>
                  <strong>
                    - your activity levels <br/>
                    - your goals <br/>
                  </strong>
                  From there we will use your selection of a preferred diet style and the number of meals you'd like to eat
                  per day to create a <strong>personalized, and tailored daily nutritional outline for you!</strong>
                </p>
                <div className="text-center">
                  <Link className="button filled button-index" to="/quiz">
                    Take the quiz
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <img src={img3} alt="" className="index-img"/>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="text-center mb-5">
            <img src={whiteLogo} alt="Logo"/>
          </div>
          <p className="mb-1">These statements have not been evaluated by the Food and Drug Administration. This
            program is not intended to diagnose, treat, cure or prevent any disease.</p>
          <p className="mb-1">This product is certified by the NSF (National Sanitation Foundation) as Safe for Sport.
            This product is certified and tested by the Banned Substances Control Group (BCSG). This product is
            proudly manufactured and designed from start to finish in the USA.</p>
          <p className="mb-1">DISCLAIMERS <br/>
            Results will always vary for individuals, depending on the individual’s physical condition, lifestyle and
            diet. Testimonials on this site came from real customers who were not paid for your statements. But these
            testimonials are based on the experience of a few people and you may not have similar results. Always
            consult your physician before making any dietary changes or starting any nutrition, weight control or
            exercise program.</p>
          <p>©2020 All Rights Reserved. Copyright, Tru Supplements. Proudly Made in the United States</p>
        </div>
      </footer>
    </div>
  )
};







