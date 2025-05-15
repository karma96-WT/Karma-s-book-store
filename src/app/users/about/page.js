import React from 'react'
import './local.css';
const page = () => {
  return (
    <div>
        <div id="background"></div>
        <h1 id="background-text">About Us</h1>
        <p id="background-text-para">
        Telling out inspiring stories form the very begining of the days
        </p>
        <div id="section">
        <div id="section-1">
            <h1>Behind the success</h1>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut rerum
            error iure illo corrupti reprehenderit hic quis eligendi? Assumenda
            vero harum dolor distinctio officia at consectetur porro quod rerum
            ullam.
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            voluptas? Quibusdam modi, dignissimos doloremque enim aut excepturi
            aspernatur perferendis atque quidem aliquam non, nihil perspiciatis
            assumenda aliquid eaque accusantium nam.
            </p>
        </div>
        <div id="section-2">
            <h1>Karma Wangchuk Titung</h1>
            <p>CEO</p>
            <img
            src="image/profile.jpg"
            alt="profile pic of CEO"
            width="150px"
            height="150px"
            />
        </div>
        </div>
    </div>
  )
}

export default page