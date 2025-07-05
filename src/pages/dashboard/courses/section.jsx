const Section = () => {
  return (
    <div className="course-section">
      <div className="eachcourse-container">
        <div className="course-img">
          <img src="/images/solana.png" alt="solana" />
          <h1>Introduction to solana blockchain</h1>
        </div>
        <p>
          Advancing your journey lets you earn experience points (XP), collect
          tradable $SKILL tokens, and access exclusive features while displaying
          your abilities. By completing interactive lessons, tackling exciting
          challenges, and joining competitive hackathons, you’ll build new
          skills, monitor your growth, and present your accomplishments to the
          world.
        </p>
      </div>

      <div className="course-content">
        <div className="course-btn">
          <button>Start Learning</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
