import { useEffect, useState } from "react";

const homeData = {
  skills: [ "Degenerate", "Programmer"],
};
const AnimatedText = () => {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < homeData.skills.length - 1 ? text + 1 : 0);
      // console.log(homeData.skills.length - 1, text);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <span className="cd-headline rotate-1">
      <span className="blc space">Software </span>
      <span className="cd-words-wrapper fuck">
        {homeData.skills.map((skill, i) => (
          <div className="fuck">
            <b key={i} className={text === i ? "is-visible fuck" : "is-hidden fuck"}>
            {skill}
          </b>
          </div>
        ))}
      </span>
    </span>
  );
};
export default AnimatedText;
