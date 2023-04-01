import { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { useSpring, animated } from "react-spring";

const AnimatedDisplayCard = ({ item }) => {
  const { image, name, description } = item;
  const [toggle, setToggle] = useState(false);

  //if value of toggle is set to true, set opacity to 100%, otherwise set opacity to 0%
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    //duration is set to 500ms or half a second
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);
  // the above empty array signifies to react that we only want to run the side effect once - when the component first mounts - and not on subsequent re-renders

  return (
    //be sure to add in the animated div
    <animated.div style={animatedStyle}>
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </animated.div>
  );
};

export default AnimatedDisplayCard;
