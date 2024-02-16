// App.js

import React from 'react';
import './App.css';


const App = () => (
  <div className="Container">
    <div className="Box1">
      <div className="Header">
        <div className="Namari">
          <p>NAMARI</p>
        </div>

        <div className="navigation">
          <button>HOME</button>
          <button>ABOUT</button>
          <button>GALLERY</button>
          <button>SERVICES</button>
          <button>TESTIMONIALS</button>
          <button>CLIENTS</button>
          <button>PRICING</button>
        </div>

        <div className="social">
          <button>FB</button>
          <button>Google </button>
          <button>TWITTER</button>
          <button>INSTAGRAM </button>
          <button>BE</button>
        </div>
      </div>

      <div className="Box2">
        <div className="Heading">A FREE AND SIMPLE LANDING PAGE</div>

        <div className="Info">
          Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!
        </div>

        <button className="Start">Start Creating Today</button>

      </div>
    </div>

    <div className='Box3'>
      <div className='Box5'>
        <div className='H1'>
          <h4>SUCCESS</h4>
          <h2>How We Help You To Sell Your Product</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
        </div>
      </div>

      <div className='Box4'>
        <div>
          <div className='HTML'>
            <h4>HTML5 & CSS3</h4>
            <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico</p>
          </div>

          <div className='Easy'>
            <h4>Easy to Use</h4>
            <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi</p>
          </div>
        </div>

        <div className='Box6'>
          <div>
            <div className='Fully'>
              <h4>Fully Responsive</h4>
              <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum</p>
            </div>

            <div className='Parallax'>
              <h4>Parallax Effect</h4>
              <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum</p>
            </div>

          </div>
        </div>

      </div>

    </div>

    <div className='Box7'>
      <div className='Gallery1'>
        <img src={require("./gallery-image-1.jpg")} alt='Gallery1' />
        <img src={require("./gallery-image-2.jpg")} alt='Gallery2' />
        <img src={require("./gallery-image-3.jpg")} alt='Gallery3' />
      </div>

      <div className='Gallery2'>
        <img src={require("./gallery-image-4.jpg")} alt='Gallery4' />
        <img src={require("./gallery-image-5.jpg")} alt='Gallery5' />
        <img src={require("./gallery-image-6.jpg")} alt='Gallery6' />
      </div>

    </div>

    <div className='Box8'>
      <div className='Box9'>
        <div className='H2'>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" </h2>
          <p>— John Doe, Happy Customer</p>
        </div>
      </div>

      <div className='Box10'>
        <div className='H3'>
          <h4>BELIEVING</h4>
          <h1>Focusing On What Matters Most</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!</p>
          <button className="Watch Video">Watch Video</button>
        </div>

        <div className='photo'>
          <div className='dance'>
            <img src={require("./dancer.jpg")} alt='Dancer' />
          </div>
        </div>
      </div>

    </div>

  </div>
);

export default App;
