import React from 'react';
import Item from './Item';

const Work = () => {
  return (
    <section id="work-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">A potpourri of select projects</p>
        <div className="items">
          <Item
            number="1"
            title="There's a package for you!"
            category="UX/UI Design"
          />
          <Item
            number="2"
            title="Look ma, no hands!"
            category="Brand Communication"
          />
          <Item
            number="3"
            title="The Umpire Strikes Back"
            category="UI/UX Design"
          />
          <Item
            number="5"
            title="Guess what happens next?"
            category="Video Production"
          />
          <Item
            number="4"
            title="How are we doing on time?"
            category="Frontend Dev + UX/UI Design"
          />
          <Item
            number="6"
            title="Step right up ladies and gentlemen"
            category="Visual Design"
          />
          <Item
            number="7"
            title="A twist of plot with that?"
            category="Authoring"
          />
          <Item
            number="8"
            title="How many likes did you get?"
            category="Employee Engagement"
          />
          <Item
            number="9"
            title="Place your bets..."
            category="Conceptual design"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
