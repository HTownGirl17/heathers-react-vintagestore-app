import React from "react";

export default function About() {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    console.log("hello from about");

    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => {
      console.log("about unmounted");
      return window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <section className="section about-section">
      <h1 className="section-title">About Us</h1>
      <p>
        Lorem ipsum dolor amet hoodie vice taxidermy humblebrag. Pinterest
        bitters fingerstache, roof party lo-fi direct trade cardigan irony
        pickled locavore. Literally activated charcoal celiac raclette franzen 3
        wolf moon. YOLO polaroid gentrify meditation cornhole disrupt woke
        kickstarter sriracha. Stumptown synth gochujang, skateboard pork belly
        cardigan tumblr chambray asymmetrical. Occupy direct trade before they
        sold out, tote bag gentrify small batch glossier coloring book shaman
        seitan. Gastropub raw denim thundercats banh mi.
      </p>
    </section>
  );
}
