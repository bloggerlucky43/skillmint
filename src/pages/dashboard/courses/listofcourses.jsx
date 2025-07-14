import "./listofcourses.css";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "/images/introtostarknet.PNG",
    text: "Discover the fundamentals of Starknet and why it matters in the blockchain space",
  },
  {
    src: "/images/introtostarknet.PNG",
    text: "Kickstart your Web3 journey by building fast, low-cost apps on Starknet. No experience needed — learn, build, and earn in minutes!",
  },

  {
    src: "/images/introtostarknet.PNG",
    text: "Kickstart your Web3 journey by building fast, low-cost apps on Starknet. No experience needed — learn, build, and earn in minutes!",
  },
  {
    src: "/images/introtostarknet.PNG",
    text: "Kickstart your Web3 journey by building fast, low-cost apps on Starknet. No experience needed — learn, build, and earn in minutes!",
  },
];

const lessons = [
  {
    src: "/images/introtostarknet.PNG",
    title: "Introduction to Solana",
    text: "Advancing your journey lets you earn experience points (XP), collect tradable $SKILL tokens, and access exclusive features while displaying your abilities. By completing interactive lessons, tackling exciting challenges, and joining competitive hackathons, you’ll build new skills, monitor your growth, and present your accomplishments to the world ",
  },
  {
    src: "/images/solana.png",
    title: "Introduction to Solana",
    text: "Advancing your journey lets you earn experience points (XP), collect tradable $SKILL tokens, and access exclusive features while displaying your abilities. By completing interactive lessons, tackling exciting challenges, and joining competitive hackathons, you’ll build new skills, monitor your growth, and present your accomplishments to the world ",
  },
  {
    src: "/images/solana.png",
    title: "Introduction to Solana",
    text: "Advancing your journey lets you earn experience points (XP), collect tradable $SKILL tokens, and access exclusive features while displaying your abilities. By completing interactive lessons, tackling exciting challenges, and joining competitive hackathons, you’ll build new skills, monitor your growth, and present your accomplishments to the world ",
  },
];
const ListOfCourses = () => {
  const navigate = useNavigate();
  const handleLesson = () => {
    console.log("Clicked");
    navigate("/en/learn/course");
  };
  return (
    <div className="course-container">
      <div className="courses-heading">
        <h1>Level Up</h1>
        <p>
          Advancing your journey lets you earn experience points (XP), collect
          tradable $SKILL tokens, and access exclusive features while displaying
          your abilities. By completing interactive lessons, tackling exciting
          challenges, and joining competitive hackathons, you’ll build new
          skills, monitor your growth, and present your accomplishments to the
          world.
        </p>
        <h3>Mini lessons</h3>
      </div>
      <div className="list">
        {images.map((course, index) => (
          <div className="courses" key={index} onClick={handleLesson}>
            <img src={course.src} alt={`course-${index}`} />
            <p>{course.text}</p>
          </div>
        ))}
      </div>

      <div className="main-course">
        <h1>Courses</h1>
        <div className="course-div">
          {lessons.map((lesson, index) => (
            <div className="course-inner" key={index}>
              <img src={lesson.src} alt={`lesson-${index}`} />
              <div className="course-text">
                <h2>{lesson.title}</h2>
                <hr />
                <p>9 lessons</p>
                <p>{lesson.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfCourses;
