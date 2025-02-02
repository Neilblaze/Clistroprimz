import HideOnMobile from "./hide-on-mobile";

export default function Screenshot() {
  return (
    <>
      <style jsx>
        {`
          .screenshot {
            position: relative;
            text-align: center;
            margin: 3rem 0 2rem 0;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url(/static/screenshot.png);
          }

          .screenshot {
            border-radius: 5px;
            width: 100%;
            box-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);
          }

          @media only screen and (min-width: 768px) {
            .screenshot {
              margin: 6rem auto 1rem auto;
              background-image: url(/static/screenshot.png);
            }
          }

          .live-demo {
            text-align: center;
          }

          @media only screen and (min-width: 768px) {
            .live-demo {
              margin: 2rem 0 5rem 0;
            }
          }
        `}
      </style>
      <div className="screenshot">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1786 1340"></svg>
        <HideOnMobile>
        </HideOnMobile>
      </div>
      <p className="live-demo">
        Check out the <a href="https://youtu.be/wqDjAPXXzhY">Demo</a>, on Youtube!
      </p>
    </>
  );
}
