import React, { useEffect, useState } from "react";

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "01/28/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime(),
      x = setInterval(() => {
        const now = new Date().getTime(),
          distance = countDown - now;

        setCountdown({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });

        if (distance < 0) {
          clearInterval(x);
        }
      }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div id="main-landing">
      <div className="hero section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 flex-bottom columnn club">
              CS HUB introduces
            </div>
            <div className="col-md-2 columnn venu">
              JOIN US AT <br />{" "}
              <a href="https://goo.gl/maps/8jvW3bwmUn2tzU3P7">
                BERGERON CENTER
              </a>{" "}
              <br /> ON JAN 28 @ 9 AM
            </div>

            <div className="col-md-10 columnn main-title">
              LOCAL <br /> HACK DAY 2023
            </div>
            <div className="col-md-2 columnn counter">
              <ul>
                <li>
                  <span id="days">{countdown.days}</span>days
                </li>
                <li>
                  <span id="hours">{countdown.hours}</span>Hours
                </li>
                <li>
                  <span id="minutes">{countdown.minutes}</span>Minutes
                </li>
                <li>
                  <span id="seconds">{countdown.seconds}</span>Seconds
                </li>
              </ul>
            </div>
          </div>
          <div className="row mob-only">
            <div className="col-md-12 columnn mob-venu">
              JOIN US AT <br /> <a href="#">BERGERON CENTER</a> <br /> ON JAN 28
              @ 9 AM
            </div>
            <div className="col-md-12 columnn mob-counter">
              <ul>
                <li>
                  <span id="days">{countdown.days}</span>days
                </li>
                <li>
                  <span id="hours">{countdown.hours}</span>Hours
                </li>
                <li>
                  <span id="minutes">{countdown.minutes}</span>Minutes
                </li>
                <li>
                  <span id="seconds">{countdown.seconds}</span>Seconds
                </li>
              </ul>
            </div>
            <div className="button_register">
              <a
                className="btn button-val btn-primary"
                href="https://organize.mlh.io/participants/events/9026-cshub-local-hack-day"
                role="button"
              >
                REGISTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
