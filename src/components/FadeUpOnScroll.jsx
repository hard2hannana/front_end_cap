import { useEffect, useRef, useState, cloneElement } from "react";
import '/styles.css';


export default function FadeUpOnScroll({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      
    }, { threshold: 0.4 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return cloneElement(children, {
    ref,
    className: `fade-up ${visible ? 'visible' : ''} ${children.props.className || ''}`
  });
}
